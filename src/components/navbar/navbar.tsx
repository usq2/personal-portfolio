import "../../App.css";
import NavButtons from "./buttons";
import { useEffectEvent, useRef, useEffect } from "react";
export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const Sections = ["about", "skills", "projects", "experience", "contact"];

  const onScroll = useEffectEvent(() => {
    if (navRef.current) {
      navRef.current.classList.toggle("scrolled", window.scrollY > 40);
    }
  });
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      //cleanup
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[100] flex flex-2 items-center justify-between bg-[#0d0d0f]/85 backdrop-blur-[14px] border-b border-transparent transition-colors duration-300 px-15 py-[22px]"
    >
      <a href="#hero" className=" text-base font-serif text-text no-underline">
        US
      </a>
      <ul className="flex list-none gap-9">
        {Sections.map((section) => {
          return <NavButtons key={section} name={section} />;
        })}
      </ul>
    </nav>
  );
}
