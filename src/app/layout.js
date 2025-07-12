import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

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
  title: "Cappomano | Servizi per la Casa con Pagamenti Crypto",
  description: "Cappomano è la prima piattaforma italiana che unisce servizi domestici professionali con pagamenti in criptovalute e sistema di credito integrato.",
  keywords: ["servizi domestici", "pagamenti crypto", "Milano", "servizi casa", "bitcoin", "ethereum", "professionisti casa", "credito flessibile"],
  authors: [{ name: "Cappomano" }],
  creator: "Cappomano",
  publisher: "Cappomano",
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
    title: "Cappomano | Servizi per la Casa con Pagamenti Crypto",
    description: "La prima piattaforma italiana che unisce servizi domestici professionali con pagamenti in criptovalute e sistema di credito integrato.",
    url: "https://cappomano.it",
    siteName: "Cappomano",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cappomano | Servizi per la Casa con Pagamenti Crypto",
    description: "Servizi domestici professionali con pagamenti crypto e sistema di credito integrato.",
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="canonical" href="https://cappomano.it" />
        <meta name="geo.region" content="IT-25" />
        <meta name="geo.placename" content="Milano" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${outfit.variable} antialiased font-outfit`}
      >
        {children}
      </body>
    </html>
  );
}
