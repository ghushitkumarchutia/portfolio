import { useState } from "react";
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

const MobileHero = ({ onShowAbout, onShowProject, onShowSkill }) => {
  const [isDark, setIsDark] = useState(true);
  const [emailCopied, setEmailCopied] = useState(false);

  const myEmail = "ghushitchutia@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 4000);
  };

  const bg = isDark ? "bg-[#090909]" : "bg-[#e5e5e5]";
  const cardDark = "bg-[#141414] text-white";
  const cardLight = "bg-[#f5f5f5] text-[#1a1a1a]";
  const card = isDark ? cardDark : cardLight;
  const textMuted = isDark ? "text-[#666]" : "text-[#666]";
  const textLabel = isDark ? "text-[#666]" : "text-[#666]";

  return (
    <section className={`relative z-10 min-h-screen p-2 ${bg}`}>
      {/* Noise Texture Overlay */}
      <div
        className='absolute inset-0 z-20 pointer-events-none'
        style={{
          backgroundImage: `url(${noiseTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isDark ? 0.03 : 0.02,
        }}
        aria-hidden='true'
      />

      <div className={`space-y-[10px]`}>
        {/* 1. Profile Photo */}
        <div className={`rounded-[34px] overflow-hidden aspect-square ${card}`}>
          <img
            src='src/assets/profile.png'
            alt='Profile'
            className='w-full h-full object-cover'
          />
        </div>
        {/* 2. Hero Intro */}
        <div
          className={`rounded-[30px] px-9 py-10 flex flex-col justify-center border border-[#242424] ${card}`}
        >
          <h1 className='text-[30px] font-dmsans mb-1'>Hi, I'm Ghushit ⎯</h1>
          <p
            className={`text-[23px] font-bricolage-light ml-[-2px] ${textMuted}`}
          >
            Full-Stack Developer & UI/UX Designer
          </p>
        </div>
        {/* 3. About */}
        <div
          className={`border border-[#242424] rounded-[30px] pt-[30px] pr-4 pb-4 pl-8 flex flex-col justify-between group transition-colors duration-150 ${isDark ? "hover:bg-white/5" : ""} ${card}`}
        >
          <span
            className={`text-[20px] tracking-[0.2em] font-dmsans-light uppercase ${textLabel}`}
          >
            ABOUT
          </span>
          <p className='text-[23px] font-bricolage-light leading-snug my-4'>
            Passionate about crafting clean code and beautiful interfaces.
          </p>
          <div className='flex justify-end'>
            <button
              onClick={onShowAbout}
              className={`w-11 h-11 rounded-full flex items-center justify-center cursor-pointer border-[1.8px] overflow-hidden relative ${isDark ? "border-[#333]" : "border-[#ddd]"} transition-colors`}
            >
              <span className='w-5 h-5 absolute transition-transform duration-500 ease-out group-hover:translate-x-8 group-hover:-translate-y-8'>
                <ArrowIcon className='w-full h-full' />
              </span>
              <span className='w-5 h-5 absolute transition-transform duration-500 ease-out -translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0'>
                <ArrowIcon className='w-full h-full' />
              </span>
            </button>
          </div>
        </div>
        {/* 4. Row: Tech Stack (Wide) + Theme Toggle (Narrow) */}
        <div className='grid grid-cols-[1fr_auto] gap-[10px]'>
          {/* Tech Stack */}
          {/* Tech Stack */}
          <div
            onClick={onShowSkill}
            className={`border border-[#242424] rounded-[25px] p-5 h-[160px] flex flex-col items-center overflow-hidden cursor-pointer group ${card}`}
          >
            {/* Header Text */}
            <span
              className={`text-[17px] tracking-wide font-dmsans-light uppercase mb-2 ${textLabel}`}
            >
              Click to view all
            </span>

            {/* Container for marquee - constrained width */}
            <div className='flex-1 w-[95%] flex items-center justify-center relative overflow-hidden'>
              {/* Marquee */}
              <div className='marquee marquee-mask w-full'>
                {/* First content container */}
                <div className='marquee__content'>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                  >
                    <SiReact className='w-7 h-7 text-[#61DAFB]' />
                  </div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                  >
                    <SiNextdotjs
                      className={`w-7 h-7 ${isDark ? "text-white" : "text-black"}`}
                    />
                  </div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                  >
                    <SiTailwindcss className='w-7 h-7 text-[#06B6D4]' />
                  </div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                  >
                    <SiFigma className='w-7 h-7 text-[#F24E1E]' />
                  </div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                  >
                    <FaGithub
                      className={`w-7 h-7 ${isDark ? "text-white" : "text-black"}`}
                    />
                  </div>
                </div>
                {/* Duplicate content container for seamless loop */}
                <div className='marquee__content' aria-hidden='true'>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                  >
                    <SiReact className='w-7 h-7 text-[#61DAFB]' />
                  </div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                  >
                    <SiNextdotjs
                      className={`w-7 h-7 ${isDark ? "text-white" : "text-black"}`}
                    />
                  </div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                  >
                    <SiTailwindcss className='w-7 h-7 text-[#06B6D4]' />
                  </div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                  >
                    <SiFigma className='w-7 h-7 text-[#F24E1E]' />
                  </div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? "bg-[#252525]" : "bg-white shadow"}`}
                  >
                    <FaGithub
                      className={`w-7 h-7 ${isDark ? "text-white" : "text-black"}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Toggle */}
          <div
            className={`border border-[#242424] rounded-[25px] w-[120px] h-[160px] flex items-center justify-center cursor-pointer ${card}`}
            onClick={() => setIsDark(!isDark)}
          >
            <div
              className={`w-[80px] h-[44px] rounded-full px-1 relative flex items-center transition-colors duration-500 border-[1.7px] ${isDark ? "bg-[#252525] border-[#444]" : "bg-[#d0d0d0] border-[#b0b0b0]"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#0a0a0a] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? "ml-0" : "ml-[36px]"}`}
              >
                <IoMoon
                  className={`w-4 h-4 text-[#d4c896] absolute transition-all duration-300 ease-out ${isDark ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                />
                <IoSunny
                  className={`w-4 h-4 text-[#d4c896] absolute transition-all duration-300 ease-out ${isDark ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
                />
              </div>
            </div>
          </div>
        </div>
        {/* 5. Projects Navigation */}
        <div
          onClick={onShowProject}
          className={`rounded-[34px] overflow-hidden relative group cursor-pointer aspect-[1.5/1] ${card}`}
        >
          <img
            src='src/assets/projects.jpg'
            alt='Projects'
            className='w-full h-full object-cover scale-105 transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-100'
          />
          <div
            className='absolute inset-0 z-10'
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 15%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 50%)",
            }}
          />
          <div className='absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between pl-7 pr-4 py-6'>
            <span className='text-[24px] font-dmsans-light text-white'>
              Click to view all projects
            </span>
            <div className='w-9 h-9 flex items-center justify-center'>
              <span className='w-5 h-5 text-white rotate-45'>
                <ArrowIcon className='w-full h-full' />
              </span>
            </div>
          </div>
        </div>
        {/* 6. Contact */}
        <div
          className={`border border-[#242424] rounded-[30px] p-7 flex flex-col justify-between ${card}`}
        >
          <div>
            <span
              className={`text-[18px] tracking-[0.2em] font-dmsans-light uppercase ${textLabel}`}
            >
              GET IN TOUCH
            </span>
            <h3 className='text-[23px] font-bricolage-light mt-3 leading-snug mb-6'>
              Have an idea? Let's bring it to life together.
            </h3>
          </div>
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
        {/* 7. Social Icons */}
        <div className={`rounded-[34px]`}>
          <div className='grid grid-cols-5 gap-2'>
            <a
              href='#'
              className={`aspect-square flex items-center justify-center border rounded-[18px] transition-all duration-200 ${isDark ? "bg-[#1a1a1a] border-[#333]" : "bg-white border-[#ddd]"}`}
            >
              <FaLinkedinIn
                className={`w-7 h-7 ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}
              />
            </a>
            <a
              href='#'
              className={`aspect-square flex items-center justify-center border rounded-[18px] transition-all duration-200 ${isDark ? "bg-[#1a1a1a] border-[#333]" : "bg-white border-[#ddd]"}`}
            >
              <FaGithub
                className={`w-7 h-7 ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}
              />
            </a>
            <a
              href='#'
              className={`aspect-square flex items-center justify-center border rounded-[18px] transition-all duration-200 ${isDark ? "bg-[#1a1a1a] border-[#333]" : "bg-white border-[#ddd]"}`}
            >
              <HiOutlineMail
                className={`w-8 h-8 ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}
              />
            </a>
            <a
              href='#'
              className={`aspect-square flex items-center justify-center border rounded-[18px] transition-all duration-200 ${isDark ? "bg-[#1a1a1a] border-[#333]" : "bg-white border-[#ddd]"}`}
            >
              <FaInstagram
                className={`w-7 h-7 ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}
              />
            </a>
            <a
              href='#'
              className={`aspect-square flex items-center justify-center border rounded-[18px] transition-all duration-200 ${isDark ? "bg-[#1a1a1a] border-[#333]" : "bg-white border-[#ddd]"}`}
            >
              <FaXTwitter
                className={`w-7 h-7 ${isDark ? "text-white/80" : "text-[#1a1a1a]"}`}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;
