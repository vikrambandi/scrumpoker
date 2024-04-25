"use client";

import { Header } from "@/_components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./StoreProvider";

import { ThemeProvider } from "@material-tailwind/react";
import { SocketProvider } from "./SocketContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Scrum Poker",
//   description: "Scrum Poker",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <StoreProvider>
        <SocketProvider>
          <html
            lang="en"
            // data-theme="emerald"
          >
            <body
              className={`${inter.className} flex min-h-full flex-col items-center`}
            >
              <Toaster position="top-right" />
              <Header />
              <main className="max-w-screen-lg content-center">{children}</main>
            </body>
          </html>
        </SocketProvider>
      </StoreProvider>
    </ThemeProvider>
  );
}
