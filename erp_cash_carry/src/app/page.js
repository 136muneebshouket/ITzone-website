import Image from "next/image";
import Header from "@/components/home_components/Header";
import About from "@/components/home_components/About";
import Choose_us from "@/components/home_components/Choose_us";
import Services from "@/components/home_components/Services";
import Services_2 from "@/components/home_components/Services_2";
import Team from "@/components/home_components/Team";
import Contact from "@/components/home_components/Contact";
import Footer from "@/components/home_components/Footer";
// import Navbarr from "../../components/navbar/Navbarr";
// import Query_builder from "../../components/adding_query/Query_builder";
export default function Home() {
  return (
    <>
    <Header/>
    <About/>
    <Choose_us/>
    {/* <Services/> */}
    <Services_2/>
    <Team/>
    <Contact/>
    <Footer/>
    
    </>
  );
}
