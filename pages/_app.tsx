import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { AuthenticationProvider } from "@/context/AuthentificationContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <AuthenticationProvider>
        <div className="max-w-[1200px] mx-auto p-2 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1 h-full flex justify-center py-[50px]">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </AuthenticationProvider>
    </>
  );
}
