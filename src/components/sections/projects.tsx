export default function Projects() {
  return (
    <section
      id="projects"
      className="flex px-15 md:flex-row flex-col justify-between items-center py-28 border-t border-border"
    >
      <div className="">
        <p className="section-label text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
          Selected Work
        </p>
        <h2 className="font-extrabold font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-text">
          Things I've
          <br />
          <em className="italic text-text-3">built &amp; shipped</em>
        </h2>
      </div>
      <div className="projects-list  mt-14">
        <a
          href="https://tallyedge.com"
          target="_blank"
          className="project-item grid grid-cols-[36px_1fr_20px] md:grid-cols-[52px_1fr_28px] gap-6 items-start py-6 border-t border-border no-underline text-inherit transition-all hover:pl-2.5"
        >
          <span className="project-num font-serif text-base text-text-3 italic pt-1">
            01
          </span>
          <div className="project-info">
            <h3 className="font-serif text-xl md:text-[1.3rem] font-normal text-text mb-1.5">
              TallyEdge — Account Aggregator
            </h3>
            <p className="text-sm text-text-2 mb-3">
              An account aggregator platform with multiple FIUs & FIPs
            </p>
            <div className="project-chips flex gap-2 flex-wrap">
              <span className="chip chip-react">
                <span className="chip-dot"></span>React
              </span>
              <span className="chip chip-node">
                <span className="chip-dot"></span>Node.js
              </span>
              <span className="chip chip-ws">
                <span className="chip-dot"></span>React-Native
              </span>
              <span className="chip chip-redis">
                <span className="chip-dot"></span>AWS Lambda
              </span>
              <span className="chip chip-postgres">
                <span className="chip-dot"></span>SQL
              </span>
            </div>
          </div>
          <span className="project-arrow text-lg text-text-3 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
            ↗
          </span>
        </a>
        <a
          href="#"
          className="project-item grid grid-cols-[36px_1fr_20px] md:grid-cols-[52px_1fr_28px] gap-6 items-start py-6 border-t border-border no-underline text-inherit transition-all hover:pl-2.5"
        >
          <span className="project-num font-serif text-base text-text-3 italic pt-1">
            02
          </span>
          <div className="project-info">
            <h3 className="font-serif text-xl md:text-[1.3rem] font-normal text-text mb-1.5">
              ConnectedBackups — Backup Management SaaS
            </h3>
            <p className="text-sm text-text-2 mb-3">
              Multi-tenant SaaS with fine-grained permissions, versioning, and
              backup management inside Tally.
            </p>
            <div className="project-chips flex gap-2 flex-wrap">
              <span className="chip chip-node">
                <span className="chip-dot"></span>Node.js
              </span>
              <span className="chip chip-mongo">
                <span className="chip-dot"></span>MongoDB
              </span>
              <span className="chip chip-aws">
                <span className="chip-dot"></span>AWS S3
              </span>
              <span className="chip chip-ts">
                <span className="chip-dot"></span>TypeScript
              </span>
            </div>
          </div>
          <span className="project-arrow text-lg text-text-3 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"></span>
        </a>
        <a
          href="https://toolpad.in"
          target="_blank"
          className="project-item grid grid-cols-[36px_1fr_20px] md:grid-cols-[52px_1fr_28px] gap-6 items-start py-6 border-t border-border no-underline text-inherit transition-all hover:pl-2.5"
        >
          <span className="project-num font-serif text-base text-text-3 italic pt-1">
            03
          </span>
          <div className="project-info">
            <h3 className="font-serif text-xl md:text-[1.3rem] font-normal text-text mb-1.5">
              Toolpad - A set of utility tools for developers
            </h3>
            <p className="text-sm text-text-2 mb-3">
              A small set of utility tools for data fromatting, data format
              conversions and data generation.
            </p>
            <div className="project-chips flex gap-2 flex-wrap">
              <span className="chip chip-ts">
                <span className="chip-dot"></span>TypeScript
              </span>
              <span className="chip chip-react">
                <span className="chip-dot"></span>React
              </span>
              <span className="chip chip-python">
                <span className="chip-dot"></span>Vite
              </span>
              <span className="chip chip-oss">
                <span className="chip-dot"></span>OSS
              </span>
            </div>
          </div>
          <span className="project-arrow text-lg text-text-3 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
            ↗
          </span>
        </a>
        <a
          href="#"
          className="project-item grid grid-cols-[36px_1fr_20px] md:grid-cols-[52px_1fr_28px] gap-6 items-start py-6 border-t border-b border-border no-underline text-inherit transition-all hover:pl-2.5"
        >
          <span className="project-num font-serif text-base text-text-3 italic pt-1">
            04
          </span>
          <div className="project-info">
            <h3 className="font-serif text-xl md:text-[1.3rem] font-normal text-text mb-1.5">
              Leaflink — Personal Finance Tracker
            </h3>
            <p className="text-sm text-text-2 mb-3">
              Mobile-first PWA with bank sync, budgeting goals, and insightful
              spending reports.
            </p>
            <div className="project-chips flex gap-2 flex-wrap">
              <span className="chip chip-react">
                <span className="chip-dot"></span>React
              </span>
              <span className="chip chip-fastapi">
                <span className="chip-dot"></span>FastAPI
              </span>
              <span className="chip chip-python">
                <span className="chip-dot"></span>Python
              </span>
              <span className="chip chip-redis">
                <span className="chip-dot"></span>Redis
              </span>
            </div>
          </div>
          <span className="project-arrow text-lg text-text-3 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
