import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // 確保字體加載時的平滑過渡
});

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "A showcase of my professional journey, skills, and achievements",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <header className="fixed top-0 w-full z-50 px-4 py-6">
          <Navigation />
        </header>
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
