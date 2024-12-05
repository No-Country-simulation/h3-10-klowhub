import type { Metadata } from "next";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
export const metadata: Metadata = {
  title: "Klowhub",
  description: "Plataforma Educativa No Code && Low Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthContextProvider>
      <html lang="en">
        <body className="bg-gradient-to-r from-[#34395c] via-[#181941] to-[#1b1b1f] h-screen ">
          {children}
        </body>
      </html>
    </AuthContextProvider>
  );
}
