# Copyright (c) 2026 ROKCT INTELLIGENCE (PTY) LTD
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published
# by the Free Software Foundation, version 3.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program. If not, see <https://www.gnu.org/licenses/>.

"""Contract tests for southriver/nextjs's manifest and its landing.

Run from the repository root:

    python3 -m unittest discover -s southriver/nextjs/tests -v

The `app_type["southriver-web"]` block is the South River site's landing
(Ray, 2026-10-30 brief; 2026-10-31: "build, we will change when built").
The things that must never silently drift: every install source exists and
every template is installed; every module a base_sdk registry imports in
the SERVER render is server-safe (no "use client" - the hero form is the
one exception); every page section exports a `meta` with its place in the
page; every host file the landing imports is declared in `requires`; the
facts on the page are the brief's and the label's (WhatsApp number, case
prices, the composition table); the footer advertises the manifest's
version; and the copy carries no placeholder. Stdlib only, the shape
polaris/nextjs's tests/test_manifest.py takes.
"""

import json
import os
import re
import unittest

HERE = os.path.dirname(os.path.abspath(__file__))
SDK_ROOT = os.path.abspath(os.path.join(HERE, os.pardir))
MANIFEST = os.path.join(SDK_ROOT, "manifest.json")
CHANGELOG = os.path.join(SDK_ROOT, "CHANGELOG.md")
TEMPLATES = os.path.join(SDK_ROOT, "templates")
CUSTOM = os.path.join(TEMPLATES, "components", "custom")
LANDING = os.path.join(CUSTOM, "landing")
COPY = os.path.join(LANDING, "southriver-landing-config.ts")
ART = os.path.join(LANDING, "southriver-art.tsx")
FOOTER_CHROME = os.path.join(LANDING, "southriver-footer-chrome.ts")
THEME_SECTION = os.path.join(CUSTOM, "southriver-theme-section.tsx")
FOOTER_SECTION = os.path.join(CUSTOM, "southriver-footer-section.tsx")

APP_TYPE = "southriver-web"
PAGE_SECTIONS_TARGET = "components/custom/landing/page-sections.ts"
HERO_FORM_TARGET = "components/custom/landing/hero-form.ts"

ALIAS_IMPORT = re.compile(r"""from\s+["']@/([^"']+)["']""")
REPLACEMENT_IMPORT = re.compile(r"""import\(["']@/([^"']+)["']\)""")
PLACEHOLDER = re.compile(r"\[\[|TODO|lorem ipsum|\{\{", re.IGNORECASE)

# The label's "Composition in mg per litre" table, as printed.
LABEL_COMPOSITION = {
    "Ca": "10",
    "Mg": "10",
    "Na": "3",
    "K": "1",
    "Cl": "2",
    "SO₄": "4",
    "as CaCO₃": "65",
    "as N": "1",
    "as F": "<0.1",
    "as Fe": "<0.1",
    "as Al": "<0.3",
}


