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
// The client half of South River's look: the stylesheet, and the token class
// plus the font variables on <html> while the landing is up. South River is
// a daylight brand, so nothing is defaulted to dark: the visitor's system
// scheme and the header's toggle decide.
"use client";

import { useEffect } from "react";

import "./southriver-theme.css";
import { SR_THEME_CLASSES } from "./southriver-theme-classes";

export function SouthRiverTheme() {
  useEffect(() => {
    const root = document.documentElement;
    const added = SR_THEME_CLASSES.filter((name) => !root.classList.contains(name));
    added.forEach((name) => root.classList.add(name));
    return () => added.forEach((name) => root.classList.remove(name));
  }, []);
  return null;
}
export default SouthRiverTheme;
