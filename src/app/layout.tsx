import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Mullen — shipped work",
  description:
    "Frontend / product builder in Medford, Oregon. Live desks, scout tools, and utilities.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
