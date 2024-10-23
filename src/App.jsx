import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import ThemeSwitcher from "./components/ThemeSwitcher";
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
      <Header />
      <div className="container flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <HeroSection />
          <About />
          <Resume />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
