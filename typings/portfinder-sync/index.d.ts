/**
 * portfinder-sync
 *
 * @description Find an open port synchronously.
 *
 * @exports getPort
 *
 * @example const basePort = 9229; // port to begin scanning at
 *          const openport = portFinderSync.getPort(basePort);
 *
 * @see https://github.com/jaridmargolin/portfinder-sync
 */
declare module 'portfinder-sync' {
  /**
   * Find an open port synchronously.
   *
   * @param {number} [base=8000] optional - port to begin scanning at
   *
   * @example const basePort = 9229; // port to begin scanning at
   *          const openport = portFinderSync.getPort(basePort);
   *
   * @returns open port
   */
  export function getPort(base?: number): number;
}
