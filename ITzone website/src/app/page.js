import Image from "next/image";
import Header from "@/components/home_components/Header";
import About from "@/components/home_components/About";
import Contact from "@/components/home_components/Contact";
import Footer from "@/components/home_components/Footer";
import What_we_do from "@/components/home_components/What_we_do";
import Expertise from "@/components/home_components/Expertise";
import Difference from "@/components/home_components/Difference";
// import Navbarr from "../../components/navbar/Navbarr";
// import Query_builder from "../../components/adding_query/Query_builder";
export default function Home() {
  return (
    <>
    <Header/>
    <About/>
    <What_we_do/>
    <Expertise/>
    <Difference/>
    {/* <Contact/> */}
    <Footer/>
    
    </>
  );
}
