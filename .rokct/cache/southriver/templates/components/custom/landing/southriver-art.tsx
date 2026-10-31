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

// South River's product art, drawn in SVG so the page carries its own
// pictures with nothing to fetch: a PET bottle (500 ml, or the taller
// 1.25 litre South River sells under its own label) wearing either a
// client's label (that is the product: the client's label on our water) or
// South River's own red label, redrawn from the printed one (wordmark, NEW
// tab, PREPARED WATER, STILL, the pH 8 badge, careline; no barcode). Also
// the stacked wordmark, a round stamp and a wave edge. Server-safe: no
// hooks, no browser APIs. Every gradient id is prefixed with the instance
// `id`, so several bottles can share a page.
import React from "react";

import type { SouthRiverLabel } from "./southriver-landing-config";

/** South River's brand red, the label's ground. */
export const SR_RED = "#d9001b";
/** The label's yellow ("IMPROVED TASTE"). */
export const SR_LABEL_YELLOW = "#ffe500";

export type SouthRiverBottleSize = "500 ml" | "1.25 L";

function bodyPath(extra: number) {
  const b = 496 + extra;
  return `M86 48 H134 V82 C134 104 192 112 192 164 V${b} C192 ${b + 42} 180 ${b + 74} 150 ${b + 90} Q110 ${b + 104} 70 ${b + 90} C40 ${b + 74} 28 ${b + 42} 28 ${b} V164 C28 112 86 104 86 82 Z`;
}

const LABEL_SHAPE = "M20 250 Q110 262 200 250 V404 Q110 416 20 404 Z";

/**
 * South River's own label, front face, drawn in a 180 x 150 box and scaled
 * into the part of the label band the bottle's body shows (x 34 to 185).
 */
function OwnLabelFace() {
  const display = "var(--sr-font-display-stack)";
  return (
    <g transform="translate(34 256) scale(0.84)">
      <rect x="18" y="7" width="40" height="18" rx="4" fill="#ffffff" />
      <text x="38" y="21" textAnchor="middle" fontFamily={display} fontStyle="italic" fontWeight="900" fontSize="13" fill={SR_RED}>
        NEW
      </text>
      <text x="64" y="20" fontFamily={display} fontWeight="600" fontSize="8" letterSpacing="0.04em" fill={SR_LABEL_YELLOW}>
        IMPROVED TASTE
      </text>
      <g transform="skewX(-6)">
        <text
          x="22"
          y="68"
          fontFamily={display}
          fontWeight="900"
          fontSize="42"
          textLength="148"
          lengthAdjust="spacingAndGlyphs"
          fill="#ffffff"
        >
          SOUTH
        </text>
      </g>
      <text x="171" y="40" fontFamily={display} fontWeight="700" fontSize="8" fill="#ffffff">
        ®
      </text>
      <text
        x="14"
        y="110"
        fontFamily={display}
        fontWeight="400"
        fontSize="42"
        textLength="128"
        lengthAdjust="spacingAndGlyphs"
        fill="#ffffff"
      >
        RIVER
      </text>
      {/* pH 8 badge */}
      <rect x="148" y="74" width="24" height="60" rx="3" fill="none" stroke="#ffffff" strokeWidth="1.6" />
      <text x="160" y="104" textAnchor="middle" fontFamily={display} fontWeight="900" fontSize="22" fill="#ffffff">
        8
      </text>
      <rect x="149" y="112" width="22" height="21" fill="#ffffff" />
      <text x="160" y="127" textAnchor="middle" fontFamily={display} fontWeight="500" fontSize="11" fill={SR_RED}>
        pH
      </text>
      {/* PREPARED WATER + STILL */}
      <rect x="12" y="117" width="96" height="16" rx="2" fill="#ffffff" />
      <text
        x="16"
        y="129"
        fontFamily={display}
        fontWeight="900"
        fontSize="10"
        textLength="88"
        lengthAdjust="spacingAndGlyphs"
        fill={SR_RED}
      >
        PREPARED WATER
      </text>
      <rect x="111" y="117" width="33" height="16" rx="2" fill="none" stroke="#ffffff" strokeWidth="1.4" />
      <text x="127.5" y="129" textAnchor="middle" fontFamily={display} fontWeight="500" fontSize="10" fill="#ffffff">
        STILL
      </text>
      <text x="12" y="146" fontFamily={display} fontWeight="700" fontSize="5.6" letterSpacing="0.08em" fill="#ffffff" opacity="0.9">
        CARELINE 015 000 6069
      </text>
      <text x="172" y="146" textAnchor="end" fontFamily={display} fontWeight="800" fontSize="7" fill="#ffffff">
        1.25 LITRE
      </text>
    </g>
  );
}

