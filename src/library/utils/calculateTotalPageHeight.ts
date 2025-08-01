/**
 * Calculates the total height of the page.
 * @returns The total height of the page in pixels.
 */
export const calculateTotalPageHeight = (): number => {
  const body = document.body;
  const html = document.documentElement;

  const totalPageHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  return totalPageHeight;
}