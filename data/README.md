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

| file            | what it holds                                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `theme.json`    | the red-label palette (light and dark), Montserrat 900 italic capitals for display and Figtree for text                                                                                                                                   |
| `site.json`     | the name, the one-row SOUTH RIVER logo in the header (`south-river-logo-row.svg`) and the two-line one in the footer, motto, the WhatsApp number, header action, page metadata and footer line                                                                                                |
| `sections.json` | the page top to bottom: poster hero with the two bottles (the front one rolls through four sample labels; the hero loops to the three sizes, its words from the pricing section's `own` block), since 2021, how it works, pricing, who it is for, the water (pH and the label's composition table), the order form and contact |
| `pricing.json`  | the ONE source of every price, the case size and the minimum order: R180 a case under ten cases (with its bottle), R150 from ten (with the slider, which starts at the tier's `minQty`); `perCase` bottles to a case. Any string in any file may say `{bestPrice}`, `{bestMin}`, `{basePrice}` or `{perCase}` and prints these numbers |
| `products.json` | South River's own sizes, 500 ml, 1.5 L and 5 L: `name` (the size and its tag), `description` (the tag's line), `sizes[0]` (the words on the bottle's label), `sizes[1]` (the hero's fact) |
| `order.json`    | the WhatsApp order form: fields, the message it types and the label preview                                                                                                                                                               |
| `site.css`      | the last mile: South River's exact shadcn colour triplets and one table colour                                                                                                                                                            |

The own label on the 500 ml, 1.5 L and 5 L bottles is `public/brand/south-river-label.svg`,
with its text outlined so it draws without web fonts; the size words are set over it from `products.json`. The logo itself
(white, Montserrat ExtraBold Italic outlines) is
`public/brand/south-river-logo.svg`: the header draws it as is, the footer
masks it to the brand red. `site.css` sizes it in the header.

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