function ClientLabelFace({ label, size }: { label: SouthRiverLabel; size: SouthRiverBottleSize }) {
  const len = label.name.length;
  const nameSize = len > 14 ? 15 : len > 11 ? 18 : len > 8 ? 22 : 26;
  // Montserrat 900 runs about 0.8em a capital: squeeze anything wider than
  // the 136 units of label the bottle shows.
  const fit = nameSize * 0.8 * len > 136 ? { textLength: 136, lengthAdjust: "spacingAndGlyphs" as const } : {};
  return (
    <>
      <text
        x="110"
        y="318"
        textAnchor="middle"
        fontFamily="var(--sr-font-display-stack)"
        fontWeight="900"
        fontStyle="italic"
        fontSize={nameSize}
        fill={label.fg}
        {...fit}
      >
        {label.name.toUpperCase()}
      </text>
      <line x1="62" y1="332" x2="158" y2="332" stroke={label.fg} strokeOpacity="0.5" strokeWidth="1" />
      <text x="110" y="352" textAnchor="middle" fontFamily="var(--sr-font-sans-stack)" fontWeight="600" fontSize="12" fill={label.fg} opacity="0.85">
        {label.sub}
      </text>
      <text
        x="110"
        y="390"
        textAnchor="middle"
        fontFamily="var(--sr-font-sans-stack)"
        fontWeight="500"
        fontSize="7"
        letterSpacing="0.06em"
        fill={label.fg}
        opacity="0.6"
      >
        {`BOTTLED BY SOUTH RIVER · ${size.toUpperCase()}`}
      </text>
    </>
  );
}

/**
 * A PET bottle. `label` is a client's label, or "southriver" for South
 * River's own (which is always the 1.25 litre bottle).
 */
