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

// The site's <title>, description and cards for base_sdk's site-metadata
// registry. The name is the host's PLATFORM_NAME.
import { PLATFORM_NAME } from "@/app/config/platform";
import type { SiteMetadataCopy } from "@/components/custom/landing/site-metadata";

const SR_SITE_METADATA: SiteMetadataCopy = {
  siteName: PLATFORM_NAME,
  title: `${PLATFORM_NAME}: private-label bottled water, Musina`,
  tagline: "Your brand on every bottle",
  description:
    "Private-label 500 ml bottled water for shops, offices, weddings and events: your logo on South River's alkaline, reverse-osmosis water, bottled in Musina since 2021. R150 a case from ten cases. Order on WhatsApp.",
  keywords: ["private label water", "branded bottled water", "Musina", "Limpopo", "alkaline water", "event water"],
  themeColor: "#d9001b",
  locale: "en_ZA",
};
export default SR_SITE_METADATA;
