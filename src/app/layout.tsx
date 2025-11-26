import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // 確保字體加載時的平滑過渡
});

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "A showcase of my professional journey, skills, and achievements",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
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
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
