import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Hero from "./sections/Hero";
import MobileHero from "./sections/MobileHero";
import About from "./sections/About";
import Project from "./sections/Project";
import Skill from "./sections/Skill";

function App() {
  const [currentView, setCurrentView] = useState("hero");

  const slideVariants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: { type: "tween", duration: 0.5, ease: "circOut" },
    },
    exit: {
      y: "100%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <SpeedInsights />
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

      <AnimatePresence>
        {currentView === "about" && (
          <motion.div
            key='about'
            className='fixed inset-0 z-50'
            initial='initial'
            animate='animate'
            exit='exit'
            variants={slideVariants}
          >
            <About onClose={() => setCurrentView("hero")} />
          </motion.div>
        )}

        {currentView === "project" && (
          <motion.div
            key='project'
            className='fixed inset-0 z-50'
            initial='initial'
            animate='animate'
            exit='exit'
            variants={slideVariants}
          >
            <Project onClose={() => setCurrentView("hero")} />
          </motion.div>
        )}

        {currentView === "skill" && (
          <motion.div
            key='skill'
            className='fixed inset-0 z-50'
            initial='initial'
            animate='animate'
            exit='exit'
            variants={slideVariants}
          >
            <Skill onClose={() => setCurrentView("hero")} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
