import { Header } from "@/src/Components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import toast, { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scrum Poker",
  description: "Scrum Poker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className={`${inter.className} flex min-h-full flex-col items-center`}
      >
        <Toaster position="top-right"  />
        <Header />
        <main className="max-w-screen-lg content-center">{children}</main>
      </body>
    </html>
  );
}
