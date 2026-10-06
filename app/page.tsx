import Image from "next/image";
import { HeroVisual } from "@/components/HeroVisual";
import { Logo } from "@/components/Logo";

const whatWeDo = [
  {
    kicker: "01",
    title: "Align",
    text: "Stay close to the wider UK AI assurance agenda, connecting policy, professionalisation and delivery.",
  },
  {
    kicker: "02",
    title: "Convene",
    text: "A trusted, independent space for government, professional bodies, academia, industry and practitioners.",
  },
  {
    kicker: "03",
    title: "Deliver",
    text: "Turn dialogue into practical approaches through four Forum workstreams and shared evidence.",
  },
  {
    kicker: "04",
    title: "Grow",
    text: "Widen participation so assurance better serves organisations, individuals and society.",
  },
];

const routes = [
  {
    id: "assurance",
    title: "AI Assurance",
    text: "Practical lifecycle assurance connecting technical quality, ethics, legal requirements, governance, deployment and monitoring.",
    image: "/card-assurance.jpg",
    alt: "Translucent glass shield in dark blue light",
  },
  {
    id: "risk",
    title: "AI Risk Perspectives",
    text: "A measured 2026 view of AI risk, using the Beyond the Mirror lens and four connected categories of risk.",
    image: "/card-risk.jpg",
    alt: "Dark mirrored surface reflecting a faint blue horizon",
  },
  {
    id: "impact",
    title: "Our Work & Impact",
    text: "Cross-sector convening, professionalisation and international collaboration across the UK, Europe and Asia.",
    image: "/card-impact.jpg",
    alt: "People collaborating around a table in low blue light",
  },
];

const workstreams = [
  "Professionalisation and Certification",
  "AI Assurance Service Design",
  "Governance and Accountability",
  "Case Studies and Risk Management",
];