def read(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def is_client_module(source):
    """Whether the module's first statement is the "use client" directive:
    the licence block and any leading line comments are skipped first."""
    rest = source.lstrip()
    while True:
        if rest.startswith("/*"):
            end = rest.find("*/")
            rest = rest[end + 2:].lstrip() if end >= 0 else ""
        elif rest.startswith("//"):
            newline = rest.find("\n")
            rest = rest[newline + 1:].lstrip() if newline >= 0 else ""
        else:
            break
    return rest.startswith('"use client"') or rest.startswith("'use client'")


class ManifestContract(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.manifest = json.loads(read(MANIFEST))
        cls.block = cls.manifest["app_type"][APP_TYPE]
        cls.installed = {}  # host path -> template source path
        for entry in cls.manifest["installs"] + cls.block["installs"]:
            cls.installed[entry["to"]] = os.path.join(SDK_ROOT, entry["from"])
        cls.requires = set(cls.manifest.get("requires", [])) | set(cls.block.get("requires", []))

    def source_for_host_path(self, host_path):
        for candidate in (host_path + ".ts", host_path + ".tsx", host_path):
            if candidate in self.installed:
                return self.installed[candidate]
        return None

    def test_name_and_version_match_changelog(self):
        self.assertEqual(self.manifest["name"], "southriver_sdk")
        version = self.manifest["version"]
        self.assertRegex(version, r"^\d+\.\d+\.\d+$")
        self.assertIn("## %s\n" % version, read(CHANGELOG))

    def test_installer_names_this_sdk(self):
        self.assertIn("sdk_name = 'southriver_sdk'", read(os.path.join(SDK_ROOT, "install.py")))

    def test_everything_installs_only_through_the_app_type_block(self):
        self.assertEqual(self.manifest["installs"], [])
        self.assertEqual(self.manifest["integrations"], [])
        self.assertEqual(self.manifest["dependencies"], {})

    def test_every_install_source_exists(self):
        for entry in self.block["installs"]:
            path = os.path.join(SDK_ROOT, entry["from"])
            self.assertTrue(os.path.isfile(path), "missing install source: %s" % entry["from"])
            self.assertEqual(entry["from"], "templates/" + entry["to"])

    def test_every_template_is_installed(self):
        sources = {os.path.relpath(p, SDK_ROOT) for p in self.installed.values()}
        for root, _dirs, files in os.walk(TEMPLATES):
            for name in files:
                rel = os.path.relpath(os.path.join(root, name), SDK_ROOT)
                self.assertIn(rel, sources, "%s is in templates but no install names it" % rel)

    def test_integration_ids_are_unique(self):
        ids = [re.search(r'id: "([^"]+)"', i["replacement"]).group(1) for i in self.block["integrations"]]
        self.assertEqual(len(ids), len(set(ids)), "duplicate registry ids: %s" % ids)

    def test_registry_entry_modules_are_installed_and_server_safe(self):
        for integration in self.block["integrations"]:
            match = REPLACEMENT_IMPORT.search(integration["replacement"])
            self.assertIsNotNone(match, integration["replacement"])
            source = self.source_for_host_path(match.group(1))
            self.assertIsNotNone(source, "%s is registered but not installed" % match.group(1))
            if integration["target"] == HERO_FORM_TARGET:
                self.assertTrue(is_client_module(read(source)), "base renders the hero form on the client")
                continue
            self.assertFalse(
                is_client_module(read(source)),
                "%s is imported in base's server render and must not be a client module" % source,
            )

    def test_every_page_section_exports_meta_with_an_order(self):
        sections = [i for i in self.block["integrations"] if i["target"] == PAGE_SECTIONS_TARGET]
        self.assertGreaterEqual(len(sections), 6)
        for integration in sections:
            source = read(self.source_for_host_path(REPLACEMENT_IMPORT.search(integration["replacement"]).group(1)))
            self.assertIn("export const meta: PageSectionMeta", source)
            self.assertRegex(source, r"order:\s*-?\d+")
            self.assertIn("export default function", source)

    def test_theme_and_footer_are_frame_sections(self):
        theme = read(THEME_SECTION)
        self.assertIn("rootClass: SR_ROOT_CLASS", theme)
        self.assertIn("frame: true", theme)
        self.assertRegex(theme, r"order:\s*-\d+")
        footer = read(FOOTER_SECTION)
        self.assertIn("frame: true", footer)
        self.assertIn("listPublicTerms", footer)
        self.assertIn("legalFooterLinks", footer)

    def test_every_host_import_is_declared_in_requires(self):
        for entry in self.block["installs"]:
            path = os.path.join(SDK_ROOT, entry["from"])
            if path.endswith(".css"):
                continue
            for host_path in ALIAS_IMPORT.findall(read(path)):
                if self.source_for_host_path(host_path) is not None:
                    continue
                candidates = {host_path, host_path + ".ts", host_path + ".tsx"}
                self.assertTrue(
                    candidates & self.requires,
                    "%s imports @/%s, which neither this SDK installs nor requires names" % (entry["from"], host_path),
                )

    def test_facts_are_the_briefs(self):
        copy = read(COPY)
        self.assertIn('SR_WHATSAPP_NUMBER = "015 000 6069"', copy)
        self.assertIn('SR_WHATSAPP_HREF = "https://wa.me/27150006069"', copy)
        self.assertEqual(sorted(set(re.findall(r"\bR\d+\b", copy))), ["R150", "R180"], "only the two case prices")
        self.assertNotRegex(copy.lower(), r"\b(cures?|heals?|healing|detox|boosts?)\b", "no health claims")

    def test_water_section_carries_the_label_composition(self):
        copy = read(COPY)
        for symbol, value in LABEL_COMPOSITION.items():
            self.assertIn('symbol: "%s", value: "%s"' % (symbol, value), copy)
        self.assertIn('ph: "8.1"', copy)
        self.assertIn('tds: "83"', copy)

    def test_own_label_is_the_red_one_without_a_barcode(self):
        art = read(ART)
        self.assertIn('SR_RED = "#d9001b"', art)
        self.assertIn("1.25 LITRE", art)
        self.assertIn("CARELINE 015 000 6069", art)
        self.assertNotIn("barcode", art.lower().replace("no barcode", ""))

    def test_footer_advertises_the_manifest_version(self):
        self.assertIn('SR_LANDING_VERSION = "%s"' % self.manifest["version"], read(FOOTER_CHROME))

    def test_copy_carries_no_placeholder_and_no_slug(self):
        copy = read(COPY)
        self.assertIsNone(PLACEHOLDER.search(copy), "placeholder text in the landing copy")
        self.assertNotIn("southriver-web", copy)


if __name__ == "__main__":
    unittest.main()
