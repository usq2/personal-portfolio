import GitLogo from "../icons/github";
import LinkedInLogo from "../icons/linkedin";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-15 py-28 text-center bg-bg-2 border-t border-border"
    >
      <p className="section-label text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-accent mb-3 ">
        Let's Connect
      </p>
      <h2 className="font-extrabold font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-text ">
        Have a project
        <br />
        <em className="italic text-accent">in mind?</em>
      </h2>
      <a
        href="mailto:utkarsh1si16is060@gmail.com"
        className="contact-email inline-block font-serif text-[clamp(1.4rem,3vw,2.2rem)] text-text no-underline my-7 pb-1 border-b border-border transition-all hover:text-accent hover:border-accent "
      >
        utkarsh1si16is060@gmail.com
      </a>
      <div className="social-links flex justify-center gap-6 mt-9 flex-wrap ">
        <a
          href="https://github.com/usq2"
          className="social-link text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-text-3 no-underline transition-colors hover:text-accent"
        >
          <GitLogo height={40} width={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/utkarsh-sahay-a55779166/"
          className="social-link text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-text-3 no-underline transition-colors hover:text-accent"
        >
          <LinkedInLogo height={40} width={40} />
        </a>
        {/* <a
          href="#"
          className="social-link text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-text-3 no-underline transition-colors hover:text-accent"
        >
          Twitter / X
        </a>
        <a
          href="#"
          className="social-link text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-text-3 no-underline transition-colors hover:text-accent"
        >
          Resume ↓
        </a> */}
      </div>
    </section>
  );
}
