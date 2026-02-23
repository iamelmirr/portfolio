import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ["400"] });

export const metadata: Metadata = {
  title: "Elmir Beširović — Full-Stack Developer & Co-Owner",
  description: "Portfolio of Elmir Beširović — Co-owner & Head of Development at Adastra Digital. Building modern web apps, e-commerce platforms, and AI-powered solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{
      scrollbarWidth: 'none'
    }}>
      <head>

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      </head>
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
