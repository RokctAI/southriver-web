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

// The page that serves `/` in a shell whose home SDK is southriver_sdk (the
// South River site, RokctAI/southriver-web). Same role as hosting_sdk's
// app/page.tsx: the home SDK owns the root route. The site has no backend
// and no signed-in surface, so every visitor goes to base_sdk's composed
// landing at /landing. Installed only through the manifest's
// app_type["southriver-web"] block.

import { redirect } from "next/navigation";

export default function Page() {
  redirect("/landing");
}
