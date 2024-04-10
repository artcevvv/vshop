import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from '@/components/navbar/Navbar'
import Footer from "@/components/footer/Footer";
import {AuthenticationProvider} from '@/context/AuthentificationContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthenticationProvider>
    <div className="max-w-[1200px] mx-auto p-2 flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-1 h-full py-5 flex">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
    </AuthenticationProvider>
  );
}
