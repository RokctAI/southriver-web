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
// The order form's server entry: heading and copy here, the form itself
// (state, the WhatsApp link it builds) in the client sibling.
import React from "react";

import { SR_LANDING_CONFIG } from "@/components/custom/landing/southriver-landing-config";
import type {
  PageSectionMeta,
  PageSectionProps,
} from "@/components/custom/landing/page-sections";

import { SouthRiverOrderForm } from "./southriver-order-form.client";

export function SouthRiverOrderSection({ id }: { id?: string }) {
  const copy = SR_LANDING_CONFIG.order;
  return (
    <section id={id} className="sr-section w-full">
      <div className="container mx-auto max-w-6xl px-4 xl:px-0">
        <div className="sr-card grid gap-10 overflow-hidden p-7 md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div className="flex flex-col gap-5">
            <p className="sr-eyebrow">{copy.eyebrow}</p>
            <h2 className="sr-display sr-h2">{copy.heading}</h2>
            <p className="sr-lede">{copy.blurb}</p>
          </div>
          <SouthRiverOrderForm />
        </div>
      </div>
    </section>
  );
}

export const meta: PageSectionMeta = { order: 60, nav: [{ id: "order", label: "Order" }] };
export default function SouthRiverOrderPageSection({ id }: PageSectionProps) {
  return <SouthRiverOrderSection id={id} />;
}
