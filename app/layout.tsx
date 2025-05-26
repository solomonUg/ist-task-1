import type { Metadata } from "next";
import "./globals.css";
import {Alata} from 'next/font/google';
import Navigation from "./_components/Navigation";



const alata = Alata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alata",
});



export const metadata: Metadata = {
  title: "loop studios",
  description: "immersive experiences that deliver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen justify-between ${alata.className}`}>
          <header className="w-full flex justify-center items-center">
            <Navigation/>
          </header>
          <main>{children}</main>
          <footer>
            <p>&copy; {new Date().getFullYear()} My App</p>
          </footer>
      </body>
    </html>
  );
}
