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

// The header for base_sdk's header-menu registry: no image mark (South
// River has no logo file yet, so the wordmark alone is the brand), one
// anchor per section and one action, the WhatsApp order.
import type { HeaderMenu } from "@/components/custom/landing/header-menu";

import { SR_WHATSAPP_HREF } from "./southriver-landing-config";

const SR_HEADER_MENU: HeaderMenu = {
  brand: { logo: "none" },
  anchors: ["how", "pricing", "who", "water", "order", "contact"],
  links: [],
  actions: [{ id: "sr-order", label: "Order", href: SR_WHATSAPP_HREF, variant: "primary", external: true }],
};
export default SR_HEADER_MENU;
