/**
 * A function that configures and returns middleware to be passed to Oak.
 * @module
 */
import * as logger from "./logger.ts";
import * as http from "@std/http";
import type { Context, Middleware, Next } from "@oak/oak";

/**
 * Returns middleware passed to Oak during initialization.
 *
 * @example
 * ```ts
 * import { middleware } from "@quirkware/logger";
 *
 * // Pass the logging middleware to an Oak application.
 * app.use(middleware());
 * ```
 */
export function middleware(): Middleware {
  return async ({ request, response }: Context, next: Next) => {
    await next();

    const { method, url } = request;
    const { status } = response;

    if (http.isSuccessfulStatus(status)) {
      logger.success(status, method, url.pathname);
    } else if (http.isErrorStatus(status)) {
      logger.error(status, method, url.pathname);
    } else if (http.isRedirectStatus(status)) {
      logger.warn(status, method, url.pathname);
    } else {
      logger.info(status, method, url.pathname);
    }
  };
}
