/**
 * Cross-origin and application URL resolver.
 */

export function getDashboardUrl(): string {
  if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_APP_URL) {
    return import.meta.env.VITE_APP_URL;
  }

  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:5174';
    }
  }

  return 'https://app.kitchenwatch.com';
}

export const DASHBOARD_URL = getDashboardUrl();
