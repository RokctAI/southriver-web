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

// Every word the South River landing says, in one place. The page sells
// PRIVATE-LABEL bottled water (the client's own label on South River
// water), per Ray's brief of 30 Oct. Facts are only the ones Ray allowed
// (1 Sep, 30 Oct) and the ones printed on South River's own label: trading
// since 2021, alkaline water (pH 8 on the label), municipal feed
// cleaned by reverse osmosis, the label's composition table, R150 / R180 a
// case, WhatsApp and careline 015 000 6069. No health claims, no retail
// prices until Ray confirms them, and nothing copied from another brand.

export const SR_WHATSAPP_NUMBER = "015 000 6069";
export const SR_WHATSAPP_HREF = "https://wa.me/27150006069";

/** One mineral line of the label's "Composition in mg per litre" table. */
export interface SouthRiverMineral {
  name: string;
  symbol: string;
  value: string;
}

export const SR_LANDING_CONFIG = {
  brand: {
    name: "South River",
    motto: "Alkaline prepared water, bottled in Musina.",
    town: "Musina, Limpopo",
    since: "2021",
  },
  hero: {
    eyebrow: "Private-label bottled water",
    lines: ["Your brand", "on every", "bottle."],
    accentLine: 2,
    lede:
      "Still water for shops, offices, weddings and events, with your name on the label. Send us your logo; we print the label, fill the bottles and deliver the cases.",
    cta: { label: "Order on WhatsApp", href: SR_WHATSAPP_HREF },
    secondary: { label: "See prices", href: "#pricing" },
    facts: ["Alkaline, pH 8", "Reverse-osmosis purified", "Bottled in Musina since 2021"],
    tag: { price: "R150", text: "a case of 500 ml, from 10 cases" },
  },
  intro: {
    year: "Since 2021",
    text:
      "South River has bottled water in Musina, at the top of Limpopo. The feed is municipal water, cleaned by reverse osmosis and bottled alkaline, at pH 8. Now the same water can carry your name.",
    stamp: ["Alkaline", "Musina", "Since 2021"],
  },
  how: {
    eyebrow: "How private label works",
    heading: "Three steps from your logo to a case on the counter.",
    steps: [
      {
        title: "Send your logo",
        text: "WhatsApp us your logo or artwork and the number of cases you need. A plain name in your colours works too.",
      },
      {
        title: "We make the label",
        text: "We set your logo on a 500 ml label, show you a proof, and print it once you say yes.",
      },
      {
        title: "We fill and deliver",
        text: "The bottles are filled, labelled and packed in cases in Musina, then delivered to you.",
      },
    ],
  },
  pricing: {
    eyebrow: "Private-label pricing",
    heading: "One price for a case. Less when you order ten.",
    tiers: [
      {
        name: "Ten cases or more",
        price: "R150",
        unit: "per case",
        detail: "500 ml bottles with your label. The price for most offices, shops and events.",
        best: true,
      },
      {
        name: "Fewer than ten cases",
        price: "R180",
        unit: "per case",
        detail: "The same bottles and label for a small first order or a single function.",
        best: false,
      },
    ],
    note: "Prices per case of 500 ml bottles, label included. Delivery is quoted for your area on WhatsApp.",
    own: {
      eyebrow: "Under our own label",
      heading: "South River 1.25 litre.",
      text: "The same prepared still water in South River's red label. Ask on WhatsApp for current prices and the other sizes.",
    },
  },
  whoFor: {
    eyebrow: "Who it is for",
    heading: "Same water. Four kinds of label.",
    blurb: "Every bottle is the same 500 ml of South River water; only the label changes.",
    uses: [
      {
        title: "Shops and spazas",
        text: "Your shop's name on the cold-drink shelf, at a case price that leaves room for margin.",
        label: { bg: "#ffd23f", fg: "#2a1a00", name: "Your shop", sub: "Still water · 500 ml" },
      },
      {
        title: "Offices",
        text: "Branded water on the boardroom table and at reception, delivered by the case.",
        label: { bg: "#1d2433", fg: "#ffffff", name: "Your firm", sub: "Still water · 500 ml" },
      },
      {
        title: "Weddings",
        text: "The couple's names and the date on every bottle on every table.",
        label: { bg: "#f7ece6", fg: "#6a3b2e", name: "Thabo & Naledi", sub: "14 · 02 · 2027" },
      },
      {
        title: "Events",
        text: "A sponsor's or an organiser's mark for the marathon, the festival or the church camp.",
        label: { bg: "#13866f", fg: "#ffffff", name: "Your event", sub: "Still water · 500 ml" },
      },
    ],
  },
  water: {
    eyebrow: "The water",
    heading: "Alkaline, cleaned by reverse osmosis.",
    blurb:
      "The feed is Musina's municipal supply. It goes through reverse-osmosis membranes that take out most of the dissolved solids, and is bottled alkaline, at pH 8, with a clean, light taste.",
    chain: [
      { k: "Feed", v: "Municipal supply" },
      { k: "Treatment", v: "Reverse osmosis" },
      { k: "Result", v: "Alkaline, pH 8" },
      { k: "Bottled", v: "Musina, since 2021" },
    ],
    table: {
      heading: "Composition in mg per litre",
      note: "As printed on the South River label.",
      ph: "8.1",
      tds: "83",
      minerals: [
        { name: "Calcium", symbol: "Ca", value: "10" },
        { name: "Magnesium", symbol: "Mg", value: "10" },
        { name: "Sodium", symbol: "Na", value: "3" },
        { name: "Potassium", symbol: "K", value: "1" },
        { name: "Chloride", symbol: "Cl", value: "2" },
        { name: "Sulphate", symbol: "SO₄", value: "4" },
        { name: "Alkalinity", symbol: "as CaCO₃", value: "65" },
        { name: "Nitrate", symbol: "as N", value: "1" },
        { name: "Fluoride", symbol: "as F", value: "<0.1" },
        { name: "Iron", symbol: "as Fe", value: "<0.1" },
        { name: "Aluminium", symbol: "as Al", value: "<0.3" },
      ] as readonly SouthRiverMineral[],
    },
  },
  order: {
    eyebrow: "Order",
    heading: "Tell us about your order.",
    blurb:
      "Fill in what you know and the form opens WhatsApp with the details already typed. We reply with a label proof and a delivery quote.",
    fields: {
      business: "Business or event name",
      cases: "Cases wanted",
      area: "Delivery area",
      phone: "Your WhatsApp number",
      logo: "Your logo (optional, we will also ask for it on WhatsApp)",
    },
    submit: "Send order on WhatsApp",
    fine: "Nothing is sent until you press send in WhatsApp.",
  },
  contact: {
    eyebrow: "Contact",
    heading: "WhatsApp us.",
    blurb: "Orders, label proofs and delivery quotes all happen on WhatsApp. The same number is the careline on every South River bottle.",
    whatsapp: { display: SR_WHATSAPP_NUMBER, href: SR_WHATSAPP_HREF },
    areaNote: "Based in Musina, Limpopo. Message us for delivery times to your area.",
  },
  footer: {
    links: [
      { label: "How it works", href: "#how" },
      { label: "Pricing", href: "#pricing" },
      { label: "Who it is for", href: "#who" },
      { label: "The water", href: "#water" },
      { label: "Order", href: "#order" },
      { label: "Contact", href: "#contact" },
    ],
  },
} as const;

export type SouthRiverLandingConfig = typeof SR_LANDING_CONFIG;
/** A client's label on a private-label bottle. */
export type SouthRiverLabel = { bg: string; fg: string; name: string; sub: string };
