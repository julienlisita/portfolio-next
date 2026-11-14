// src/lib/analytics.js

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function pageview(url) {
  if (!GA_ID || typeof window === "undefined") return;

  if (typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_location: window.location.origin + url,
    page_path: url,
    page_title: document.title,
  });
}