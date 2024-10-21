import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyServices from "./components/MyServices";
import Pricing from "./components/Pricing";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-4">
        <div>
          <Header />
          <HeroSection />
        </div>
        <div className="p-main-section-padding bg-section-light dark:bg-section-dark rounded-default-section">
          <AboutMe />
          <MyServices />
          <Pricing />
          <Testimonials />
        </div>
      </div>
      <div className="p-1 sticky bottom-2 bg-accent w-fit rounded-full text-black">
        <ThemeSwitcher />
      </div>
    </>
  );
}

export default App;
