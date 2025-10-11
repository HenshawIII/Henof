import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Henof Foods is a company that produces indigenous foods and other related products. We are committed to providing the best quality products to our customers." />
        <title>Henof Foods</title>
        <link rel="icon" href="/lgoo.png" />

      </head>
      <body
        className={`${instrumentSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
