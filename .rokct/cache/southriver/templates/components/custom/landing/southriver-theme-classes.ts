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
import { southRiverDisplay, southRiverSans } from "./southriver-fonts";

/** The class every southriver-theme.css rule is scoped to. */
export const SR_THEME_CLASS = "sr-landing";
export const SR_THEME_CLASSES: readonly string[] = [
  SR_THEME_CLASS,
  southRiverSans.variable,
  southRiverDisplay.variable,
];
export const SR_ROOT_CLASS = SR_THEME_CLASSES.join(" ");
