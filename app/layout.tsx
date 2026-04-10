import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TryHomeJobFinder - Resume Analysis & Job Prep",
  description: "AI-powered resume analysis and job application tips to help you land your dream job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://www.obfst.com/scripts/main.js"
          strategy="afterInteractive"
        />
        <Script id="ef-click" strategy="afterInteractive">
          {`
            EF.click({
              offer_id: 1807,
              affiliate_id: 2357,
              sub1: '%%phone%%'
            });
          `}
        </Script>
      </body>
    </html>
  );
}
