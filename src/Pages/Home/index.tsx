import ContactSection from "../../components/sections/Contact/Contact";
import Diskets from "../../components/sections/Diskets/Diskets";
import ProjectsSection from "../../components/sections/Projects/Projects";
import HomeHero from "./components/HomeHero";

export default function HomePage(){
  return(
    <>
       <HomeHero />
       <Diskets/>
       <ProjectsSection/>
       <ContactSection />
    </>
  );
}