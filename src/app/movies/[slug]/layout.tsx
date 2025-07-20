import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Explorer",
  description: "Movie details and information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