export function Bottle({
  id,
  label,
  height = 560,
  cap,
  className,
  style,
}: {
  id: string;
  label: SouthRiverLabel | "southriver";
  height?: number;
  cap?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const own = label === "southriver";
  const size: SouthRiverBottleSize = own ? "1.25 L" : "500 ml";
  const extra = own ? 90 : 0;
  const vbH = 620 + extra;
  const body = bodyPath(extra);
  const w = (height * 240) / vbH;
  const capFill = cap ?? (own ? SR_RED : "#ffffff");
  const name = own ? "South River" : label.name;
  const ribsLow = [448, 468, 488].map((y) => y + extra);
  return (
    <svg
      width={w}
      height={height}
      viewBox={`0 0 240 ${vbH}`}
      role="img"
      aria-label={`${size} bottle labelled ${name}`}
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id={`${id}-water`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6fbfd" />
          <stop offset="0.4" stopColor="#dcedf3" />
          <stop offset="1" stopColor="#a9d2e2" />
        </linearGradient>
        <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="0.18" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.86" stopColor="#1b2a33" stopOpacity="0.12" />
          <stop offset="1" stopColor="#1b2a33" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id={`${id}-lab`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.2" />
          <stop offset="0.2" stopColor="#fff" stopOpacity="0.1" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.85" stopColor="#000" stopOpacity="0.1" />
          <stop offset="1" stopColor="#000" stopOpacity="0.34" />
        </linearGradient>
        <linearGradient id={`${id}-cap`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id={`${id}-drop`} cx="0.35" cy="0.3" r="0.7">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="1" stopColor="#5a8396" stopOpacity="0.25" />
        </radialGradient>
        <clipPath id={`${id}-clip`}>
          <path d={body} />
        </clipPath>
        <filter id={`${id}-blur`} x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <ellipse cx="112" cy={604 + extra} rx="78" ry="9" fill="#1a0508" opacity="0.35" filter={`url(#${id}-blur)`} />

      <rect x="78" y="2" width="64" height="38" rx="7" fill={capFill} />
      <rect x="78" y="2" width="64" height="38" rx="7" fill={`url(#${id}-cap)`} />
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1={85 + i * 6.3} y1="8" x2={85 + i * 6.3} y2="34" stroke="#000" strokeOpacity="0.12" strokeWidth="1.4" />
      ))}
      <rect x="80" y="40" width="60" height="9" rx="3" fill={capFill} opacity="0.85" />

      <path d={body} fill={`url(#${id}-water)`} />
      <g clipPath={`url(#${id}-clip)`}>
        {[176, 194, 212].map((y) => (
          <path key={y} d={`M20 ${y} Q110 ${y + 7} 200 ${y}`} fill="none" stroke="#fff" strokeOpacity="0.6" strokeWidth="2" />
        ))}
        {[180, 198, 216].map((y) => (
          <path key={y} d={`M20 ${y} Q110 ${y + 7} 200 ${y}`} fill="none" stroke="#1b2a33" strokeOpacity="0.1" strokeWidth="1.5" />
        ))}
        {ribsLow.map((y) => (
          <path key={y} d={`M20 ${y} Q110 ${y + 7} 200 ${y}`} fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" />
        ))}
        {ribsLow.map((y) => (
          <path key={`s${y}`} d={`M20 ${y + 4} Q110 ${y + 11} 200 ${y + 4}`} fill="none" stroke="#1b2a33" strokeOpacity="0.1" strokeWidth="1.5" />
        ))}

        <path d={LABEL_SHAPE} fill={own ? SR_RED : label.bg} />
        {own ? <OwnLabelFace /> : <ClientLabelFace label={label} size={size} />}
        <path d={LABEL_SHAPE} fill={`url(#${id}-lab)`} />

        <path d={body} fill={`url(#${id}-sheen)`} />
        <rect x="44" y="128" width="12" height={440 + extra} rx="6" fill="#fff" opacity="0.32" />
        <rect x="176" y="150" width="4" height={400 + extra} rx="2" fill="#1b2a33" opacity="0.14" />
      </g>

      {[
        [58, 150, 5],
        [160, 140, 4],
        [70, 226, 3.5],
        [150, 232, 6],
        [48, 430 + extra, 4],
        [172, 420 + extra, 3.5],
        [100, 520 + extra, 5],
        [140, 548 + extra, 3],
        [62, 560 + extra, 4.5],
        [120, 110, 3],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={`url(#${id}-drop)`} className="sr-drop" style={{ animationDelay: `${i * 0.7}s` }} />
      ))}
    </svg>
  );
}

/** The label's wordmark as type: a heavy slanted SOUTH over a light RIVER. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`sr-wordmark ${className ?? ""}`} aria-label="South River" role="img">
      <b aria-hidden="true">
        SOUTH<sup>®</sup>
      </b>
      <span aria-hidden="true">RIVER</span>
    </span>
  );
}

/** A round "stamp" with text around the rim: South River's mark of origin. */
export function Stamp({ id, lines, size = 150, center = "pH 8" }: { id: string; lines: readonly string[]; size?: number; center?: string }) {
  const text = lines.join("  ·  ") + "  ·  ";
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className="sr-stamp" aria-label={lines.join(", ")} role="img">
      <defs>
        <path id={`${id}-ring`} d="M100 100 m-74 0 a74 74 0 1 1 148 0 a74 74 0 1 1 -148 0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="100" cy="100" r="54" fill="currentColor" />
      <text fontFamily="var(--sr-font-display-stack)" fontWeight="800" fontSize="14" letterSpacing="0.12em" fill="currentColor">
        <textPath href={`#${id}-ring`} startOffset="0">
          {text.toUpperCase()}
        </textPath>
      </text>
      <text x="100" y="113" textAnchor="middle" fontFamily="var(--sr-font-display-stack)" fontStyle="italic" fontWeight="900" fontSize="36" fill="var(--sr-on-red)">
        {center}
      </text>
    </svg>
  );
}

/** A soft wave edge, used between bands. */
export function Wave({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 40 C240 90 480 -10 720 40 C960 90 1200 -10 1440 40 V80 H0 Z" fill="currentColor" />
    </svg>
  );
}
