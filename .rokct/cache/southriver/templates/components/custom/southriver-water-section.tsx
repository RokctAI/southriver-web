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
// The water, on a deep red band: alkaline, reverse osmosis,
// Musina since 2021, and the composition table exactly as the South River
// label prints it. Only those facts; no health claims.
import React from "react";

import { Wave } from "@/components/custom/landing/southriver-art";
import { SR_LANDING_CONFIG } from "@/components/custom/landing/southriver-landing-config";
import type {
  PageSectionMeta,
  PageSectionProps,
} from "@/components/custom/landing/page-sections";

export function SouthRiverWaterSection({ id }: { id?: string }) {
  const copy = SR_LANDING_CONFIG.water;
  const table = copy.table;
  return (
    <section id={id} className="sr-band red sr-section w-full">
      <Wave className="sr-band-wave top" />
      <div className="container mx-auto flex max-w-6xl flex-col gap-12 px-4 xl:px-0">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
          <div className="flex flex-col gap-6">
            <p className="sr-eyebrow">{copy.eyebrow}</p>
            <h2 className="sr-display sr-h2">{copy.heading}</h2>
            <p className="sr-lede max-w-xl">{copy.blurb}</p>
            <div className="mt-2 flex gap-4">
              <div className="sr-big-stat">
                <small>pH</small>
                <b>{table.ph}</b>
              </div>
              <div className="sr-big-stat">
                <small>TDS, mg/ℓ</small>
                <b>{table.tds}</b>
              </div>
            </div>
          </div>
          <figure className="sr-comp">
            <figcaption>
              <span>{table.heading}</span>
              <small>{table.note}</small>
            </figcaption>
            <dl>
              {table.minerals.map((m) => (
                <div key={m.name}>
                  <dt>
                    {m.name} <span>{m.symbol}</span>
                  </dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          </figure>
        </div>
        <ol className="sr-chain">
          {copy.chain.map((step) => (
            <li key={step.k}>
              <small>{step.k}</small>
              <b>{step.v}</b>
            </li>
          ))}
        </ol>
      </div>
      <Wave className="sr-band-wave bottom" />
    </section>
  );
}

export const meta: PageSectionMeta = { order: 50, nav: [{ id: "water", label: "The water" }] };
export default function SouthRiverWaterPageSection({ id }: PageSectionProps) {
  return <SouthRiverWaterSection id={id} />;
}
