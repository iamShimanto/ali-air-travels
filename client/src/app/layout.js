import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./(user)/components/common/Nav";
import BackToTop from "./(user)/components/common/BackToTop";
import Footer from "./(user)/components/common/Footer";
import FloatingWhatsapp from "./(user)/components/common/FloatingWhatsapp";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${roboto.variable}  antialiased`}
      >
        <Nav />
        <FloatingWhatsapp />
        <BackToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
