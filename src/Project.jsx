import { useState, useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import { IoClose } from "react-icons/io5";
import noiseTexture from "./assets/noise.jpg";

// Arrow Icon SVG - defined outside to avoid recreation on every render
const ArrowIcon = ({ className = "" }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 256 256'
    className={className}
    fill='currentColor'
  >
    <path d='M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z' />
  </svg>
);
const Project = ({ onClose }) => {
  const { isDark } = useTheme();
  const [isSpinning, setIsSpinning] = useState(false);

  // Entry animation - spin X icon on mount
  useEffect(() => {
    setIsSpinning(true);
    const timer = setTimeout(() => setIsSpinning(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const bg = isDark ? "bg-[#090909]" : "bg-[#e5e5e5]";
  const textLabel = isDark ? "text-[#555]" : "text-[#888]";
  const borderColor = isDark ? "border-[#242424]" : "border-[#ccc]";
  const separatorColor = isDark ? "bg-[#242424]" : "bg-[#ccc]";

  const cardBg = isDark ? "bg-[#141414]" : "bg-[#f5f5f5]";
  const cardBorder = isDark ? "border-[#242424]" : "border-[#ddd]";
  const cardTextTitle = isDark ? "text-white" : "text-[#1a1a1a]";
  const cardTextSubtitle = isDark ? "text-[#777]" : "text-[#666]";
  const pillBg = isDark ? "bg-[#1a1a1a]" : "bg-[#e5e5e5]";
  const pillText = isDark ? "text-[#777]" : "text-[#555]";

  // Dev Projects Data
  const devProjects = [
    {
      title: "DimLight – Sleep Tracker",
      subtitle: "Full-Stack App",
      description:
        "A comprehensive sleep tracking app with analytics dashboard and personalized insights.",
      tech: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      link: "#",
    },
    {
      title: "PriceIQ – Price Optimizer",
      subtitle: "AI/ML Platform",
      description:
        "AI-powered dynamic pricing platform for e-commerce businesses.",
      tech: ["Python", "TensorFlow", "FastAPI"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      link: "#",
    },
    {
      title: "Portfolio Website",
      subtitle: "React + Tailwind",
      description: "Personal portfolio showcasing projects and skills.",
      tech: ["React", "Tailwind", "Vite"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      link: "#",
    },
    {
      title: "Inventory System",
      subtitle: "MERN Stack",
      description:
        "Full-featured inventory management system for small businesses.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      link: "#",
    },
  ];

  // UI/UX Projects Data
  const uiuxProjects = [
    {
      title: "Mobile Banking App",
      subtitle: "UI/UX Design",
      description: "Modern banking app design with intuitive user experience.",
      tech: ["Figma", "Prototyping"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      link: "#",
    },
    {
      title: "E-commerce Redesign",
      subtitle: "Web Design",
      description: "Complete UI overhaul for an e-commerce platform.",
      tech: ["Figma", "UI Design"],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      link: "#",
    },
    {
      title: "Dashboard Concept",
      subtitle: "SaaS Design",
      description: "Analytics dashboard design for SaaS applications.",
      tech: ["Figma", "Design System"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      link: "#",
    },
    {
      title: "Travel App Concept",
      subtitle: "Mobile Design",
      description: "Travel booking app with immersive visual design.",
      tech: ["Figma", "Mobile UI"],
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      link: "#",
    },
  ];

  // Handle close with spin animation
  const handleClose = () => {
    setIsSpinning(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  // Project Card Component - matching reference design
  const ProjectCard = ({ project }) => (
    <a
      href={project.link}
      target='_blank'
      rel='noopener noreferrer'
      className='group block'
    >
      {/* Outer Card Container with padding */}
      <div
        className={`${cardBg} rounded-[24px] md:rounded-[30px] border ${cardBorder} p-[12px] md:p-[17px] transition-colors duration-300`}
      >
        {/* Image Container */}
        <div className='rounded-[15px] md:rounded-[17px] overflow-hidden aspect-16/10 relative'>
          <img
            src={project.image}
            alt={project.title}
            className='w-full h-full object-cover md:scale-105 md:group-hover:scale-100 transition-transform duration-600 ease-in-out'
          />
          {/* Gradient overlay - visible on mobile, hover on desktop */}
          <div
            className='absolute inset-0 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-600 ease-in-out'
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 70%)",
            }}
          />
          {/* Description text - visible on mobile, slides up on desktop hover */}
          <div className='absolute bottom-0 left-0 right-0 z-20 px-3 md:px-5 py-3 md:py-4 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-600 ease-in-out'>
            <p className='text-[14px] md:text-[20px] font-bricolage-light text-white/90 leading-snug'>
              {project.description}
            </p>
          </div>
        </div>

        {/* Project Info - larger height and text */}
        <div className='pt-3 md:pt-5 px-1 md:pb-[5px]'>
          <div>
            <h3
              className={`text-[18px] md:text-[22px] font-dmsans-light ${cardTextTitle} leading-tight truncate transition-colors duration-300`}
            >
              {project.title}
            </h3>
            <p
              className={`text-[14px] md:text-[16px] font-bricolage-light mt-1.5 ${cardTextSubtitle} transition-colors duration-300`}
            >
              {project.subtitle}
            </p>
          </div>
          {/* Tech Stack + Arrow Row */}
          <div className='flex items-end justify-between gap-2 mt-1'>
            {/* Tech Stack */}
            <div className='flex flex-wrap gap-1.5 md:gap-2 flex-1'>
              {project.tech.map((item, idx) => (
                <span
                  key={idx}
                  className={`text-[10px] md:text-[12px] font-bricolage-light px-[10px] py-[3px] rounded-[8px] ${pillBg} ${pillText} transition-colors duration-300`}
                >
                  {item}
                </span>
              ))}
            </div>
            {/* Arrow button - white on mobile, hover animation on desktop */}
            <div
              className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border-[1.4px] ${cardBorder} overflow-hidden relative shrink-0 -mt-3 transition-colors duration-300`}
            >
              {/* Mobile: single white arrow, Desktop: pass-through animation */}
              {/* Arrow that exits (moves to top-right on hover) - hidden on mobile */}
              <span
                className={`hidden md:block w-5 h-5 absolute text-[#666] group-hover:${isDark ? "text-white" : "text-black"} transition-all duration-500 ease-out group-hover:translate-x-10 group-hover:-translate-y-10`}
              >
                <ArrowIcon className='w-full h-full' />
              </span>
              {/* Arrow that enters on desktop (comes from bottom-left on hover) - hidden on mobile */}
              <span
                className={`hidden md:block w-5 h-5 absolute text-[#666] group-hover:${isDark ? "text-white" : "text-black"} transition-all duration-500 ease-out -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0`}
              >
                <ArrowIcon className='w-full h-full' />
              </span>
              {/* Mobile only: static arrow */}
              <span
                className={`md:hidden w-5 h-5 ${isDark ? "text-white" : "text-black"}`}
              >
                <ArrowIcon className='w-full h-full' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <section
      className={`relative z-10 h-screen overflow-y-auto md:pt-4 md:px-4 pb-0 ${bg}`}
    >
      {/* Noise Texture Overlay */}
      <div
        className='fixed inset-0 z-20 pointer-events-none'
        style={{
          backgroundImage: `url(${noiseTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isDark ? 0.05 : 0.04,
        }}
        aria-hidden='true'
      />

      <div
        className={`min-h-full md:rounded-t-[44px] pt-[10px] px-[10px] md:pt-[14.5px] md:px-[14.5px] pb-8 border-2 border-b-0 ${borderColor} overflow-visible ${bg}`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className={`group absolute top-[60px] md:top-[70px] left-1/2 -translate-x-1/2 z-30 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer border-2 overflow-hidden ${isDark ? "border-[#333] hover:bg-neutral-600/15" : "border-[#ddd] hover:bg-black/5"} transition-colors`}
        >
          <IoClose
            className={`w-[23px] h-[23px] text-[#8f8f8f] group-hover:text-white transition-all duration-500 ease-out ${isSpinning ? "animate-spin-once" : ""}`}
          />
        </button>

        {/* Main Content */}
        <div className='max-w-[1160px] mx-auto pt-28 md:pt-32 pb-8'>
          {/* ===== SECTION 1: DEV PROJECTS ===== */}
          <div className='mb-12 md:mb-16'>
            {/* Section Header */}
            <div className='mb-6 md:mb-8 text-center'>
              <span
                className={`text-[13px] md:text-[22px] font-dmsans-light tracking-[0.2em] uppercase ${textLabel}`}
              >
                DEVELOPMENT PROJECTS
              </span>
              <div
                className={`w-full h-[1.5px] ${separatorColor} mt-[10px]`}
              ></div>
            </div>

            {/* Grid - 1 column mobile, 2 columns desktop */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6'>
              {devProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* ===== SECTION 2: UI/UX PROJECTS ===== */}
          <div>
            {/* Section Header */}
            <div className='mb-6 md:mb-8 text-center'>
              <span
                className={`text-[13px] md:text-[22px] font-dmsans-light tracking-[0.2em] uppercase ${textLabel}`}
              >
                UI/UX DESIGN PROJECTS
              </span>
              <div
                className={`w-full h-[1.5px] ${separatorColor} mt-[10px]`}
              ></div>
            </div>

            {/* Grid - 1 column mobile, 2 columns desktop */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6'>
              {uiuxProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
