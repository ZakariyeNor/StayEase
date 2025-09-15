import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";

const bebasNeue = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
