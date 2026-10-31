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
// The private-label order form. It sends nothing itself: it composes a
// WhatsApp message from the fields and opens wa.me with it, so the order
// lands where South River already takes orders. The live label preview
// shows the business name on the bottle as the visitor types.
"use client";

import React, { useMemo, useState } from "react";

import { Bottle } from "@/components/custom/landing/southriver-art";
import { SR_LANDING_CONFIG, SR_WHATSAPP_HREF } from "@/components/custom/landing/southriver-landing-config";
import { WhatsAppGlyph } from "@/components/custom/landing/southriver-hero-form";

export function SouthRiverOrderForm() {
  const copy = SR_LANDING_CONFIG.order;
  const [business, setBusiness] = useState("");
  const [cases, setCases] = useState("");
  const [area, setArea] = useState("");
  const [phone, setPhone] = useState("");
  const [logoName, setLogoName] = useState("");

  const href = useMemo(() => {
    const n = Number(cases);
    const price = n >= 10 ? "R150" : n > 0 ? "R180" : "";
    const lines = [
      "Hi South River, I would like a private-label quote.",
      business && `Business/event: ${business}`,
      cases && `Cases of 500 ml: ${cases}${price ? ` (${price} a case)` : ""}`,
      area && `Delivery area: ${area}`,
      phone && `My WhatsApp: ${phone}`,
      logoName ? `Logo file: ${logoName} (I will send it here)` : "I will send my logo here.",
    ].filter(Boolean);
    return `${SR_WHATSAPP_HREF}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [business, cases, area, phone, logoName]);

  const n = Number(cases);
  const label = {
    bg: "#ffffff",
    fg: "#1d1416",
    name: business.trim() || "Your logo",
    sub: "Still water · 500 ml",
  };

  return (
    <form
      className="grid gap-6 sm:grid-cols-[1fr_auto]"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(href, "_blank", "noopener");
      }}
    >
      <div className="grid gap-4">
        <label className="sr-field">
          <span>{copy.fields.business}</span>
          <input className="sr-input" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="e.g. Mapungubwe Guest House" maxLength={40} />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="sr-field">
            <span>{copy.fields.cases}</span>
            <input className="sr-input" inputMode="numeric" value={cases} onChange={(e) => setCases(e.target.value.replace(/\D/g, ""))} placeholder="10" />
          </label>
          <label className="sr-field">
            <span>{copy.fields.phone}</span>
            <input className="sr-input" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="07x xxx xxxx" />
          </label>
        </div>
        <label className="sr-field">
          <span>{copy.fields.area}</span>
          <input className="sr-input" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Town or suburb" />
        </label>
        <label className="sr-field">
          <span>{copy.fields.logo}</span>
          <span className="sr-file relative">
            <input type="file" accept="image/*,.pdf" onChange={(e) => setLogoName(e.target.files?.[0]?.name ?? "")} />
            <b>Choose file</b>
            <span className="truncate">{logoName || "PNG, JPG, SVG or PDF"}</span>
          </span>
        </label>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
          <button type="submit" className="sr-btn sr-btn-red">
            <WhatsAppGlyph />
            {copy.submit}
          </button>
          <p className="sr-fine">{copy.fine}</p>
        </div>
      </div>
      <aside className="sr-preview sm:w-[180px]">
        <small>Label preview</small>
        <Bottle id="order-preview" label={label} height={240} />
        <div className="text-center">
          <div className="sr-num text-3xl text-white">{n >= 10 ? "R150" : "R180"}</div>
          <div className="text-xs font-semibold opacity-80">a case{n >= 10 ? ", 10 or more" : ", under 10 cases"}</div>
        </div>
      </aside>
    </form>
  );
}
