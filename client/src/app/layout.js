import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./(user)/components/common/Nav";
import BackToTop from "./(user)/components/common/BackToTop";
import Footer from "./(user)/components/common/Footer";
import FloatingWhatsapp from "./(user)/components/common/FloatingWhatsapp";
import AOSWrapper from "./(user)/components/common/AosWrapper";
import "aos/dist/aos.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { cookies } from "next/headers";
import Script from "next/script";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ali Air Travels | Hajj & Umrah Packages Bangladesh",
  description:
    "Ali Air Travels offers premium Hajj & Umrah packages from Bangladesh with full guidance, visa support, and halal services.",
  keywords: [
    "ali air travels & tours",
    "hajj package in bangladesh",
    "umrah package in bangladesh",
    "Umrah Bangladesh",
    "Hajj Bangladesh",
    "Hajj Packages",
    "Umrah Packages",
    "Travel Bangladesh",
    "Islamic Tours",
    "Ali Air Travels",
    "Air Travels BD",
  ],
  openGraph: {
    title: "Ali Air Travels | Hajj & Umrah Packages Bangladesh",
    description:
      "Ali Air Travels offers premium Hajj & Umrah packages from Bangladesh with full guidance, visa support, and halal services.",
    url: "https://aliairtravels.com",
    siteName: "aliairtravels.com",
    images: [
      {
        url: "https://aliairtravels.com/banner-logo.png",
        width: 1200,
        height: 630,
        alt: "Ali Air Travels",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Air Travels | Hajj & Umrah Packages Bangladesh",
    description:
      "Ali Air Travels offers premium Hajj & Umrah packages from Bangladesh with full guidance, visa support, and halal services.",
    images: ["https://aliairtravels.com/banner-logo.png"],
  },
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const lang = (await cookieStore.get("lang")?.value) || "en";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Agency",
    name: "Ali Air Travels",
    url: "https://aliairtravels.com",
    jobTitle: "Ali Air Travels",
    sameAs: ["https://www.facebook.com/share/14LcR2Nu5st/"],
  };

  return (
    <html lang={lang}>
      <head>
        <Script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${roboto.variable} antialiased`}
      >
        <AOSWrapper>
          <LanguageProvider initialLang={lang}>
            <Nav />
            <FloatingWhatsapp />
            <BackToTop />
            {children}
            <Footer />
          </LanguageProvider>
        </AOSWrapper>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R939ELYEVT"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R939ELYEVT');
            `,
          }}
        />
      </body>
    </html>
  );
}
