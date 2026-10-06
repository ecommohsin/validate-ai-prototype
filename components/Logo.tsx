export function Logo({ inverted = false }: { inverted?: boolean }) {
  const type = inverted ? "text-white" : "text-ink";

  return (
    <a href="#top" className="flex items-center gap-2.5">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
      >
        <rect width="34" height="34" rx="10" fill="#4d6bff" />
        <path
          d="M9.5 17.4 14.2 22 24.5 11.8"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={`text-[15px] font-extrabold tracking-[0.18em] ${type}`}>
        VALIDATE AI
      </span>
    </a>
  );
}
