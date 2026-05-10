import type { BlogListItem } from "../types/blog";

export default function BlogCard({
  id,
  preview,
  tag,
  title,
  updated_at,
}: BlogListItem) {
  return (
    <div
      className="group relative mb-[14px] overflow-hidden rounded-xl border border-[#232323] bg-[#141414] p-5"
      key={id}
    >
      <div className="absolute left-0 top-0 h-full w-[3px] bg-[#f97316] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
      <div className="mb-2.5 inline-block rounded-[4px] bg-[#f97316]/opacity-10 px-2 py-0.75 font-mono text-[10px] uppercase tracking-[1.5px] text-[#f97316]">
        {tag}
      </div>
      <div className="mb-2 font-sans text-[15px] font-bold leading-[1.35] text-white">
        {title}
      </div>
      <div className="mb-3.5 text-[12px] leading-relaxed text-[#666]">
        {preview}
      </div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-[#444]">{updated_at}</span>
        <a
          className="flex items-center gap-1 font-mono text-[11px] text-[#f97316] no-underline"
          href="#"
        >
          Read ↗
        </a>
      </div>
    </div>
  );
}
