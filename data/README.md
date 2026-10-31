# `data/` — South River's whole site, as data

This shell runs in **`local`** data mode (`"data": "local"` in
[`composer.json`](../composer.json)) with **corporate_sdk as its home SDK**.
There is no South River SDK: corporate_sdk is the one renderer every
local-data client site shares, and everything that makes this site South
River lives here and in [`public/`](../public). The contract is
`base/nextjs/docs/site-data.md` in `RokctAI/core` (base_sdk 1.53.0 and
later); how a client is added is `corporate/nextjs/docs/local-sites.md` in
`RokctAI/corporate`.

## What is here

| file            | what it holds                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| `theme.json`    | the red-label palette (light and dark), Montserrat 900 italic capitals for display and Figtree for text           |
| `site.json`     | the name, the SOUTH ® RIVER wordmark, motto, the WhatsApp number, header action, page metadata and footer line   |
| `sections.json` | the page top to bottom: poster hero with the two bottles, since 2021, how it works, pricing, who it is for, the water (pH and the label's composition table), the order form and contact |
| `pricing.json`  | R150 a case from ten cases, R180 under ten                                                                        |
| `order.json`    | the WhatsApp order form: fields, the message it types and the label preview                                      |
| `site.css`      | the last mile: South River's exact shadcn colour triplets and one table colour                                   |

The own label on the 1.25 L bottle is `public/brand/south-river-label.svg`,
with its text outlined so it draws without web fonts.

## Rules

- `theme`, `site` and `sections` are required by corporate_sdk as home: in
  `local` mode a build without one stops and names the file. A pricing or
  order section needs its file, and anything that opens WhatsApp needs the
  number in `site.json`.
- Every file is validated down to the field at build time; any other
  `.json` or `.md` file here (a typo such as `section.json`) fails the
  build. This `README.md` is allowed.
- Art is a public path (`/brand/...`, served from `public/`) or an https URL.

## How it reaches the bundle

`package.json` runs `node lib/site-data/generate.mjs` as `prebuild` and
`predev` (installed by `base_sdk` at compose time). It reads the mode from
`composer.json`, validates every file here, and writes
`lib/site-data/generated.ts` so the content travels inside the build:
nothing reads the disk at request time. The generated module is composed
output and is not committed.
