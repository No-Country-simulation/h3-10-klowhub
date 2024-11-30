import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "KlowHub",
  description: "Plataforma educativa No Code y Low Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-[#34395c] via-[#181941] to-[#1b1b1f] h-screen ">
        {children}
      </body>
    </html>
  );
}
