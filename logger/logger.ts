import * as colors from "@std/fmt/colors";

/**
 * Called on a success status code.
 */
export function success(status: number, method: string, path: string) {
  const prefix = `[${colors.green(status.toString())}]`;
  console.log([prefix, method, path].join(" "));
}

/**
 * Called on any status code except success, error, or redirect.
 */
export function info(status: number, method: string, path: string) {
  const prefix = `[${colors.white(status.toString())}]`;
  console.log([prefix, method, path].join(" "));
}

/**
 * Called on a redirect status code.
 */
export function warn(status: number, method: string, path: string) {
  const prefix = `[${colors.yellow(status.toString())}]`;
  console.log([prefix, method, path].join(" "));
}

/**
 * Called on an error status code.
 */
export function error(status: number, method: string, path: string) {
  const prefix = `[${colors.red(status.toString())}]`;
  console.log([prefix, method, path].join(" "));
}
