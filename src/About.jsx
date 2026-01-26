import { useState, useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import noiseTexture from "./assets/noise.jpg";

const About = ({ onClose }) => {
  const { isDark } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  // Entry animation - spin X icon on mount
  useEffect(() => {
    setIsSpinning(true);
    const timer = setTimeout(() => setIsSpinning(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const bg = isDark ? "bg-[#090909]" : "bg-[#e5e5e5]";
  const cardDark = "bg-[#141414] text-white";
  const cardLight = "bg-[#f5f5f5] text-[#1a1a1a]";
  const card = isDark ? cardDark : cardLight;
  const textMuted = isDark ? "text-[#666]" : "text-[#666]";
  const textLabel = isDark ? "text-[#555]" : "text-[#888]";

  const experience = [
    {
      role: "Full-Stack Developer",
      company: "Freelance",
      year: "2024 - Present",
    },
    // { role: "Frontend Developer", company: "TechCorp", year: "2022 - 2023" },
    { role: "UI/UX Designer", company: "Freelance", year: "2023 - Present" },
    // { role: "Junior Developer", company: "StartupXYZ", year: "2020 - 2021" },
  ];

  const portfolioImages = [
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length,
    );
  };

  // Handle close with spin animation
  const handleClose = () => {
    setIsSpinning(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <section
      className={`relative z-10 h-screen overflow-y-auto lg:overflow-hidden md:pt-4 md:px-4 pb-0 ${bg}`}
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
        className={`min-h-full lg:h-full md:rounded-t-[44px] pt-[10px] px-[10px] md:pt-[14.5px] md:px-[14.5px] pb-0 border-2 border-b-0 border-[#242424] overflow-visible lg:overflow-hidden`}
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

        {/* Main Grid: Responsive - stacked on mobile, 2 cols on desktop */}
        <div className='max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-2 md:gap-4 gap-[10.5px] pt-32 lg:pt-36 pb-0 lg:h-full'>
          {/* ===== LEFT COLUMN - What I'm About Only ===== */}
          <div
            className={`border border-[#242424] rounded-[26px] md:rounded-t-[30px] lg:rounded-b-none p-6 lg:p-8 flex flex-col ${card}`}
          >
            <h2 className='text-[26px] lg:text-[32px] font-dmsans mb-4'>
              What I'm about?
            </h2>

            {/* need to add line */}
            <div className='w-full h-px bg-[#242424] mb-5 md:mb-6'></div>
            {/* My Story Section */}
            <div className='mb-4'>
              <span
                className={`text-[14px] lg:text-[16px] font-dmsans-light tracking-[0.2em] uppercase ${textLabel}`}
              >
                MY STORY
              </span>
              <p
                className={`text-[16px] lg:text-[19px] font-bricolage-light tracking-wider mt-2`}
              >
                I'm Ghushit Kumar Chutia, from Assam, India. My journey into
                technology began with a curiosity for turning ideas into
                meaningful digital experiences, which grew into a passion for
                building for the web. I care not only about how products look,
                but also how they function, scale, and evolve with users.
              </p>
            </div>

            {/* What I Do Now Section */}
            <div className='mb-5 md:mb-6'>
              <span
                className={`text-[14px] lg:text-[16px] font-dmsans-light tracking-[0.2em] uppercase ${textLabel}`}
              >
                WHAT I DO NOW
              </span>
              <p
                className={`text-[16px] lg:text-[19px] font-bricolage-light tracking-wider mt-2`}
              >
                I build scalable full-stack web applications that blend
                intelligent AI-driven functionality with clean architecture and
                thoughtful UI and UX design. My focus is on transforming complex
                ideas into intuitive, accessible, and performance-driven digital
                experiences, while continuously strengthening my problem-solving
                skills.
              </p>
            </div>
          </div>

          {/* ===== RIGHT COLUMN - For Desktop: 2 Rows / For Mobile: Stacked ===== */}
          <div className='flex flex-col lg:grid lg:grid-rows-[1.2fr_1fr] md:gap-4 gap-[10.5px] lg:h-full lg:overflow-hidden'>
            {/* ROW 1: Image Slideshow + CV/Position Cards */}
            <div className='grid grid-cols-2 gap-[10.5px] md:gap-4 min-h-[250px] lg:min-h-0'>
              {/* Image Slider */}
              <div
                className={`border border-[#242424] rounded-[24px] md:rounded-[30px] overflow-hidden relative ${card}`}
              >
                <img
                  src={portfolioImages[currentImageIndex]}
                  alt='Portfolio'
                  className='w-full h-full object-cover'
                />

                {/* Navigation Arrows - transparent with shrink on click */}
                <button
                  onClick={prevImage}
                  className='absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center cursor-pointer active:scale-95 transition-transform duration-150'
                >
                  <IoChevronBack className='w-4 h-4 lg:w-5 lg:h-5 text-white/90' />
                </button>
                <button
                  onClick={nextImage}
                  className='absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center cursor-pointer active:scale-95 transition-transform duration-150'
                >
                  <IoChevronForward className='w-4 h-4 lg:w-5 lg:h-5 text-white/90' />
                </button>

                {/* Image Dots with glass effect container */}
                <div
                  className='absolute bottom-4 lg:bottom-5 left-1/2 -translate-x-1/2 px-[11px] py-[7px] rounded-full flex gap-2 lg:gap-2.5'
                  style={{
                    background: "rgba(0, 0, 0, 0.15)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  {portfolioImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all duration-300 ${
                        currentImageIndex === index
                          ? "bg-white scale-110"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right side split into 2 rows - CV & Position */}
              <div className='grid grid-rows-2 gap-[10.5px] md:gap-4 h-full'>
                {/* CV View Card */}
                <a
                  href='https://drive.google.com/your-cv-link'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`border border-[#242424] rounded-[24px] md:rounded-[30px] p-4 lg:p-6 flex flex-col items-center justify-center gap-2 lg:gap-4 cursor-pointer ${card} hover:bg-white/5`}
                >
                  <span
                    className={`text-[12px] lg:text-[18px] font-dmsans-light tracking-[0.15em] md:tracking-[0.2em] uppercase mb-2 md:mb-4`}
                  >
                    VIEW MY CV
                  </span>
                  <div
                    className={`w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center border ${isDark ? "border-[#333] group-hover:border-[#555]" : "border-[#ddd]"} transition-all`}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='w-4 h-4 lg:w-5 lg:h-5'
                    >
                      <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                      <circle cx='12' cy='12' r='3' />
                    </svg>
                  </div>
                </a>

                {/* Current Position Card */}
                <div
                  className={`border border-[#242424] rounded-[24px] md:rounded-[30px] p-4 md:p-6 flex flex-col ${card}`}
                >
                  <span
                    className={`text-[11px] lg:text-[14px] font-dmsans-light tracking-[0.2em] uppercase ${textLabel}`}
                  >
                    CURRENTLY
                  </span>
                  <div className='flex-1 flex flex-col justify-center'>
                    <h3 className='text-[14px] lg:text-[18px] font-bricolage-light mt-2'>
                      3rd year, Btech CSE
                    </h3>
                    <p
                      className={`text-[11.5px] lg:text-[14.5px] font-bricolage-light mt-1 ${textMuted}`}
                    >
                      Lovely Professional University
                    </p>
                    <p
                      className={`text-[11.5px] lg:text-[14.5px] font-bricolage-light mt-1 ${textLabel}`}
                    >
                      2023 — Present
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: Experience Card (Full Width) */}
            <div
              className={`border border-[#242424] rounded-t-[24px] md:rounded-t-[30px] px-5 lg:px-8 py-5 lg:py-7 ${card}`}
            >
              <span
                className={`text-[14px] lg:text-[16px] font-dmsans-light tracking-[0.2em] uppercase ${textLabel}`}
              >
                EXPERIENCE
              </span>

              <div className='mt-[14px] md:mt-5 space-y-3 lg:space-y-4'>
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between'
                  >
                    <span className='text-[14px] lg:text-[18px] font-bricolage-light whitespace-nowrap'>
                      {exp.role} at {exp.company}
                    </span>
                    <div className='flex-1 mx-2 lg:mx-4 border-b-[1.4px] border-[#333]' />
                    <span
                      className={`text-[14px] lg:text-[18px] font-bricolage-light whitespace-nowrap ${textMuted}`}
                    >
                      {exp.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
