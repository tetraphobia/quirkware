/**
 * A simple logging middleware for the Oak library.
 *
 * ```ts
 * import logger from "@quirkware/logger";
 *
 * // Pass the logging middleware to an Oak application.
 * app.use(logger());
 * ```
 *
 * @module
 */

export * from "./middleware.ts";
export * from "./logger.ts";

import { middleware } from "./middleware.ts";
export default middleware;
