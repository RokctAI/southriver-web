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
// Registers South River's look as the first entry of base_sdk's landing host
// (order -2, rootClass, frame), before the hero. Renders nothing visible.
import React from "react";

import { SouthRiverTheme } from "@/components/custom/landing/southriver-theme";
import { SR_ROOT_CLASS } from "@/components/custom/landing/southriver-theme-classes";
import type {
  PageSectionMeta,
  PageSectionProps,
} from "@/components/custom/landing/page-sections";

export const meta: PageSectionMeta = {
  order: -2,
  nav: [],
  rootClass: SR_ROOT_CLASS,
  frame: true,
};

export default function SouthRiverThemeSection(_props: PageSectionProps) {
  return <SouthRiverTheme />;
}
