import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clean Ecommerce - Next.js",
  description: "A Next.js clean ecommerce app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
