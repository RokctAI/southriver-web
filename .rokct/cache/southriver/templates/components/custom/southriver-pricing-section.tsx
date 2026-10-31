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
// Private-label pricing: the two case prices Ray gave, large, and South
// River's own 1.25 litre in its red label, named without a price (Ray has
// not confirmed retail prices).
import React from "react";

import { Bottle } from "@/components/custom/landing/southriver-art";
import { SR_LANDING_CONFIG, SR_WHATSAPP_HREF } from "@/components/custom/landing/southriver-landing-config";
import type {
  PageSectionMeta,
  PageSectionProps,
} from "@/components/custom/landing/page-sections";

export function SouthRiverPricingSection({ id }: { id?: string }) {
  const copy = SR_LANDING_CONFIG.pricing;
  return (
    <section id={id} className="sr-section w-full">
      <div className="container mx-auto flex max-w-6xl flex-col gap-12 px-4 xl:px-0">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="flex flex-col gap-5">
            <p className="sr-eyebrow">{copy.eyebrow}</p>
            <h2 className="sr-display sr-h2">{copy.heading}</h2>
          </div>
          <p className="sr-lede lg:pb-2">{copy.note}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {copy.tiers.map((tier) => (
            <article key={tier.name} className={`sr-card sr-tier ${tier.best ? "best" : ""}`}>
              <div className="flex items-center justify-between gap-3">
                <h3>{tier.name}</h3>
                {tier.best && <span className="sr-chip sun">Best price</span>}
              </div>
              <div className="flex items-end gap-3">
                <span className="price">{tier.price}</span>
                <span className="unit pb-2">{tier.unit}</span>
              </div>
              <p>{tier.detail}</p>
              <a
                href={SR_WHATSAPP_HREF}
                target="_blank"
                rel="noopener"
                className={`sr-btn mt-auto self-start ${tier.best ? "sr-btn-white" : "sr-btn-red"}`}
              >
                Order on WhatsApp
              </a>
            </article>
          ))}
        </div>

        <div className="sr-own grid items-center gap-8 overflow-hidden md:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-4">
            <p className="sr-eyebrow">{copy.own.eyebrow}</p>
            <h3 className="sr-display text-4xl md:text-5xl">{copy.own.heading}</h3>
            <p className="sr-lede max-w-xl">{copy.own.text}</p>
          </div>
          <figure className="flex justify-center md:pr-6">
            <Bottle id="own-125" label="southriver" height={300} />
          </figure>
        </div>
      </div>
    </section>
  );
}

export const meta: PageSectionMeta = { order: 30, nav: [{ id: "pricing", label: "Pricing" }] };
export default function SouthRiverPricingPageSection({ id }: PageSectionProps) {
  return <SouthRiverPricingSection id={id} />;
}
