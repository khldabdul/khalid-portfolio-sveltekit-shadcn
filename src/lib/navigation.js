// Navigation module for direct Vite use
export function goto(url) {
  window.location.href = url;
  return Promise.resolve();
}
