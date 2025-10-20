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

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "ali air travels",
  description: "ali air travels",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