export default function HomePage() {
  return (
    <div className="space-y-3 sm:space-y-4" id="top">
      <Hero />
      <WhatWeDo />
      <Explore />
      <Forum />
      <GetInvolved />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="panel relative overflow-hidden rounded-[32px] scroll-mt-28 bg-[linear-gradient(180deg,#140d38_0%,#0c0830_55%,#160b44_100%)] px-6 pb-8 pt-8 sm:rounded-[40px] sm:px-10 sm:pb-10 sm:pt-10 lg:px-14 lg:pt-12">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#5a32ff]/25 to-transparent" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0 max-w-xl">
          <p className="mb-5 inline-flex rounded-full bg-white/8 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white/70">
            INDEPENDENT CIC
          </p>
          <h1 className="font-display text-[3.4rem] text-white sm:text-7xl lg:text-[5.6rem]">
            Your next
            <br />
            trusted
            <br />
            partnership
          </h1>
          <p className="mt-6 max-w-md text-pretty text-base leading-7 text-white/70 sm:text-lg">
            Validate AI convenes government, professional bodies, academia and
            industry to build a practical, trusted AI assurance ecosystem.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-involved" className="btn-primary">
              Get In Touch
            </a>
            <a
              href="#forum"
              className="rounded-full px-5 py-3 text-sm font-semibold text-white/80 hover:text-white"
            >
              View the Forum
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
      <p className="relative mt-4 text-center text-xs tracking-[0.18em] text-white/40 sm:mt-2 lg:absolute lg:bottom-8 lg:right-10 lg:mt-0">
        ↓ Scroll to discover
      </p>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="scroll-mt-28 rounded-[32px] bg-mist px-6 py-10 text-ink sm:rounded-[40px] sm:px-10 sm:py-14 lg:px-14"
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-accent">
            WHAT WE DO
          </p>
          <h2 className="mt-3 max-w-sm font-display text-5xl text-ink sm:text-6xl">
            Design for
            <br />
            trusted AI
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-7 text-muted">
            We are a neutral convening platform. We do not represent a single
            profession or commercial interest — we bring people together around
            a common societal purpose.
          </p>
          <a href="#get-involved" className="btn-light mt-7">
            <span className="text-accent">⚡</span> Contact Us
          </a>
        </div>
        <div>
          <p className="mb-6 max-w-xl text-[15px] leading-7 text-muted">
            Responsible AI, assurance and trustworthy adoption — progressed
            through independent, cross-sector collaboration.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {whatWeDo.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] bg-white p-6 shadow-[0_12px_40px_rgba(18,20,42,0.05)]"
              >
                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted">
                  {item.kicker}
                </p>
                <h3 className="mt-2 font-display text-5xl text-accent">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Explore() {
  return (
    <section id="explore" className="grid scroll-mt-28 gap-3 sm:gap-4 lg:grid-cols-3">
      {routes.map((item, index) => (
        <article
          key={item.id}
          className="feature-card relative min-h-[300px] overflow-hidden rounded-[32px] sm:min-h-[400px] sm:rounded-[36px]"
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0824] via-[#0b0824]/55 to-black/10" />
          <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/55">
              0{index + 1}
            </p>
            <div>
              <h3 className="font-display text-4xl text-white sm:text-[2.7rem]">
                {item.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
                {item.text}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function Forum() {
  return (
    <section
      id="forum"
      className="scroll-mt-28 overflow-hidden rounded-[32px] bg-white px-6 py-10 text-ink sm:rounded-[40px] sm:px-10 sm:py-14 lg:px-14"
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <div className="relative mb-8 h-24">
            <div className="absolute left-0 top-0 flex items-center gap-3 rounded-2xl bg-[#17141f] px-3 py-2 text-white shadow-[0_16px_40px_rgba(18,20,42,0.18)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[11px] font-bold text-ink">
                IC
              </span>
              <div>
                <p className="text-xs font-bold">Imperial College</p>
                <p className="text-[11px] text-white/60">Host · 30 Apr 2026</p>
              </div>
            </div>
            <div className="absolute left-28 top-10 flex items-center gap-3 rounded-2xl bg-white px-3 py-2 text-ink shadow-[0_16px_40px_rgba(18,20,42,0.12)] ring-1 ring-black/5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-[11px] font-bold text-white">
                30+
              </span>
              <div>
                <p className="text-xs font-bold">Leaders & practitioners</p>
                <p className="text-[11px] text-muted">Founding community</p>
              </div>
            </div>
          </div>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-[5.4rem]">
            We turn{" "}
            <span className="text-accent">dialogue</span>
            <br />
            into delivery
          </h2>
        </div>
        <div>
          <p className="text-[15px] leading-7 text-muted">
            On 30 April 2026, Validate AI CIC, Imperial College London, the
            Office for Statistics Regulation and ICAEW brought together more
            than 30 leaders for the AI Assurance Service Design Forum.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#get-involved" className="btn-primary">
              Join the Forum
            </a>
            <a href="#explore" className="btn-ghost">
              Explore the work
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {workstreams.map((item) => (
          <article
            key={item}
            className="rounded-2xl bg-lavender px-5 py-5 text-sm font-semibold leading-6 text-ink"
          >
            {item}
          </article>
        ))}
      </div>
    </section>
  );
}

function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="panel relative scroll-mt-28 overflow-hidden rounded-[32px] bg-[linear-gradient(160deg,#120b36_0%,#0b0828_48%,#1a0a4a_100%)] px-6 py-12 sm:rounded-[40px] sm:px-10 sm:py-16 lg:px-14"
    >
      <div className="glow-orb -left-10 top-0 h-56 w-56 bg-[#4d6bff]/40" />
      <div className="glow-orb bottom-0 right-10 h-64 w-64 bg-[#7a4dff]/35" />
      <div className="relative max-w-3xl">
        <h2 className="font-display text-5xl text-white sm:text-7xl lg:text-[5.2rem]">
          Let’s build something
          <br />
          trusted together
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
          We welcome organisations and individuals involved in developing,
          delivering, regulating, procuring, using or assuring AI systems.
        </p>
        <a href="mailto:contact@validateai.org" className="btn-primary mt-8">
          Start Collaboration
        </a>
        <p className="mt-4 text-sm text-white/60 lg:hidden">
          contact@validateai.org
        </p>
      </div>
      <div className="glass absolute bottom-8 right-8 hidden max-w-[240px] rounded-3xl p-4 lg:block">
        <p className="text-xs font-semibold tracking-[0.16em] text-white/50">
          VALIDATE AI
        </p>
        <p className="mt-2 text-sm font-semibold text-white">
          contact@validateai.org
        </p>
        <p className="mt-1 text-xs text-white/55">Independent CIC · online</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col gap-4 rounded-[32px] bg-[#07091c]/80 px-6 py-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:rounded-[40px] sm:px-10">
      <Logo inverted />
      <p>Independent Community Interest Company.</p>
      <a href="mailto:contact@validateai.org" className="hover:text-white">
        contact@validateai.org
      </a>
      <p>© 2026 Validate AI</p>
    </footer>
  );
}
