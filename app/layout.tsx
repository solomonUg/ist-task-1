
import type { Metadata } from "next";
import "./globals.css";
import { Alata, Josefin_Sans, Bokor } from "next/font/google";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alata",
});

const bokor = Bokor({
  variable: "--font-bokor",
  subsets: ["latin"],
  weight: "400",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: {
    default: "loop studios",
    template: "%s | loop studios",
  },    
  description: "immersive experiences that deliver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen justify-between ${josefin.variable}  ${bokor.variable} ${alata.variable} antialiased`}
      >
        <header
          className='w-full flex justify-center items-center font-alata'
        >
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
