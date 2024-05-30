import { useState } from "react";
// import Contact from "./components/Contact";
// import Experience from "./components/Experience";
// import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar toggle={toggle} />
            <HeroSection />
            <Skills />
            {/* <Experience />
            <Projects />
            <Contact />
            <Footer /> */}
        </div>
    );
}

export default App;
