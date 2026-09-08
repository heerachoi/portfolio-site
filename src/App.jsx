import { MotionConfig } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        본문으로 건너뛰기
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Skills />
        <Work />
        <Blog />
        <About />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
