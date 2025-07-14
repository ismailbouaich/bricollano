import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import HydrationHandler from "@/components/hydration-handler";
import RefreshLoading from "@/components/refresh-loading";

// Primary heading font - elegant, luxury feel
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Body font - modern, clean and highly readable
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://bricollano.it'),
  title: "Bricollano Milano | Riparazioni e Manutenzione Casa Milano",
  description: "Servizi professionali di riparazioni e manutenzione casa a Milano. Elettricista, idraulico, muratore qualificati. Pagamenti crypto e credito flessibile.",
  keywords: [
    "riparazioni Milano", 
    "manutenzione casa Milano", 
    "Bricollano Milano",
    "elettricista Milano",
    "idraulico Milano", 
    "muratore Milano",
    "servizi domestici Milano",
    "pagamenti crypto",
    "Navigli",
    "Porta Romana", 
    "Duomo Milano",
    "professionisti casa"
  ],
  authors: [{ name: "Bricollano" }],
  creator: "Bricollano",
  publisher: "Bricollano",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Bricollano Milano | Riparazioni e Manutenzione Casa Milano",
    description: "Servizi professionali di riparazioni e manutenzione casa a Milano. Elettricista, idraulico, muratore qualificati. Pagamenti crypto e credito flessibile.",
    url: "https://bricollano.it",
    siteName: "Bricollano",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bricollano Milano - Servizi di riparazione e manutenzione casa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bricollano Milano | Riparazioni e Manutenzione Casa Milano",
    description: "Servizi professionali di riparazioni e manutenzione casa a Milano. Elettricista, idraulico, muratore qualificati.",
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://bricollano.it" />
        <meta name="geo.region" content="IT-25" />
        <meta name="geo.placename" content="Milano" />
        <meta name="geo.position" content="45.4642;9.1900" />
        <meta name="ICBM" content="45.4642, 9.1900" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${outfit.variable} antialiased font-outfit`}
      >
        <HydrationHandler />
        <RefreshLoading />
        {children}
      </body>
    </html>
  );
}
