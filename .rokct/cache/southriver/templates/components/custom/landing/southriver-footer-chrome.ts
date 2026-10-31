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

// The footer chrome row's settings: the copyright holder is the host's
// LEGAL_COMPANY_NAME, the version is this SDK's.
import { LEGAL_COMPANY_NAME } from "@/app/config/constants";
import type { FooterChromeConfig } from "@/components/custom/landing/footer-chrome-config";

export const SR_LANDING_VERSION = "1.0.0";
export const SR_FOOTER_CHROME: FooterChromeConfig = {
  copyrightHolder: LEGAL_COMPANY_NAME,
  version: process.env.NEXT_PUBLIC_APP_VERSION || SR_LANDING_VERSION,
  statusColors: {
    operational: "var(--sr-ok)",
    maintenance: "var(--sr-sun)",
    offline: "var(--sr-red)",
    checking: "var(--sr-sec)",
  },
};
