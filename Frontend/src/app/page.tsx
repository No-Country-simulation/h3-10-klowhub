'use client'
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function Home() {
  return (
    <>
      <Header />
      <div className='w-screen h-screen flex justify-center items-center '>
        <PayPalScriptProvider options={{
          clientId: "ATnTXFUhKYkfzCmfo1dDcUDW5n0mEAZKoZ630VnTBuV7HfImHmrgdq25Ef3BJiH2qmOARzLs_CHAy3ic",
        }}>
          <PayPalButtons
            className="w-1/4"
            style={{
              color: "gold",
              layout: "horizontal",
            }}
            createOrder={async () => {
              const res = await fetch("/api/checkout", {
                method: "POST"
              });
              const order = await res.json();
              return order.id;
            }}
          />
        </PayPalScriptProvider>
      </div>
      <Footer />
    </>
  );
}
