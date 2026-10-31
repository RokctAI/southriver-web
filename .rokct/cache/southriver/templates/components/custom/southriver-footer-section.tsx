/*
 * Copyright (c) 2026 ROKCT INTELLIGENCE (PTY) LTD
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
import React from "react";
import Link from "next/link";

import { listPublicTerms } from "@/app/actions/base/legal";
import { FooterChromeRow } from "@/components/custom/footer-chrome";
import { legalFooterLinks } from "@/components/custom/landing/legal-links";
import { Wordmark } from "@/components/custom/landing/southriver-art";
import { SR_FOOTER_CHROME } from "@/components/custom/landing/southriver-footer-chrome";
import { SR_LANDING_CONFIG } from "@/components/custom/landing/southriver-landing-config";
import type {
  PageSectionMeta,
  PageSectionProps,
} from "@/components/custom/landing/page-sections";

export async function SouthRiverFooterSection({ id }: { id?: string }) {
  const terms = await listPublicTerms();
  const { brand, footer } = SR_LANDING_CONFIG;
  return (
    <footer id={id} className="w-full border-t border-[var(--sr-sub)] py-14 text-[var(--sr-sec)] md:py-20">
      <div className="container mx-auto flex max-w-6xl flex-col gap-12 px-4 xl:px-0">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="flex flex-col gap-2">
            <Wordmark className="text-[2.1rem] text-[var(--sr-red-text)]" />
            <p className="mt-2 text-base font-semibold text-[var(--sr-ink)]">{brand.motto}</p>
            <p className="sr-k">
              {brand.town} · bottling since {brand.since}
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm font-semibold sm:flex sm:flex-wrap">
            {footer.links.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-[var(--sr-ink)]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <FooterChromeRow
          config={{ ...SR_FOOTER_CHROME, links: legalFooterLinks(terms) }}
          className="border-t border-[var(--sr-sub)] pt-6"
        />
      </div>
    </footer>
  );
}

export const meta: PageSectionMeta = { order: 95, nav: [], anchor: "site-footer", frame: true };
export default function SouthRiverFooterPageSection({ id }: PageSectionProps) {
  return <SouthRiverFooterSection id={id} />;
}
