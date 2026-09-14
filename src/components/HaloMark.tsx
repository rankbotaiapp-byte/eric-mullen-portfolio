export function HaloMark({ size = 56 }: { size?: number }) {
  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span
        className="absolute inset-0 rounded-full opacity-80"
        style={{
          background: "conic-gradient(from 200deg, #2dd4bf, #22d3ee, #3b82f6, #2dd4bf)",
          filter: "blur(6px)",
        }}
      />
      <span
        className="absolute inset-[3px] rounded-full"
        style={{
          background: "conic-gradient(from 200deg, #2dd4bf, #22d3ee, #3b82f6, #14b8a6)",
        }}
      />
      <span className="absolute inset-[9px] rounded-full bg-[#07090c]" />
      <span className="absolute inset-[18px] rounded-full bg-[#22d3ee]/70" />
    </span>
  );
}
