import HeroSection from "./components/HeroSection";
import "./App.css";
import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection />
      <SectionTitle />
    </div>
  );
}

export default App;
