import { AnimatedBackground } from "./components/AnimatedBackground";
import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { SideNav } from "./components/SideNav";
import "./App.css";

function App() {
  return (
    <>
      <AnimatedBackground />
      <SideNav />
      <Hero />
      <main>
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Pablo Deeleman</p>
      </footer>
    </>
  );
}

export default App;
