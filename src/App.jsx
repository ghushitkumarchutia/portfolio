import { useState } from "react";
import Hero from "./sections/Hero";
import MobileHero from "./sections/MobileHero";
import About from "./sections/About";
import Project from "./sections/Project";
import Skill from "./sections/Skill";

function App() {
  const [currentView, setCurrentView] = useState("hero");

  return (
    <>
      {currentView === "about" ? (
        <About onClose={() => setCurrentView("hero")} />
      ) : currentView === "project" ? (
        <Project onClose={() => setCurrentView("hero")} />
      ) : currentView === "skill" ? (
        <Skill onClose={() => setCurrentView("hero")} />
      ) : (
        <>
          <div className='hidden md:block'>
            <Hero
              onShowAbout={() => setCurrentView("about")}
              onShowProject={() => setCurrentView("project")}
              onShowSkill={() => setCurrentView("skill")}
            />
          </div>
          <div className='block md:hidden'>
            <MobileHero
              onShowAbout={() => setCurrentView("about")}
              onShowProject={() => setCurrentView("project")}
              onShowSkill={() => setCurrentView("skill")}
            />
          </div>
        </>
      )}
    </>
  );
}

export default App;
