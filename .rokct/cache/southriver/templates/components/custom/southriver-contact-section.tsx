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

import { SR_LANDING_CONFIG } from "@/components/custom/landing/southriver-landing-config";
import type {
  PageSectionMeta,
  PageSectionProps,
} from "@/components/custom/landing/page-sections";

export function SouthRiverContactSection({ id }: { id?: string }) {
  const copy = SR_LANDING_CONFIG.contact;
  return (
    <section id={id} className="sr-band red sr-section w-full">
      <div className="container mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[1fr_auto] xl:px-0">
        <div className="flex flex-col gap-5">
          <p className="sr-eyebrow">{copy.eyebrow}</p>
          <h2 className="sr-display sr-h2">{copy.heading}</h2>
          <p className="sr-lede max-w-xl">{copy.blurb}</p>
          <p className="text-sm text-white/75">{copy.areaNote}</p>
        </div>
        <a
          href={copy.whatsapp.href}
          target="_blank"
          rel="noopener"
          className="group flex flex-col gap-2 rounded-[28px] bg-white p-7 shadow-[0_30px_60px_-30px_rgba(0,0,0,.6)] transition-transform hover:-translate-y-1 md:min-w-[320px]"
          style={{ color: "#1d1416" }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] opacity-60">WhatsApp</span>
          <span className="sr-num text-5xl md:text-6xl">{copy.whatsapp.display}</span>
          <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold" style={{ color: "#d9001b" }}>
            Open a chat
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}

export const meta: PageSectionMeta = { order: 80, nav: [{ id: "contact", label: "Contact" }] };
export default function SouthRiverContactPageSection({ id }: PageSectionProps) {
  return <SouthRiverContactSection id={id} />;
}
