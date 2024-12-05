'use client'
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Button_Buys } from "@/components/PayPal/Button_Buys";

export default function Home() {
  return (
    <>
      <Header />
        <Button_Buys />
      <Footer />
    </>
  );
}
