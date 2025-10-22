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
    "Umrah Bangladesh",
    "Hajj Bangladesh",
    "Hajj Packages",
    "Umrah Packages",
    "Travel Bangladesh",
    "Islamic Tours",
    "Ali Air Travels",
    "Air Travels BD",
  ],
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const lang = (await cookieStore.get("lang")?.value) || "en";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shimanto Sarkar",
    url: "https://shimanto.cloud",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://www.linkedin.com/in/shimantosarkar",
      "https://github.com/shimanto-sarkar",
    ],
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
