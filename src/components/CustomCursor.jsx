import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e) => {
      const target = e.target;

      const isText =
        target.tagName === "P" ||
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "H4" ||
        target.tagName === "H5" ||
        target.tagName === "H6" ||
        target.tagName === "SPAN" ||
        target.tagName === "LI" ||
        target.tagName === "LABEL" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        window.getComputedStyle(target).cursor === "text";

      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsTextHovered(isText && !isClickable);
      setIsPointer(isClickable && !isText);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [isVisible]);

  const baseSize = isTextHovered
    ? { w: "4px", h: "40px" }
    : { w: "24px", h: "24px" };
  const cursorColor = "bg-white mix-blend-difference";

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      <style>{`
        *, *::before, *::after {
          cursor: none !important;
        }
      `}</style>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 z-9999 pointer-events-none rounded-full transition-[width,height,transform,background-color,border-radius] duration-300 ease-out flex items-center justify-center ${cursorColor}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: baseSize.w,
          height: baseSize.h,
          borderRadius: isTextHovered ? "2px" : "50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
