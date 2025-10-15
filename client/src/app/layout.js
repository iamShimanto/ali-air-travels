import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./(user)/components/common/Nav";
import BackToTop from "./(user)/components/common/BackToTop";
import Footer from "./(user)/components/common/Footer";

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
        className={`${plusJakarta.variable} ${roboto.variable} bg-no-repeat bg-cover bg-left md:bg-center antialiased`}
        style={{
          backgroundImage: "url('/body-bg.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <Nav />
        <BackToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
