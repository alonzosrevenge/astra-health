import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astra Health — Reasoning for care.",
  description: "A stealth design+AI studio exploring transparent clinical reasoning. Private evaluations.",
  openGraph: {
    title: "Astra Health — Reasoning for care.",
    description: "A stealth design+AI studio exploring transparent clinical reasoning. Private evaluations.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astra Health — Reasoning for care.",
    description: "A stealth design+AI studio exploring transparent clinical reasoning. Private evaluations.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
