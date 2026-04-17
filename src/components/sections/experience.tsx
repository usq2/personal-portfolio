export default function Experience() {
  return (
    <section id="experience" className="px-15 py-28 border-t border-border">
      <div className="">
        <p className="section-label text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
          Experience
        </p>
        <h2 className="font-extrabold font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-text">
          Where I've
          <br />
          <em className="italic text-text-3">done the work</em>
        </h2>
      </div>
      <div className="exp-grid grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 md:gap-20 mt-14">
        <div className=" pt-1">
          <p className="text-[0.82rem] text-text-3 leading-relaxed">
            5.5 years in product companies — building, leading, and shipping
            things that matter.
          </p>
        </div>
        <div className="timeline  relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-border">
          <div className="timeline-item relative mb-12 last:mb-0">
            <div className="timeline-dot"></div>
            <div className="timeline-period text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-accent mb-1.5">
              2024 — Present
            </div>
            <div className="timeline-role font-serif text-xl md:text-[1.3rem] text-text mb-0.5">
              Senior Software Development Engineer
            </div>
            <div className="timeline-company text-[0.83rem] text-text-3 mb-2.5">
              Tally Solutions · Bengaluru, India
            </div>
            <p className="timeline-desc text-[0.9rem] text-text-2">
              Leading a team of 4 engineers on the company's connected services
              platform. Architected a backend monolith with easy migration to
              microservices plan and a marquee mobile app frontend (pre
              production). Own the full delivery lifecycle from design review to
              production.
            </p>
          </div>
          <div className="timeline-item relative mb-12 last:mb-0">
            <div className="timeline-dot"></div>
            <div className="timeline-period text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-accent mb-1.5">
              2022 — 2024
            </div>
            <div className="timeline-role font-serif text-xl md:text-[1.3rem] text-text mb-0.5">
              Software Development Engineer - 2
            </div>
            <div className="timeline-company text-[0.83rem] text-text-3 mb-2.5">
              Tally Solutions · Bengaluru, India
            </div>
            <p className="timeline-desc text-[0.9rem] text-text-2">
              Built and maintained multiple client-facing React apps and React
              Native mobile apps and the Node.js APIs behind them. Established
              the entire CI/CD pipeline with testing practices for the entire
              stack.
            </p>
          </div>
          <div className="timeline-item relative mb-12 last:mb-0">
            <div className="timeline-dot"></div>
            <div className="timeline-period text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-accent mb-1.5">
              2020 — 2022
            </div>
            <div className="timeline-role font-serif text-xl md:text-[1.3rem] text-text mb-0.5">
              Software Development Engineer - 1
            </div>
            <div className="timeline-company text-[0.83rem] text-text-3 mb-2.5">
              Tally Solutions · Bengaluru, India
            </div>
            <p className="timeline-desc text-[0.9rem] text-text-2">
              Joined as a fresher. Contributed across the high performance
              backend stack — C++ — in a fast-moving environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
