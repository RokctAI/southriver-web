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
// The "since 2021" line with the stamp on paper, then the three private-
// label steps on a full-width ink band.
import React from "react";

import { Stamp, Wave } from "@/components/custom/landing/southriver-art";
import { SR_LANDING_CONFIG } from "@/components/custom/landing/southriver-landing-config";
import type {
  PageSectionMeta,
  PageSectionProps,
} from "@/components/custom/landing/page-sections";

function StepGlyph({ n }: { n: number }) {
  const common = { width: 36, height: 36, viewBox: "0 0 36 36", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (n === 0)
    return (
      <svg {...common}>
        <path d="M18 24V8m0 0-5 5m5-5 5 5" />
        <path d="M6 22v5a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-5" />
      </svg>
    );
  if (n === 1)
    return (
      <svg {...common}>
        <rect x="5" y="9" width="26" height="18" rx="3" />
        <path d="M10 15h16M10 20h9" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M4 10h16v13H4zM20 15h7l5 5v3h-12z" />
      <circle cx="10" cy="28" r="2.5" />
      <circle cx="26" cy="28" r="2.5" />
    </svg>
  );
}

export function SouthRiverHowSection({ id }: { id?: string }) {
  const { intro, how } = SR_LANDING_CONFIG;
  return (
    <>
      <section className="w-full py-14 md:py-20">
        <div className="container mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[1fr_auto] md:gap-16 xl:px-0">
          <p className="text-xl leading-relaxed text-[var(--sr-ink)] md:text-[1.6rem] md:leading-snug">
            <span className="sr-display mr-2 text-[2.6rem] text-[var(--sr-red-text)] md:text-[3.4rem]">{intro.year}</span>
            {intro.text}
          </p>
          <div className="justify-self-center md:justify-self-end">
            <Stamp id="intro-stamp" lines={intro.stamp} size={170} />
          </div>
        </div>
      </section>

      <section id={id} className="sr-band sr-section w-full">
        <Wave className="sr-band-wave top" />
        <div className="container mx-auto flex max-w-6xl flex-col gap-12 px-4 xl:px-0">
          <div className="flex flex-col gap-5 md:max-w-3xl">
            <p className="sr-eyebrow">{how.eyebrow}</p>
            <h2 className="sr-display sr-h2">{how.heading}</h2>
          </div>
          <ol className="grid gap-4 md:grid-cols-3">
            {how.steps.map((step, i) => (
              <li key={step.title} className="sr-step">
                <div className="flex items-start justify-between">
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <StepGlyph n={i} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export const meta: PageSectionMeta = { order: 20, nav: [{ id: "how", label: "How it works" }] };
export default function SouthRiverHowPageSection({ id }: PageSectionProps) {
  return <SouthRiverHowSection id={id} />;
}
