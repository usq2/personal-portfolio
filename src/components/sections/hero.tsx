export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_400px] items-center gap-12 lg:gap-[60px] pt-36 pb-20 px-15"
    >
      <div className="hero-text">
        <p className="text-accent text-[0.72rem] font-semibold tracking-[0.14em] uppercase mb-5 opacity-0 animate-[fadeUp_0.7s_0.1s_forwards]">
          Full Stack Developer · 5.5 Years
        </p>
        <h1 className="font-sans font-extrabold text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-tighter text-text opacity-0 animate-[fadeUp_0.7s_0.25s_forwards]">
          Utkarsh{" "}
          <span className="text-accent text-shadow-accent text-shadow-md">
            Sahay
          </span>
        </h1>
        <p className="mt-7 text-[clamp(0.95rem,1.3vw,1.1rem)] text-text-2 max-w-md opacity-0 animate-[fadeUp_0.7s_0.4s_forwards]">
          I build thoughtful, performant software — from elegant APIs to
          polished interfaces — that people actually enjoy using.
        </p>
        <div className="mt-11 flex gap-4 flex-wrap opacity-0 animate-[fadeUp_0.7s_0.55s_forwards]">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-[0.78rem] font-semibold tracking-wide uppercase rounded-sm transition-all hover:opacity-85 hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(255,95,31,0.6)] shadow-[0_4px_20px_rgba(255,95,31,0.4)]"
          >
            View Projects →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-border bg-transparent text-text-2 text-[0.78rem] font-semibold tracking-wide uppercase rounded-sm transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="hero-right flex flex-col items-center gap-5 opacity-0 animate-[fadeIn_0.9s_0.6s_forwards]">
        <div className="avatar-frame">
          <img
            src="/profile.jpeg"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="stat-strip grid grid-cols-3 gap-px w-full border border-border rounded-md overflow-hidden">
          <div className="stat-cell bg-bg-2 p-4 text-center transition-colors hover:bg-bg-3">
            <div className="stat-num font-serif text-[1.7rem] leading-none text-accent">
              5.5
            </div>
            <div className="stat-lbl text-[0.62rem] font-semibold tracking-[0.08em] uppercase text-text-3 mt-1">
              Yrs Exp
            </div>
          </div>
          <div className="stat-cell bg-bg-2 p-4 text-center transition-colors hover:bg-bg-3">
            <div className="stat-num font-serif text-[1.7rem] leading-none text-accent">
              20+
            </div>
            <div className="stat-lbl text-[0.62rem] font-semibold tracking-[0.08em] uppercase text-text-3 mt-1">
              Projects
            </div>
          </div>
          <div className="stat-cell bg-bg-2 p-4 text-center transition-colors hover:bg-bg-3">
            <div className="stat-num font-serif text-[1.7rem] leading-none text-accent">
              ∞
            </div>
            <div className="stat-lbl text-[0.62rem] font-semibold tracking-[0.08em] uppercase text-text-3 mt-1">
              Espresso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
