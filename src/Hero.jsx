import { useState, useEffect } from "react";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoMoon, IoSunny } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { SiReact, SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si";
import noiseTexture from "./assets/noise.jpg";

// Custom Arrow Icon SVG
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

const Hero = ({ onShowAbout, onShowProject, onShowSkill }) => {
  const [isDark, setIsDark] = useState(true);
  const [currentGoalIndex, setCurrentGoalIndex] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const myEmail = "ghushitchutia@gmail.com";

  // Live clock - updates every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 4000);
  };

  // Goals data with images
  const goals = [
    {
      title: "Travelling",
      quote: "Travelling shapes perspective before creative building.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    },
    {
      title: "Innovation",
      quote: "Innovation turns imagination into meaningful experiences.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
    {
      title: "Craft",
      quote: "Craft elevates details into timeless quality.",
      image:
        "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
    },
    {
      title: "Storytelling",
      quote: "Storytelling gives emotion structure through design.",
      image:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&q=80",
    },
    {
      title: "Freedom",
      quote: "Freedom lets me design life intentionally.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    },
  ];

  // Auto-rotate slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGoalIndex((prev) => (prev + 1) % goals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [goals.length]);

  const bg = isDark ? "bg-[#090909]" : "bg-[#e5e5e5]";
  const cardDark = "bg-[#141414] text-white";
  const cardLight = "bg-[#f5f5f5] text-[#1a1a1a]";
  const card = isDark ? cardDark : cardLight;
  const textMuted = isDark ? "text-[#666]" : "text-[#666]";
  const textLabel = isDark ? "text-[#666]" : "text-[#666]";

  return (
    <section className={`relative z-10 h-screen overflow-hidden p-4 ${bg}`}>
      {/* Noise Texture Overlay */}
      <div
        className='absolute inset-0 z-20 pointer-events-none'
        style={{
          backgroundImage: `url(${noiseTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isDark ? 0.04 : 0.03,
        }}
        aria-hidden='true'
      />
      <div
        className={`h-full rounded-[47px] p-[13px] border-2 border-[#242424] overflow-hidden`}
      >
        <div className='grid grid-cols-[1fr_310px] h-full gap-[10px] overflow-hidden'>
          {/* ===== MAIN CONTENT ===== */}
          <div className='grid grid-rows-3 gap-[10px] h-full overflow-hidden'>
            {/* ROW 1 */}
            <div className='grid grid-cols-12 gap-[10px] min-h-0'>
              {/* Hero - 6 cols */}
              <div
                className={`col-span-6 rounded-[34px] px-12 flex flex-col justify-center border border-[#242424] ${card}`}
              >
                <h1 className='text-[32px] font-dmsans mb-3'>
                  Hi, I'm Ghushit ⎯
                </h1>
                <p
                  className={`text-[25px] font-bricolage-light ml-[-2px] ${textMuted}`}
                >
                  Full-Stack Developer & UI/UX Designer
                </p>
              </div>
              {/* Available for Work - 3 cols */}
              <div
                className={`col-span-3 rounded-[34px] p-7 flex flex-col border border-[#242424] ${card}`}
              >
                <div className='flex items-center gap-2'>
                  <span className='relative flex h-4 w-4'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                    <span className='relative inline-flex rounded-full h-4 w-4 bg-green-500'></span>
                  </span>
                  <span
                    className={`text-[16px] tracking-[0.2em] mt-[1.7px] font-dmsans-light ${textLabel}`}
                  >
                    AVAILABLE
                  </span>
                </div>
                <div className='flex-1 flex flex-col'>
                  <h3 className='text-[25px] mt-3 font-bricolage-light leading-snug'>
                    Open to new opportunities & collaborations
                  </h3>
                  <p
                    className={`text-[14.5px] font-dmsans-light mt-[11px] mr-3 ${textMuted}`}
                  >
                    Let's build something great!
                  </p>
                </div>
              </div>
              {/* Goals & Interests Slideshow - 3 cols */}
              <div
                className={`col-span-3 rounded-[34px] overflow-hidden relative ${card}`}
              >
                {/* Slideshow Images */}
                {goals.map((goal, index) => (
                  <img
                    key={index}
                    src={goal.image}
                    alt={goal.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      currentGoalIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Always visible gradient overlay */}
                <div
                  className='absolute inset-0 z-10'
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 15%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 50%)",
                  }}
                />

                {/* Always visible text at bottom */}
                <div className='absolute bottom-0 left-0 right-0 z-20 px-[27px] py-[27px]'>
                  <p className='text-[22px] font-dmsans-light text-white'>
                    {goals[currentGoalIndex].title}
                  </p>
                  <p className='text-[14px] text-white/75 font-bricolage-light mt-1 max-w-[200px]'>
                    {goals[currentGoalIndex].quote}
                  </p>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div className='grid grid-cols-[0.48fr_0.977fr_0.743fr] gap-[10px] min-h-0'>
              {/* Profile Photo */}
              <div className={`rounded-[34px] overflow-hidden ${card}`}>
                <img
                  src='src/assets/profile.png'
                  alt='Profile'
                  className='w-full h-full object-cover'
                />
              </div>
              {/* About */}
              <div
                className={`border border-[#242424] rounded-[34px] pt-[30px] pr-7 pb-6 pl-8 flex flex-col justify-between group transition-colors duration-150 ${isDark ? "hover:bg-white/5" : ""} ${card}`}
              >
                {/* Label at top */}
                <span
                  className={`md:text-[18px] tracking-[0.2em] font-dmsans-light uppercase ${textLabel}`}
                >
                  ABOUT
                </span>

                {/* Main text - vertically centered */}
                <p className='text-[24px] font-bricolage-light leading-snug'>
                  Passionate about crafting clean code and beautiful interfaces.
                </p>

                {/* Arrow button at bottom-right with pass-through animation */}
                <div className='flex justify-end'>
                  <button
                    onClick={onShowAbout}
                    className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer border-[1.8px] overflow-hidden relative ${isDark ? "border-[#333]" : "border-[#ddd]"} transition-colors`}
                  >
                    {/* Arrow that exits (moves to top-right on hover) */}
                    <span className='w-5 h-5 absolute transition-transform duration-500 ease-out group-hover:translate-x-8 group-hover:-translate-y-8'>
                      <ArrowIcon className='w-full h-full' />
                    </span>
                    {/* Arrow that enters (comes from bottom-left on hover) */}
                    <span className='w-5 h-5 absolute transition-transform duration-500 ease-out -translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0'>
                      <ArrowIcon className='w-full h-full' />
                    </span>
                  </button>
                </div>
              </div>
              {/* Projects Navigation */}
              <div
                onClick={onShowProject}
                className={`rounded-[34px] overflow-hidden relative group cursor-pointer ${card}`}
              >
                {/* Image - starts zoomed IN, zooms OUT to full size on hover */}
                <img
                  src='src/assets/projects.jpg'
                  alt='Projects'
                  className='w-full h-full object-cover scale-105 transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-100'
                />

                {/* Smooth gradient overlay - blends perfectly with rounded corners */}
                <div
                  className='absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]'
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 15%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 50%)",
                  }}
                />

                {/* Hover overlay with slide-up animation - renders ABOVE gradient */}
                <div className='absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]'>
                  {/* Left text - View all projects */}
                  <span className='text-[24px] font-dmsans-light text-white'>
                    View all projects
                  </span>

                  {/* Right arrow - rotates from UP to RIGHT */}
                  {/* for perfect glass bur: rounded-full bg-white/20 backdrop-blur-sm */}
                  <div className='w-9 h-9 flex items-center justify-center'>
                    <span className='w-5 h-5 text-white transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] -rotate-45 group-hover:rotate-45'>
                      <ArrowIcon className='w-full h-full' />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3 */}
            <div className='grid grid-cols-[1fr_0.58fr_0.39fr] gap-[10px] min-h-0'>
              {/* Contact - Get In Touch */}
              <div
                className={`border border-[#242424] rounded-[34px] p-7 flex flex-col justify-between ${card}`}
              >
                <div>
                  <span
                    className={`md:text-[17px] tracking-[0.2em] font-dmsans-light uppercase ${textLabel}`}
                  >
                    GET IN TOUCH
                  </span>
                  <h3 className='md:text-[23px] font-bricolage-light mt-3 leading-snug'>
                    Have an idea? Let's bring it to life together.
                  </h3>
                </div>

                {/* Email Copy Section */}
                <button
                  onClick={handleCopyEmail}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-[17px] border cursor-pointer transition-all duration-300 font-dmsans-light ${
                    emailCopied
                      ? isDark
                        ? "border-green-500 bg-green-500/10"
                        : "border-green-500 bg-green-50"
                      : isDark
                        ? "border-[#333] hover:border-[#444]"
                        : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <span
                    className={`text-[18px] font-dmsans-light ${emailCopied ? "text-green-500" : ""}`}
                  >
                    {emailCopied ? "Copied!" : myEmail}
                  </span>
                  {emailCopied ? (
                    <span className='text-green-500 text-sm'>✓</span>
                  ) : (
                    <IoCopyOutline className='w-[18px] h-[18px] opacity-100' />
                  )}
                </button>
              </div>
              {/* Tech Stack - Infinite Marquee - Click to open Skills */}
              <div
                onClick={onShowSkill}
                className={`border border-[#242424] rounded-[34px] p-7 flex flex-col overflow-hidden cursor-pointer group ${card}`}
              >
                <span
                  className={`md:text-[18px] text-center tracking-[0.2em] font-dmsans-light uppercase ${textLabel}`}
                >
                  MY SKILLS
                </span>

                {/* Container for hover animation */}
                <div className='flex-1 flex items-center justify-center relative overflow-hidden'>
                  {/* "Click to view" text - positioned above marquee */}
                  <span className='text-[18px] md:text-[20px] font-bricolage-light text-white/80 absolute -translate-y-20 opacity-0 group-hover:-translate-y-8 group-hover:opacity-100 transition-all duration-500 ease-out z-10'>
                    Click to view all
                  </span>

                  {/* Marquee - slides down on hover, NO opacity change */}
                  <div className='marquee marquee-mask group-hover:translate-y-10 transition-transform duration-500 ease-out'>
                    {/* First content container */}
                    <div className='marquee__content'>
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                      >
                        <SiReact className='w-8 h-8 text-[#61DAFB]' />
                      </div>
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                      >
                        <SiNextdotjs
                          className={`w-8 h-8 ${isDark ? "text-white" : "text-black"}`}
                        />
                      </div>
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                      >
                        <SiTailwindcss className='w-8 h-8 text-[#06B6D4]' />
                      </div>
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                      >
                        <SiFigma className='w-8 h-8 text-[#F24E1E]' />
                      </div>
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                      >
                        <FaGithub
                          className={`w-8 h-8 ${isDark ? "text-white" : "text-black"}`}
                        />
                      </div>
                    </div>
                    {/* Duplicate content container for seamless loop */}
                    <div className='marquee__content' aria-hidden='true'>
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                      >
                        <SiReact className='w-8 h-8 text-[#61DAFB]' />
                      </div>
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                      >
                        <SiNextdotjs
                          className={`w-8 h-8 ${isDark ? "text-white" : "text-black"}`}
                        />
                      </div>
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                      >
                        <SiTailwindcss className='w-8 h-8 text-[#06B6D4]' />
                      </div>
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                      >
                        <SiFigma className='w-8 h-8 text-[#F24E1E]' />
                      </div>
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                      >
                        <FaGithub
                          className={`w-8 h-8 ${isDark ? "text-white" : "text-black"}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Theme Toggle */}
              <div
                className={`border border-[#242424] rounded-[34px] flex items-center justify-center cursor-pointer ${card}`}
                onClick={() => setIsDark(!isDark)}
              >
                <div
                  className={`w-[104px] h-[52px] rounded-full px-1 relative flex items-center transition-colors duration-500 border-[1.7px] ${isDark ? "bg-[#252525] border-[#444]" : "bg-[#d0d0d0] border-[#b0b0b0]"}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#0a0a0a] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? "ml-0" : "ml-[52px]"}`}
                  >
                    {/* Moon icon */}
                    <IoMoon
                      className={`w-5 h-5 text-[#d4c896] absolute transition-all duration-300 ease-out ${isDark ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                    />
                    {/* Sun icon */}
                    <IoSunny
                      className={`w-5 h-5 text-[#d4c896] absolute transition-all duration-300 ease-out ${isDark ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className='grid grid-rows-[0.45fr_1fr_0.9fr] gap-[10px] h-full overflow-hidden'>
            {/* Social Icons */}
            <div className={`rounded-[34px]`}>
              <div className='grid grid-cols-3 gap-[14.5px]'>
                <a
                  href='#'
                  className={`aspect-square flex items-center justify-center border rounded-[33px] transition-all duration-200 ${isDark ? "bg-[#1a1a1a] border-[#333] hover:bg-[#2a2a2a] hover:border-[#444]" : "bg-white border-[#ddd] hover:bg-[#f0f0f0] hover:border-[#ccc]"}`}
                >
                  <FaLinkedinIn
                    className={`w-10 h-10 ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}
                  />
                </a>
                <a
                  href='#'
                  className={`aspect-square flex items-center justify-center border rounded-[33px] transition-all duration-200 ${isDark ? "bg-[#1a1a1a] border-[#333] hover:bg-[#2a2a2a] hover:border-[#444]" : "bg-white border-[#ddd] hover:bg-[#f0f0f0] hover:border-[#ccc]"}`}
                >
                  <FaGithub
                    className={`w-10 h-10 ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}
                  />
                </a>
                <a
                  href='#'
                  className={`aspect-square flex items-center justify-center border rounded-[33px] transition-all duration-200 ${isDark ? "bg-[#1a1a1a] border-[#333] hover:bg-[#2a2a2a] hover:border-[#444]" : "bg-white border-[#ddd] hover:bg-[#f0f0f0] hover:border-[#ccc]"}`}
                >
                  <HiOutlineMail
                    className={`w-10 h-10 ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}
                  />
                </a>
                <a
                  href='#'
                  className={`aspect-square flex items-center justify-center border rounded-[33px] transition-all duration-200 ${isDark ? "bg-[#1a1a1a] border-[#333] hover:bg-[#2a2a2a] hover:border-[#444]" : "bg-white border-[#ddd] hover:bg-[#f0f0f0] hover:border-[#ccc]"}`}
                >
                  <FaInstagram
                    className={`w-10 h-10 ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}
                  />
                </a>
                <a
                  href='#'
                  className={`aspect-square flex items-center justify-center border rounded-[33px] transition-all duration-200 ${isDark ? "bg-[#1a1a1a] border-[#333] hover:bg-[#2a2a2a] hover:border-[#444]" : "bg-white border-[#ddd] hover:bg-[#f0f0f0] hover:border-[#ccc]"}`}
                >
                  <FaXTwitter
                    className={`w-10 h-10 ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}
                  />
                </a>
                <a
                  href='#'
                  className={`aspect-square flex items-center justify-center border rounded-[33px] transition-all duration-200 ${isDark ? "bg-[#1a1a1a] border-[#333] hover:bg-[#2a2a2a] hover:border-[#444]" : "bg-white border-[#ddd] hover:bg-[#f0f0f0] hover:border-[#ccc]"}`}
                >
                  <FaDribbble
                    className={`w-10 h-10 ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}
                  />
                </a>
              </div>
            </div>
            {/* Current Focus */}
            <div
              className={`border border-[#242424] rounded-[34px] p-7 flex flex-col justify-between flex-1 min-h-0 ${card}`}
            >
              <div>
                <div className='flex items-center gap-2'>
                  <span className='relative flex h-4 w-4'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                    <span className='relative inline-flex rounded-full h-4 w-4 bg-green-500'></span>
                  </span>
                  <span
                    className={`text-[16px] mt-[0.5px] tracking-[0.2em] font-dmsans-light ${textLabel}`}
                  >
                    CURRENT FOCUS
                  </span>
                </div>
                <h3 className='text-[25px] font-bricolage-light mt-3 leading-snug'>
                  Exploring AI/ML integration in web experiences
                </h3>
                <p
                  className={`text-[14.5px] font-dmsans-light mt-[10px] mr-3 ${textMuted}`}
                >
                  Because the future of web is predictive, personalized, and
                  intelligent!
                </p>
              </div>
            </div>
            {/* Availability Status */}
            <div
              className={`border border-[#242424] rounded-[34px] p-7 flex flex-col ${card}`}
            >
              {/* Top row: INDIA on left, Status on right */}
              <div className='flex items-center justify-between'>
                <span
                  className={`text-[20px] tracking-[0.15em] font-dmsans uppercase ${textLabel}`}
                >
                  INDIA
                </span>
                <div className='flex items-center gap-1.5'>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      currentTime.getHours() >= 9 && currentTime.getHours() < 22
                        ? "bg-green-500 animate-pulse"
                        : "bg-yellow-500"
                    }`}
                  />
                  <span
                    className={`text-[14px] font-dmsans-light ${textMuted}`}
                  >
                    {currentTime.getHours() >= 9 && currentTime.getHours() < 24
                      ? "Most likely coding"
                      : "Do not disturb"}
                  </span>
                </div>
              </div>

              {/* Clock and Date at bottom */}
              <div className='mt-auto'>
                <p className='text-[40px] font-bricolage-light tabular-nums uppercase leading-tight'>
                  {currentTime.toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
                <p className={`text-[22px] font-dmsans-light ${textMuted}`}>
                  {currentTime.toLocaleDateString("en-IN", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
