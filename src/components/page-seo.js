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
    "name": "Bricollano",
    "alternateName": "Bricollano Milano",
    "description": "Servizi professionali di riparazioni e manutenzione casa a Milano. Elettricista, idraulico, muratore qualificati con pagamenti innovativi.",
    "image": "https://cappomano.it/logo.png",
    "url": "https://cappomano.it",
    "telephone": "+393123456789",
    "email": "info@cappomano.it",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Milano, 1",
      "addressLocality": "Milano",
      "addressRegion": "Lombardia",
      "postalCode": "20121",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.4642,
      "longitude": 9.1900
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Milano"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Provincia di Milano"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 45.4642,
        "longitude": 9.1900
      },
      "geoRadius": "25000"
    },
    "priceRange": "€€",
    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-17:00"],
    "paymentAccepted": ["Bitcoin", "Ethereum", "Cash", "Credit Card"],
    "sameAs": [
      "https://www.facebook.com/bricollano",
      "https://www.instagram.com/bricollano"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi di Riparazione e Manutenzione Casa Milano",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Servizi Elettrici Milano",
            "description": "Elettricista qualificato per impianti elettrici, riparazioni e installazioni a Milano",
            "areaServed": "Milano",
            "serviceType": "Elettricista"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Servizi Idraulici Milano",
            "description": "Idraulico professionale per riparazioni, installazioni e manutenzione impianti idraulici a Milano",
            "areaServed": "Milano",
            "serviceType": "Idraulico"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Servizi Muratura Milano",
            "description": "Muratore esperto per ristrutturazioni, riparazioni e lavori di muratura a Milano",
            "areaServed": "Milano",
            "serviceType": "Muratore"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manutenzione Casa Milano",
            "description": "Servizi completi di manutenzione casa per privati e aziende a Milano",
            "areaServed": "Milano",
            "serviceType": "Manutenzione"
          }
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
