import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juan Villacorta | Portfolio",
  description:
    "Computer Science (Information Systems) student at CSUB — full-stack development, systems, and internships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen text-neutral-200 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
