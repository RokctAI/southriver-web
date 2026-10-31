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

// South River's two faces, served through next/font. Montserrat is the
// label's own voice: the bottle's wordmark is a heavy, slanted SOUTH over a
// light RIVER, so the display face is Montserrat at 900 italic for the
// headlines and the prices, and 400 for the light half of the wordmark.
// Figtree is the text face.
import { Figtree, Montserrat } from "next/font/google";

export const southRiverDisplay = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--sr-font-display",
  display: "swap",
});

export const southRiverSans = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--sr-font-sans",
  display: "swap",
});
