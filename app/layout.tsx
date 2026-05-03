import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machine Learning Portfolio Optimizer",
  description: "A scalable machine learning model that optimizes a portfolio of stocks based on historical price data and market trends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
