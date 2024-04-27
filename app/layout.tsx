"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/auth/auth.provider";
import { useContext } from "react";
import { AuthContext } from "./context/auth/auth.context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { logout } = useContext(AuthContext);

  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
