/**
 * return a resource inside public folder
 * @param {string} publicRoute
 */
export const publicResource = (publicRoute: string) => `${process.env.PUBLIC_URL}${publicRoute}`;
