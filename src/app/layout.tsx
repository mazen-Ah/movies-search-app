import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "Movie Explorer",
  description:
    "Discover, search, and explore your favorite movies with Movie Explorer. Powered by OMDb API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` container`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
