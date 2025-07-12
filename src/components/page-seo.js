"use client";

import { useEffect } from "react";
import Script from "next/script";

/**
 * This component adds structured data and enhances SEO at the page level
 * for the Cappomano website.
 */
export default function PageSEO() {
  // Add font preconnect for performance
  useEffect(() => {
    // Preconnect to Google Fonts to improve loading performance
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnectLink);
    
    const preconnectLink2 = document.createElement('link');
    preconnectLink2.rel = 'preconnect';
    preconnectLink2.href = 'https://fonts.gstatic.com';
    preconnectLink2.crossOrigin = 'anonymous';
    document.head.appendChild(preconnectLink2);
  }, []);

  // Add JSON-LD structured data for rich results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cappomano",
    "description": "Servizi per la casa con pagamenti in criptovalute e sistema di credito integrato.",
    "image": "https://cappomano.it/logo.png",
    "url": "https://cappomano.it",
    "telephone": "+393123456789",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Milano",
      "addressRegion": "MI",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.4642,
      "longitude": 9.1900
    },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.facebook.com/cappomano",
      "https://www.instagram.com/cappomano"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Servizi Idraulici",
          "description": "Riparazione e installazione di sistemi idraulici domestici"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Servizi Elettrici",
          "description": "Installazione e riparazione di impianti elettrici"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Domestici",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Servizi Idraulici",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Riparazione Idraulica"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Servizi Elettrici"
        }
      ]
    }
  };

  return (
    <>
      {/* Add structured data for search engines */}
      <Script id="schema-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
    </>
  );
}
