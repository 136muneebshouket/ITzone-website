
import { Inter } from "next/font/google";
import "./globals.css";
import "@/app/css/navbar.css";
import "@/app/css/loader.css";
import "@/app/css/tailwindcss.css";
import "@/app/css/LineIcons.css";
import "@/app/css/tiny-slider.css";
import "@/app/css/slick.css";
// import "@/app/css/edit_modal.css";
// import Navbarr from "@/components/navbar/Navbarr";
import Provider from "@/configs/Provider";
import Footer from "@/components/home_components/Footer";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ITZone.uk",
  description: "IT Zone is a Service base web development company that serve customers/clients to develop their websites as well as other IT Services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Provider>
          {/* <Navbarr /> */}
          <Navbar />
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
