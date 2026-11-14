// src/components/analytics/GoogleAnalytics.jsx

import Script from "next/script";
import { Suspense } from "react";

import AnalyticsTracker from "./AnalyticsTracker";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  const ENABLE_ANALYTICS =

  process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

if (!GA_ID || !ENABLE_ANALYTICS) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            dataLayer.push(arguments);
          }

          window.gtag = gtag;

          gtag('js', new Date());

          gtag('config', '${GA_ID}', {
            send_page_view: false
          });
        `}
      </Script>

      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  );
}