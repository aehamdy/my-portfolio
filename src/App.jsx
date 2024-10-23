import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Ahmed's Portfolio | Creative Frontend Developer";
  }, []);

  return (
    <>
      <div className="container flex flex-col md:flex-row gap-4 mx-auto">
        <Header />
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 lg:h-[90dvh] -mt-[16px] md:mt-0 rounded-b-main-section lg:rounded-main-section overflow-hidden">
          <div className="herosection-holder col-span-2 lg:ps-[40px]">
            <HeroSection />
          </div>
          <div className="vertical-scrollbar col-span-3 lg:h-[100dvh] overflow-y-visible rounded-main-section overflow-x-hidden">
            <div className="flex flex-col gap-6">
              <About />
              <Resume />
              <Projects />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
