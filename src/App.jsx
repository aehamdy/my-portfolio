import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyServices from "./components/MyServices";

function App() {
  return (
    <div className="container mx-auto flex flex-col gap-4">
      <div>
        <Header />
        <HeroSection />
      </div>
      <div className="p-main-section-padding bg-section-light dark:bg-section-dark rounded-default-section">
        <AboutMe />
        <MyServices />
      </div>
    </div>
  );
}

export default App;
