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

// South River's hero body for base_sdk's hero-form registry: the whole
// poster, on the label's red. The stacked headline, one WhatsApp call to
// action, and the product drawn large: a private-label 500 ml bottle in
// front (a client's white label), South River's own 1.25 litre in its red
// label behind it.
"use client";

import React from "react";
import Link from "next/link";

import type { HeroFormProps } from "@/components/custom/landing/hero-form";

import { Bottle } from "./southriver-art";
import { SR_LANDING_CONFIG } from "./southriver-landing-config";

const CLIENT_LABEL = { bg: "#ffffff", fg: "#1d1416", name: "Your logo", sub: "Still water · 500 ml" };

export default function SouthRiverHeroForm(_props: HeroFormProps) {
  const copy = SR_LANDING_CONFIG.hero;
  return (
    <div className="sr-hero">
      <div aria-hidden="true" className="sr-hero-glow" />
      <div aria-hidden="true" className="sr-hero-stripes" />
      <div className="sr-hero-grid">
        <div className="flex flex-col gap-7">
          <p className="sr-hero-eyebrow sr-rise">{copy.eyebrow}</p>
          <h1 className="sr-hero-h1 sr-rise">
            {copy.lines.map((line, i) => (
              <span key={line} className={`block ${i === copy.accentLine ? "accent" : ""}`}>
                {line}
              </span>
            ))}
          </h1>
          <p className="sr-hero-lede sr-rise d1">{copy.lede}</p>
          <div className="sr-rise d2 flex flex-col gap-3 sm:flex-row">
            <a href={copy.cta.href} className="sr-btn sr-btn-white" target="_blank" rel="noopener">
              <WhatsAppGlyph />
              {copy.cta.label}
            </a>
            <Link href={copy.secondary.href} className="sr-btn sr-btn-light">
              {copy.secondary.label}
            </Link>
          </div>
          <ul className="sr-hero-facts sr-rise d3">
            {copy.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
        <div className="sr-hero-stage">
          <div aria-hidden="true" className="halo" />
          <div className="back">
            <Bottle id="hero-back" label="southriver" height={600} />
          </div>
          <div className="main">
            <Bottle id="hero-main" label={CLIENT_LABEL} height={500} />
          </div>
          <div className="sr-hero-tag">
            <b>{copy.tag.price}</b>
            <span>{copy.tag.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3 4.4c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.3s1 2.7 1.1 2.9c.2.2 2 3.1 4.9 4.2 2.4.9 2.9.8 3.4.7.5 0 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3l-.6-.3-2-1c-.3-.1-.5-.2-.7.2l-.9 1.2c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.4 0-.5L10 8.7c-.2-.5-.4-.5-.6-.5H9z" />
    </svg>
  );
}
