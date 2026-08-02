import type { Metadata } from "next";
import { Rajdhani, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  title: "Dafi Naik Level",
  description: "Happy Birthday, Dafi.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body
        className={`${rajdhani.variable} ${jakarta.variable} ${jbmono.variable} font-body bg-void text-bone`}
      >
        {children}
      </body>
    </html>
  );
}
