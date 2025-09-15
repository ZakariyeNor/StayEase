import type { Metadata } from "next";
import { Playfair_Display, Barlow, Open_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({ weight: ["400"], subsets: ["latin"] });
const barlow = Barlow({ weight: ["400"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StayEase | Stay Comfort",
  description: "Experience hassle-free stays with StayEase, your trusted partner for seamless accommodation management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}
