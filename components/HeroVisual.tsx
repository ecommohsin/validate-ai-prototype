import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[540px] sm:h-[420px] lg:h-[480px]">
      <div className="glow-orb left-[18%] top-[18%] h-40 w-40 bg-[#7a5cff]/50" />
      <div className="glow-orb bottom-[8%] right-[12%] h-52 w-52 bg-[#4d6bff]/40" />
      <Image
        src="/hero-ai.jpg"
        alt="Abstract neural network of connected glass nodes"
        fill
        priority
        className="object-contain mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,black_48%,transparent_76%)]"
        sizes="(max-width: 1024px) 90vw, 540px"
      />

      <div className="glass absolute right-0 top-6 z-20 hidden w-[230px] rounded-3xl p-4 sm:block">
        <p className="text-sm font-semibold text-white">Validate AI CIC</p>
        <p className="mt-0.5 text-xs text-white/60">
          Independent platform · invites collaboration
        </p>
      </div>

      <div className="glass absolute bottom-16 right-4 z-20 hidden rounded-2xl px-3 py-2.5 sm:block">
        <p className="text-sm font-semibold text-white">AI Assurance Forum</p>
        <p className="text-xs text-white/55">Imperial College · Apr 2026</p>
      </div>
    </div>
  );
}
