export default function Tile({ title, style, logo }) {
  return (
    <div
      className={`flex flex-col items-center text-center justify-center gap-4 p-8 w-40 h-40 rounded-2xl  border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,69,0,0.1)] group ${style}`}
    >
      {/* Logo Container */}
      <div className="w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
        {logo}
      </div>

      {/* Text Label */}
      <span
        className={`text-[0.78rem] font-medium tracking-[0.09em] uppercase ${style} break-keep self-center`}
      >
        {title}
      </span>
    </div>
  );
}
