import { useState } from "react";
import Hero from "./Hero";
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
        <Hero
          onShowAbout={() => setCurrentView("about")}
          onShowProject={() => setCurrentView("project")}
          onShowSkill={() => setCurrentView("skill")}
        />
      )}
    </>
  );
}

export default App;
