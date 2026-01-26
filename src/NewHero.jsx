import { useState, useEffect } from "react";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
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

const NewHero = ({ onShowAbout, onShowProject, onShowSkill }) => {
  const [isDark, setIsDark] = useState(true);
  const [emailCopied, setEmailCopied] = useState(false);
  const [, setCurrentTime] = useState(new Date());

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

  const bg = isDark ? "bg-[#000000]" : "bg-[#e5e5e5]";
  const cardDark = "bg-[#141414] text-white";
  const cardLight = "bg-[#f5f5f5] text-[#1a1a1a]";
  const card = isDark ? cardDark : cardLight;
  const textMuted = isDark ? "text-[#666]" : "text-[#666]";
  const textLabel = isDark ? "text-[#666]" : "text-[#666]";

  return (
    <section className={`relative z-10 h-screen overflow-hidden p-3 ${bg}`}>
      {/* Noise Texture Overlay */}
      <div
        className='absolute inset-0 z-20 pointer-events-none'
        style={{
          backgroundImage: `url(${noiseTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isDark ? 0.05 : 0.04,
        }}
        aria-hidden='true'
      />
      <div className='flex flex-col rounded-[36px] border-2 border-[#242424] h-full w-full relative p-3'>
        {/* Main Grid Layout */}
        <div className='h-full flex gap-3'>
          {/* === LEFT COLUMN (Fixed Width) === */}
          <div className='w-[350px] grid grid-rows-[350px_1fr_160px] gap-3 h-full shrink-0'>
            {/* 1. Profile Photo (Top) */}
            <div className={`rounded-[27.5px] overflow-hidden ${card}`}>
              <img
                src='src/assets/profile.png'
                alt='Profile'
                className='w-full h-full object-cover'
              />
            </div>

            {/* 2. Projects Navigation (Middle) */}
            <div
              onClick={onShowProject}
              className={`rounded-[27.5px] overflow-hidden relative group cursor-pointer ${card}`}
            >
              <img
                src='src/assets/projects.jpg'
                alt='Projects'
                className='w-full h-full object-cover scale-105 transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-100'
              />
              <div
                className='absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]'
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 15%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 50%)",
                }}
              />
              <div className='absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between pl-6 pr-4 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]'>
                <span className='text-[24px] font-dmsans-light text-white leading-tight'>
                  View projects
                </span>
                <div className='w-10 h-10 flex items-center justify-center'>
                  <span className='w-6 h-6 text-white transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] -rotate-45 group-hover:rotate-45'>
                    <ArrowIcon className='w-full h-full' />
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Theme Toggle (Bottom) */}
            <div
              className={`rounded-[27.5px] flex items-center justify-center border border-[#242424] ${card}`}
              onClick={() => setIsDark(!isDark)}
            >
              <div
                className={`w-[104px] h-[52px] rounded-full px-1 relative flex items-center cursor-pointer transition-colors duration-500 border-[1.7px] ${isDark ? "bg-[#252525] border-[#444]" : "bg-[#d0d0d0] border-[#b0b0b0]"}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#0a0a0a] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? "ml-0" : "ml-[52px]"}`}
                >
                  <IoMoon
                    className={`w-5 h-5 text-[#d4c896] absolute transition-all duration-300 ease-out ${isDark ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                  />
                  <IoSunny
                    className={`w-5 h-5 text-[#d4c896] absolute transition-all duration-300 ease-out ${isDark ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* === RIGHT SIDE (Flex Grow) === */}
          <div className='flex-1 grid grid-rows-[1fr_240px] gap-3 h-full'>
            {/* --- TOP ROW (merged hero + social) --- */}
            <div className='grid grid-cols-[1fr_95px] gap-3 h-full'>
              {/* 4. Merged Hero + About (Top Left) */}
              <div
                className={`col-span-1 h-full rounded-[27.5px] pl-12 pr-10 pb-8 pt-14 flex flex-col justify-between border border-[#242424] relative group ${card}`}
              >
                {/* Hero Logic (Top Half) */}
                <div className='flex flex-col justify-center'>
                  <h1 className='text-[54px] font-dmsans mb-2 leading-tight'>
                    Hi, I'm Ghushit ⎯
                  </h1>

                  <p
                    className={`text-[32px] font-bricolage-light ml-[-2px] ${textMuted}`}
                  >
                    Full-Stack Developer & UI/UX Designer
                  </p>
                </div>
                <span className={`w-full h-[1.5px] bg-[#242424]`} />

                {/* About Logic (Bottom Half) */}
                <div className='flex flex-col justify-center relative'>
                  <span
                    className={`text-[22px] tracking-[0.2em] font-dmsans-light uppercase mb-4 ${textLabel}`}
                  >
                    ABOUT
                  </span>
                  <p className='text-[34px] font-bricolage-light leading-snug max-w-[90%] mb-16'>
                    Passionate about crafting clean code and beautiful
                    interfaces.
                  </p>

                  {/* Arrow Button (Bottom Right) */}
                  <div className='absolute flex items-center bottom-0 right-0'>
                    <span className='mr-4 text-[26px] font-bricolage-light'>
                      More Info:{" "}
                    </span>
                    <button
                      onClick={onShowAbout}
                      className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer border-[1.8px] overflow-hidden relative ${isDark ? "border-[#333]" : "border-[#ddd]"} transition-colors`}
                    >
                      <span className='w-6 h-6 absolute transition-transform duration-500 ease-out group-hover:translate-x-8 group-hover:-translate-y-8'>
                        <ArrowIcon className='w-full h-full' />
                      </span>
                      <span className='w-6 h-6 absolute transition-transform duration-500 ease-out -translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0'>
                        <ArrowIcon className='w-full h-full' />
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 7. Social Icons (Top Right - Vertical) */}
              <div className='flex flex-col gap-[10px] h-full'>
                <a
                  href='#'
                  className={`flex-1 w-full rounded-[27.5px] flex items-center justify-center  border border-[#242424] transition-all duration-200 hover:scale-101 ${card}`}
                >
                  <FaLinkedinIn
                    className={`w-8 h-8 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
                  />
                </a>
                <a
                  href='#'
                  className={`flex-1 w-full rounded-[27.5px] flex items-center justify-center  border border-[#242424] transition-all duration-200 hover:scale-101 ${card}`}
                >
                  <FaGithub
                    className={`w-8 h-8 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
                  />
                </a>
                <a
                  href='#'
                  className={`flex-1 w-full rounded-[27.5px] flex items-center justify-center  border border-[#242424] transition-all duration-200 hover:scale-101 ${card}`}
                >
                  <HiOutlineMail
                    className={`w-8 h-8 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
                  />
                </a>
                <a
                  href='#'
                  className={`flex-1 w-full rounded-[27.5px] flex items-center justify-center border border-[#242424] transition-all duration-200 hover:scale-101 ${card}`}
                >
                  <FaInstagram
                    className={`w-8 h-8 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
                  />
                </a>
                <a
                  href='#'
                  className={`flex-1 w-full rounded-[27.5px] flex items-center justify-center  border border-[#242424] transition-all duration-200 hover:scale-101 ${card}`}
                >
                  <FaXTwitter
                    className={`w-6 h-6 ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
                  />
                </a>
              </div>
            </div>

            {/* --- BOTTOM ROW (skills + available + contact) --- */}
            <div className='grid grid-cols-[260px_240px_1fr] gap-3'>
              {/* 5. Skills (Left) */}
              <div
                onClick={onShowSkill}
                className={`col-span-1 p-5 flex flex-col items-center justify-center overflow-hidden cursor-pointer border border-[#242424] rounded-[27.5px] group ${card}`}
              >
                <span
                  className={`text-[17px] tracking-[0.2em] mt-[10.5px] font-dmsans-light ${textLabel}`}
                >
                  <span className='group-hover:hidden'>MY SKILLS</span>
                  <span className='hidden group-hover:block text-white text-[16px'>
                    CLICK & VIEW ALL
                  </span>
                </span>
                <div className='flex-1 w-full flex items-center justify-center relative overflow-hidden'>
                  <div className='marquee marquee-mask w-full group-hover:opacity-50 transition-opacity duration-300'>
                    <div className='marquee__content'>
                      <SiReact className='w-10 h-10 text-[#61DAFB] mx-2' />
                      <SiNextdotjs
                        className={`w-10 h-10 ${isDark ? "text-white" : "text-black"} mx-2`}
                      />
                      <SiTailwindcss className='w-10 h-10 text-[#06B6D4] mx-2' />
                      <SiFigma className='w-10 h-10 text-[#F24E1E] mx-2' />
                      <FaGithub
                        className={`w-10 h-10 ${isDark ? "text-white" : "text-black"} mx-2`}
                      />
                    </div>
                    <div className='marquee__content' aria-hidden='true'>
                      <SiReact className='w-10 h-10 text-[#61DAFB] mx-2' />
                      <SiNextdotjs
                        className={`w-10 h-10 ${isDark ? "text-white" : "text-black"} mx-2`}
                      />
                      <SiTailwindcss className='w-10 h-10 text-[#06B6D4] mx-2' />
                      <SiFigma className='w-10 h-10 text-[#F24E1E] mx-2' />
                      <FaGithub
                        className={`w-10 h-10 ${isDark ? "text-white" : "text-black"} mx-2`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* NEW: Available for Work (Middle) */}
              <div
                className={`col-span-1 p-7 flex flex-col border border-[#242424] rounded-[27.5px] ${card}`}
              >
                <div className='flex items-center gap-2'>
                  <span className='relative flex h-4 w-4'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                    <span className='relative inline-flex rounded-full h-4 w-4 bg-green-500'></span>
                  </span>
                  <span
                    className={`text-[17px] tracking-[0.2em] mt-[1.7px] font-dmsans-light ${textLabel}`}
                  >
                    AVAILABLE
                  </span>
                </div>
                <div className='flex-1 flex flex-col'>
                  <h3 className='text-[25px] mt-3 font-bricolage-light leading-snug'>
                    Open to new opportunities & collaborations
                  </h3>
                  <p
                    className={`text-[13px] font-dmsans-light mt-[11px] mr-3 ${textMuted}`}
                  >
                    Let's build something great!
                  </p>
                </div>
              </div>

              {/* 6. Contact (Right - Wide) */}
              <div
                className={`col-span-1 p-7 flex flex-col justify-between border border-[#242424] rounded-[27.5px] ${card}`}
              >
                <div>
                  <span
                    className={`text-[17px] tracking-[0.2em] font-dmsans-light uppercase ${textLabel}`}
                  >
                    GET IN TOUCH
                  </span>
                  <h3 className='text-[25px] font-bricolage-light mt-3 leading-snug'>
                    Have an idea? Let's bring it to life together.
                  </h3>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className={`w-full flex items-center justify-between px-6 py-[14px] rounded-[16px] border cursor-pointer transition-all duration-300 font-dmsans-light ${
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
                    className={`text-[20px] font-dmsans-light ${emailCopied ? "text-green-500" : ""}`}
                  >
                    {emailCopied ? "Copied!" : myEmail}
                  </span>
                  {emailCopied ? (
                    <span className='text-green-500 text-lg'>✓</span>
                  ) : (
                    <IoCopyOutline className='w-[22px] h-[22px] opacity-100' />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
