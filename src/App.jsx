import { useState } from "react";
import Hero from "./Hero";
import NewHero from "./NewHero";
import MobileHero from "./MobileHero";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";

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
            <NewHero
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
