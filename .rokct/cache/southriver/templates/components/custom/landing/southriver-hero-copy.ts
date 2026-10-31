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
// South River's hero copy for base_sdk's hero-copy registry. The headline
// is a stacked poster line, not a rotating word, so no words are
// registered: base's h1 then renders nothing and the hero form
// (./southriver-hero-form.tsx) carries the page's one h1 itself.
import type { HeroCopy } from "@/components/custom/landing/hero-copy";

const SR_HERO_COPY: HeroCopy = {
  headlineWords: [],
  headlineSuffix: "",
  placeholders: [],
  backgroundImage: "",
  logo: "none",
  trustLine: [],
  badges: [],
};
export default SR_HERO_COPY;
