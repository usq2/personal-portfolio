import "../../App.css";
import { useMemo } from "react";

interface Props {
  name: string;
}

export default function NavButtons({ name }: Props) {
  const metadata = useMemo(
    () => ({
      href: `#${name.toLowerCase()}`,
      title: `${name[0].toUpperCase()}${name.slice(1)}`,
    }),
    [name],
  );

  return (
    <li>
      <a
        href={metadata.href}
        className="text-[0.78rem] font-medium tracking-[0.09em] uppercase text-[var(--text-3)] no-underline transition-colors duration-200 hover:text-white"
      >
        {metadata.title}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-accent transition-all duration-300 ease-out group-hover:w-3/4" />
      </a>
    </li>
  );
}
