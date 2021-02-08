//third party dependencies
export { opine, serveStatic } from "https://deno.land/x/opine@0.25.0/mod.ts";
export { cuid } from 'https://deno.land/x/cuid/index.js';
export { Client } from 'https://deno.land/x/mysql/mod.ts';
export { opineCors } from "https://deno.land/x/cors@v1.2.1/opineCors.ts";

//outdated dependencies
export { writeJsonSync } from 'https://deno.land/x/jsonfile/mod.ts';
export { readJsonSync } from "https://deno.land/x/jsonfile/mod.ts";
import { setColorEnabled } from "https://deno.land/std@0.77.0/fmt/colors.ts";