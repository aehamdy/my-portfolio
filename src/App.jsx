import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import ThemeSwitcher from "./components/ThemeSwitcher";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-4">
        <div>
          <Header />
          <HeroSection />
        </div>
        <About />
        <Resume />
        <Projects />
      </div>
      <div className="p-1 sticky bottom-2 bg-accent w-fit rounded-full text-black">
        <ThemeSwitcher />
      </div>
    </>
  );
}

export default App;
