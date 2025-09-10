import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav/Nav";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fylo",
  description: "Frontend Mentor: Fylo landing page challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${openSans.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
