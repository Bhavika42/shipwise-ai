import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ShipWise AI",
  description: "AI-assisted engineering workflow for feature tickets, bug triage, and shipped work.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <div className="appShell">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
