import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import noiseTexture from "./assets/noise.jpg";

const Skill = ({ onClose }) => {
  const [isDark] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);

  // Entry animation - spin X icon on mount
  useEffect(() => {
    setIsSpinning(true);
    const timer = setTimeout(() => setIsSpinning(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const bg = isDark ? "bg-[#090909]" : "bg-[#e5e5e5]";
  const textLabel = isDark ? "text-[#555]" : "text-[#888]";

  // Handle close with spin animation
  const handleClose = () => {
    setIsSpinning(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  // Skills Data by Category
  const skillCategories = [
    {
      label: "LANGUAGES",
      skills: ["C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      label: "FRONTEND",
      skills: ["React", "Next.js", "Tailwind", "Framer Motion", "HTML/CSS"],
    },
    {
      label: "BACKEND",
      skills: ["Node.js", "Express", "GraphQL", "REST APIs"],
    },
    {
      label: "DATABASES",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma"],
    },
    {
      label: "DEVOPS & TOOLS",
      skills: ["Docker", "AWS", "CI/CD", "Git"],
    },
    {
      label: "DESIGN",
      skills: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    },
    {
      label: "CREATIVE",
      skills: [
        "Motion Graphics",
        "Visual Storytelling",
        "Brand Design",
        "Typography",
      ],
    },
  ];

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
        className={`min-h-full md:rounded-t-[44px] pt-[10px] px-[10px] md:pt-[14.5px] md:px-[14.5px] pb-8 border-2 border-b-0 border-[#242424] overflow-visible ${bg}`}
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
        <div className='max-w-[900px] mx-auto pt-30 md:pt-32 pb-8'>
          {/* Skills Categories */}
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className='mb-7 md:mb-10'>
              {/* Category Header */}
              <div className='mb-5 md:mb-6 text-center'>
                <span
                  className={`text-[14px] md:text-[18px] font-dmsans-light tracking-[0.2em] uppercase ${textLabel}`}
                >
                  {category.label}
                </span>
                <div className='w-[170px] mx-auto h-[1.5px] bg-[#242424] mt-[5px]'></div>
              </div>

              {/* Skills Grid - centered */}
              <div className='flex flex-wrap justify-center gap-2 md:gap-3'>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className='text-[13px] md:text-[16.5px] font-bricolage-light px-5 md:px-7 py-[12px] md:py-[14px] rounded-full bg-[#1a1a1a] text-[#c2c2c2] hover:text-white transition-colors duration-300'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
