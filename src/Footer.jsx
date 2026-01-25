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

const Hero = ({ onShowAbout }) => {
  const [isDark, setIsDark] = useState(true);

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
          opacity: isDark ? 0.05 : 0.04,
        }}
        aria-hidden='true'
      />
      <div
        className={`h-full rounded-[47px] p-[14.5px] border-[1.8px] border-[#242424] overflow-hidden`}
      >
        <div className='grid grid-cols-[1fr_310px] h-full gap-4 overflow-hidden'>
          {/* ===== MAIN CONTENT ===== */}
          <div className='grid grid-rows-3 gap-4 h-full overflow-hidden'>
            {/* ROW 1 */}
            <div className='grid grid-cols-12 gap-4 min-h-0'>
              {/* Hero - 6 cols */}
              <div
                className={`col-span-6 rounded-[38px] px-13 flex flex-col justify-center border border-[#242424] ${card}`}
              >
                <h1 className='text-[32px] font-dmsans mb-3'>
                  Hi, I'm Ghushit ⎯
                </h1>
                <p className={`text-[24px] font-bricolage-light ${textMuted}`}>
                  Full-Stack Developer & UI/UX Designer
                </p>
              </div>
              {/* Project 1 - 3 cols */}
              <div
                className={`col-span-3 rounded-[38px] flex flex-col justify-center border border-[#242424] ${card}`}
              >
                <h1>hi</h1>
              </div>
              {/* Project 2 - 3 cols */}
              <div
                className={`col-span-3 rounded-[38px] flex flex-col justify-center border border-[#242424] ${card}`}
              ></div>
            </div>

            {/* ROW 2 */}
            <div className='grid grid-cols-[0.48fr_0.977fr_0.743fr] gap-4 min-h-0'>
              {/* Profile Photo */}
              <div className={`rounded-[38px] overflow-hidden ${card}`}>
                <img
                  src='src/assets/profile.png'
                  alt='Profile'
                  className='w-full h-full object-cover'
                />
              </div>
              {/* About */}
              <div
                className={`border border-[#242424] rounded-[38px] p-6 flex flex-col justify-between ${card}`}
              >
                <div>
                  <span
                    className={`text-xs font-medium tracking-widest ${textLabel}`}
                  >
                    ABOUT
                  </span>
                  <p className='text-xl font-semibold mt-3'>
                    Passionate about crafting clean code and beautiful
                    interfaces.
                  </p>
                </div>
                <div className='flex justify-end'>
                  <button
                    onClick={onShowAbout}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? "bg-white/10" : "bg-black/10"} hover:scale-110 transition-transform`}
                  >
                    <span className='text-lg -rotate-45'>→</span>
                  </button>
                </div>
              </div>
              {/* Project 3 */}
              <div className={`rounded-[38px] overflow-hidden ${card}`}>
                <img
                  src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
                  alt='Project 3'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* ROW 3 */}
            <div className='grid grid-cols-[1fr_0.58fr_0.39fr] gap-4 min-h-0'>
              {/* Newsletter */}
              <div
                className={`border border-[#242424] rounded-[38px] p-6 flex flex-col justify-between ${card}`}
              >
                <h3 className='text-xl font-semibold'>
                  Get design tips & guides straight to your inbox for free!
                </h3>
                <div className='flex gap-3 mt-4'>
                  <input
                    type='email'
                    placeholder='Your email address'
                    className={`flex-1 px-4 py-3 rounded-full text-sm outline-none border ${isDark ? "bg-transparent text-white placeholder:text-gray-500 border-gray-600" : "bg-white text-[#1a1a1a] placeholder:text-gray-400 border-gray-300"}`}
                  />
                  <button
                    className={`px-6 py-3 rounded-full text-sm font-medium ${isDark ? "bg-[#333] text-white" : "bg-[#1a1a1a] text-white"}`}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              {/* Tech Stack */}
              <div
                className={`border border-[#242424] rounded-[38px] p-5 flex flex-col ${card}`}
              >
                <h3 className='text-xl font-semibold mb-4'>Stack I use</h3>
                <div className='flex-1 flex items-center'>
                  <div className='flex gap-4'>
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
                  </div>
                </div>
              </div>
              {/* Theme Toggle */}
              <div
                className={`border border-[#242424] rounded-[38px] flex items-start justify-end p-4 cursor-pointer ${card}`}
                onClick={() => setIsDark(!isDark)}
              >
                <div
                  className={`w-20 h-10 rounded-full p-1 flex items-center ${isDark ? "bg-[#252525] justify-start" : "bg-gray-300 justify-end"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? "bg-[#1a1a1a]" : "bg-white"}`}
                  >
                    {isDark ? (
                      <IoMoon className='w-4 h-4 text-white' />
                    ) : (
                      <IoSunny className='w-4 h-4 text-yellow-500' />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className='grid grid-rows-[auto_1fr_0.87fr] gap-4 h-full overflow-hidden'>
            {/* Social Icons */}
            <div className={`rounded-[38px]`}>
              <div className='grid grid-cols-3 gap-4'>
                <a
                  href='#'
                  className={`aspect-square flex items-center justify-center border border-[#242424] rounded-[24px] ${isDark ? "bg-[#141414] hover:bg-[#1a1a1a]" : "bg-[#e8e8e8] hover:bg-[#e0e0e0]"}`}
                >
                  <FaXTwitter className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className={`aspect-square flex items-center justify-center border border-[#242424] rounded-[24px] ${isDark ? "bg-[#141414] hover:bg-[#1a1a1a]" : "bg-[#e8e8e8] hover:bg-[#e0e0e0]"}`}
                >
                  <FaDribbble className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className={`aspect-square flex items-center justify-center border border-[#242424] rounded-[24px] ${isDark ? "bg-[#141414] hover:bg-[#1a1a1a]" : "bg-[#e8e8e8] hover:bg-[#e0e0e0]"}`}
                >
                  <FaInstagram className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className={`aspect-square flex items-center justify-center border border-[#242424] rounded-[24px] ${isDark ? "bg-[#141414] hover:bg-[#1a1a1a]" : "bg-[#e8e8e8] hover:bg-[#e0e0e0]"}`}
                >
                  <FaLinkedinIn className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className={`aspect-square flex items-center justify-center border border-[#242424] rounded-[24px] ${isDark ? "bg-[#141414] hover:bg-[#1a1a1a]" : "bg-[#e8e8e8] hover:bg-[#e0e0e0]"}`}
                >
                  <FaGithub className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className={`aspect-square flex items-center justify-center border border-[#242424] rounded-[24px] ${isDark ? "bg-[#141414] hover:bg-[#1a1a1a]" : "bg-[#e8e8e8] hover:bg-[#e0e0e0]"}`}
                >
                  <HiOutlineMail className='w-5 h-5' />
                </a>
              </div>
            </div>
            {/* Resources */}
            <div
              className={`border border-[#242424] rounded-[38px] p-5 flex flex-col justify-between flex-1 min-h-0 ${card}`}
            >
              <div>
                <span
                  className={`text-xs font-medium tracking-widest ${textLabel}`}
                >
                  RESOURCES
                </span>
                <h3 className='text-xl font-semibold mt-3'>
                  Resources to speed your workflow
                </h3>
              </div>
              <div className='flex justify-end'>
                <button
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? "bg-white/10" : "bg-black/10"}`}
                >
                  <span className='text-lg -rotate-45'>→</span>
                </button>
              </div>
            </div>
            {/* Contact - Have a project */}
            <div
              className={`border border-[#242424] rounded-[38px] p-5 flex flex-col justify-between ${card}`}
            >
              <h3 className='text-lg font-semibold'>Have a project in mind?</h3>
              <button
                className={`w-full py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 ${isDark ? "bg-[#333] text-white" : "bg-[#e0e0e0] text-[#1a1a1a]"}`}
              >
                Copy email <IoCopyOutline className='w-4 h-4' />
              </button>
              <div className='flex justify-end'>
                <button
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? "bg-white/10" : "bg-black/10"}`}
                >
                  <span className='text-lg -rotate-45'>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// see and analyze the image you can see that this
// About.jsx
//  is completely unresponsive for small screens

// So read the
// About.jsx
//  file code completely and understand the structure completely without missing anything and then analyz the code.

// Then make it complete industry grtade perfect responsive.

// But strictly you will follow these:
// 1. By any condition existing design layout size shape for big pc, laptop type big screens must not be touched or changed, they must be exact how currently exist.

// 2. For responsive screens or small sceens need these:
// 1. Close button need in exact same way exist for big sceen
// 1. Then below close button 1st grid "What I'm About Only" but for big screens there is not rounded corner in bottm left and right, but for small screens need rounded corner in bottom both side.
// 2. Then after that grid need both "Image Slider" and "CV View Card" grid on then below one.
// 3. then at last the "Experience Card" grid, it should be excat same, only inside text size need to fix, after it no bttom rouded corner need, no bottom padding outside it like how currently exist for big screens.

// Precisely analyze waht exactly i want then fix that complete perfectly.

// Read this file completely without missing single, single piece of code logics.

// i want a final verfication that is all logics and code final deploy ready or not from all aspects.

// without being biass to me find if any inconsistencies exist in it.

// then solve ir without break or changing design layout, size shape, color.
