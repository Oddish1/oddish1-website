import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nunito, Raleway, Cherry_Bomb_One } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const cherry = Cherry_Bomb_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cherry-bomb',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Oddish1",
  description: "A personal blog and portfolio site by Austin (aka Oddish1), showcasing web development and other coding projects, technical explorations, and creative software design with a focus on full-stack funtionality and clean UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${raleway.variable} ${cherry.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
