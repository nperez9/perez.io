/**
 * return a resource inside public folder
 * @param {string} publicRoute 
 */
export const publicResource = (publicRoute) => `${process.env.PUBLIC_URL}${publicRoute}`;