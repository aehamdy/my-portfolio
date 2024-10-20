import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection />
      <AboutMe />
    </div>
  );
}

export default App;
