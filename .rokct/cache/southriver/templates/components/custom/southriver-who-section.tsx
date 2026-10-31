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
// Who private label is for: four uses, each shown as the same bottle
// wearing a different label.
import React from "react";

import { Bottle } from "@/components/custom/landing/southriver-art";
import { SR_LANDING_CONFIG } from "@/components/custom/landing/southriver-landing-config";
import type {
  PageSectionMeta,
  PageSectionProps,
} from "@/components/custom/landing/page-sections";

export function SouthRiverWhoSection({ id }: { id?: string }) {
  const copy = SR_LANDING_CONFIG.whoFor;
  return (
    <section id={id} className="sr-section sr-alt w-full">
      <div className="container mx-auto flex max-w-6xl flex-col gap-12 px-4 xl:px-0">
        <div className="flex flex-col gap-5 text-center md:mx-auto md:max-w-2xl md:items-center">
          <p className="sr-eyebrow">{copy.eyebrow}</p>
          <h2 className="sr-display sr-h2">{copy.heading}</h2>
          <p className="sr-lede">{copy.blurb}</p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {copy.uses.map((use, i) => (
            <li key={use.title} className="sr-use">
              <div className="shelf">
                <Bottle id={`use-${i}`} label={use.label} height={250} cap={i === 2 ? "#b88a5a" : use.label.bg} />
              </div>
              <h3>{use.title}</h3>
              <p>{use.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export const meta: PageSectionMeta = { order: 40, nav: [{ id: "who", label: "Who it is for" }] };
export default function SouthRiverWhoPageSection({ id }: PageSectionProps) {
  return <SouthRiverWhoSection id={id} />;
}
