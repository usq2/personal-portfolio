export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-20 px-15 py-28 border-t border-border"
    >
      <div className="">
        <p className="section-label text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
          About Me
        </p>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-text font-extrabold">
          Crafting software
          <br />
          <em className="italic text-text-3">that matters</em>
        </h2>
      </div>
      <div className="about-body  space-y-5">
        <p className="text-text-2 text-[1.02rem]">
          Hi, I'm <strong className="text-text font-medium">Utkarsh</strong> — a
          senior full stack developer with
          <strong className="text-text font-medium"> 5.5 years</strong> of
          experience building scalable web applications from the ground up. I'm
          equally at home designing database schemas as I am fine-tuning a React
          component's animations.
        </p>
        <p className="text-text-2 text-[1.02rem]">
          I believe great software is invisible — it gets out of the way and
          lets people do what they came to do. I obsess over performance, clean
          architecture, and developer experience just as much as the end-user
          experience.
        </p>
        <p className="text-text-2 text-[1.02rem]">
          When I'm not writing code, I'm probably reading about distributed
          systems, contributing to open source, or hunting for the best chai in
          Bengaluru.
        </p>
      </div>
    </section>
  );
}
