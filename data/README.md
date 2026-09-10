# `data/` — South River's host-owned site data

This shell runs in **`local`** data mode (`"data": "local"` in
[`composer.json`](../composer.json)): South River has no backend, so every
composed SDK reads what it would otherwise ask a backend for from the files
in this folder, through `base_sdk`'s server-only reader
(`@/lib/site-data/read-site-data`). The contract is
`base/nextjs/docs/site-data.md` in `RokctAI/core` (base_sdk 1.35.0 and
later); this file only summarises it.

The brand name is never in `data/`. It stays where it is declared: the home
SDK's site-metadata copy and the host's `PLATFORM_NAME`.

## Kinds

| kind        | file                    | shape                                                                                                                                  |
| ----------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `theme`     | `data/theme.json`       | `{ primary, secondary?, accent? }` — hex strings (`#rgb` or `#rrggbb`)                                                                   |
| `team`      | `data/team.json`        | `{ members: [{ name, role, photo?, links?: [{ label, href }] }] }`                                                                       |
| `stockists` | `data/stockists.json`   | `{ items: [{ name, address, town, lat?, lng?, mapsUrl? }] }` (`lat` and `lng` together or not at all)                                    |
| `products`  | `data/products.json`    | `{ items: [{ name, description?, sizes?: string[], image?, status?: "active" \| "coming" }] }`                                          |
| `about`     | `data/about.md`         | the markdown, verbatim, as a string                                                                                                    |
| `legal`     | `data/legal/<slug>.md`  | one file per document; the title from a `title:` front-matter line, else the first `# ` heading (removed from the body)                |

`photo` and `image` are public paths (`/team/jane.jpg`, served from this
shell's `public/`) or absolute URLs. A slug is lowercase letters, digits and
single dashes. Any other `.json` or `.md` file in `data/` (a typo such as
`teams.json`) fails the build; this `README.md` is allowed.

## What is here today

- `theme.json` — the brand colour: `primary` `#e4333b`. `base_sdk` turns it
  into the shell's `--primary` / `--ring` tokens (and `--site-primary` as the
  raw hex) on every route; no layout edit is needed.

The other kinds are deliberately absent until South River supplies the
content: team, stockists, products, about and legal are South River's own
words and will be added as real files, never as placeholders. In `local`
mode a kind that a composed SDK's manifest declares under
`site_data.requires` must exist or the build stops with the file named, so
add the file before composing an SDK that needs it.

## How it reaches the bundle

`package.json` runs `node lib/site-data/generate.mjs` as `prebuild` and
`predev` (the script is installed by `base_sdk` at compose time). It reads
the mode from `composer.json`, validates every file here, and writes
`lib/site-data/generated.ts` so the content travels inside the build —
nothing reads the disk at request time. The generated module is composed
output and is not committed.
