import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/Header";
import Provider from "./providers/Provider";
import React from "react";
import { Analytics } from "@vercel/analytics/react"
import {LoadingProvider} from '@/app/contexts/LoadingContext';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pinterest",
  description: "Pinterest Clone",
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
        <Provider>
          <Header/>
          <LoadingProvider>
            {children}
          </LoadingProvider>
          <Analytics />
        </Provider>
      </body>
    </html>
  );
}
