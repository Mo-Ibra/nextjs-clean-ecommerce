import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/hooks/use-cart";

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
      <body className={`antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}