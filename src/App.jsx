import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="container mx-auto flex flex-col gap-4">
      <div>
        <Header />
        <HeroSection />
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
