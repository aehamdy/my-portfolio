import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import ThemeSwitcher from "./components/ThemeSwitcher";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     document.title = "Ahmed's Portfolio | Creative Frontend Developer";
//   }, []);

//   return (
//     <>
//       <div className="container lg:absolute lg:top:0 flex flex-col md:flex-row gap-4 mx-auto">
//         <Header />
//         <div className="flex flex-col lg:flex-row lg:jusitfy-between gap-4 -mt-[16px] md:mt-0">
//           <div className="herosection-holder lg:absolute lg:w-[37%] lg:start-[80px]">
//             <HeroSection />
//           </div>
//           <div className="all-sections-holder lg:flex lg:flex-col lg:gap-5 lg:absolute lg:w-[55%] lg:h-[98dvh] lg:end-0 overflow-hidden">
//             <About />
//             <Resume />
//             <Projects />
//             <Contact />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

function App() {
  useEffect(() => {
    document.title = "Ahmed's Portfolio | Creative Frontend Developer";
  }, []);

  return (
    <>
      <div className="container flex flex-col md:flex-row gap-4 mx-auto">
        <Header />
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 lg:h-[100dvh] -mt-[16px] md:mt-0 lg:pt-10">
          <div className="herosection-holder col-span-2 lg:ps-[40px]">
            <HeroSection />
          </div>
          <div className="all-sections-holder col-span-3 ">
            <About />
            <Resume />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
