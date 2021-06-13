import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <HeroSection />
    </div>
  );
}

export default App;
