import { jsx, jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import {
  Phone,
  Mail,
  ArrowRight,
  Play,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  GraduationCap,
  Microscope,
  Hospital,
  Briefcase,
  BookOpen,
  Users,
  FlaskConical,
  Award,
  ShieldCheck,
  Sparkles,
  Building2,
  Calendar,
  ChevronRight,
  Star,
  Menu,
  X,
  Beaker,
  Lightbulb,
  FileText,
  Globe2,
  Quote
} from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import aboutCampus from "@/assets/about-campus.jpg";
import researchLab from "@/assets/research-lab.jpg";
import campusLibrary from "@/assets/campus-library.jpg";
import campusSeminar from "@/assets/campus-seminar.jpg";
import campusClassroom from "@/assets/campus-classroom.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import chairmanImg from "@/assets/chairman.jpg";
import secretaryImg from "@/assets/secretary.jpg";
import life1 from "@/assets/life-1.jpg";
import life2 from "@/assets/life-2.jpg";
import life3 from "@/assets/life-3.jpg";
import life4 from "@/assets/life-4.jpg";
const Route = createFileRoute("/")({
  component: Index
});
function useCounter(target, durationMs = 1600, start = false) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start]);
  return val;
}
function useInView() {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.25 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}
function Counter({ to, suffix = "", prefix = "" }) {
  const { ref, inView } = useInView();
  const v = useCounter(to, 1800, inView);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    prefix,
    v.toLocaleString(),
    suffix
  ] });
}
function Reveal({ children, delay = 0, className = "" }) {
  const { ref, inView } = useInView();
  return /* @__PURE__ */ jsx("div", { ref, className: `reveal ${inView ? "in" : ""} ${className}`, style: { animationDelay: `${delay}ms` }, children });
}
function TopBar() {
  return /* @__PURE__ */ jsx("div", { className: "hidden md:block bg-[var(--navy-deep)] text-white text-[13px]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 h-10 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-[var(--gold)]" }),
        " Admissions Open ",
        /* @__PURE__ */ jsx("span", { className: "text-[var(--gold)] font-semibold", children: "2026" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "h-3 w-px bg-white/20" }),
      /* @__PURE__ */ jsxs("a", { href: "tel:+919876543210", className: "flex items-center gap-1.5 hover:text-[var(--gold)] transition-colors", children: [
        /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5" }),
        " +91 98765 43210"
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "mailto:admissions@vjpharmacy.edu.in", className: "flex items-center gap-1.5 hover:text-[var(--gold)] transition-colors", children: [
        /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5" }),
        " admissions@vjpharmacy.edu.in"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "opacity-80 hover:opacity-100", children: /* @__PURE__ */ jsx(Facebook, { className: "h-3.5 w-3.5" }) }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "opacity-80 hover:opacity-100", children: /* @__PURE__ */ jsx(Instagram, { className: "h-3.5 w-3.5" }) }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "opacity-80 hover:opacity-100", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-3.5 w-3.5" }) }),
      /* @__PURE__ */ jsxs("a", { href: "#admission", className: "ml-2 inline-flex items-center gap-1 bg-[var(--gold)] text-[var(--navy-deep)] px-3 py-1 rounded-full font-button font-semibold text-xs hover:brightness-110 transition", children: [
        "Apply Now ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
      ] })
    ] })
  ] }) });
}
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = ["Home", "About", "Programs", "Infrastructure", "Research", "Placements", "Admissions", "Contact"];
  return /* @__PURE__ */ jsxs("header", { className: `fixed top-0 md:top-10 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_-10px_rgba(10,37,64,0.15)]" : "bg-transparent"}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 h-20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: `h-11 w-11 rounded-xl grid place-items-center font-display font-black text-lg shadow-premium ${scrolled ? "bg-[var(--navy)] text-[var(--gold)]" : "bg-white/15 text-white backdrop-blur-md border border-white/30"}`, children: "VJ" }),
        /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsx("div", { className: `font-display font-bold text-[15px] ${scrolled ? "text-[var(--navy)]" : "text-white"}`, children: "VJ's College of Pharmacy" }),
          /* @__PURE__ */ jsx("div", { className: `text-[11px] tracking-[0.18em] uppercase ${scrolled ? "text-[var(--muted-ink)]" : "text-white/70"}`, children: "Excellence \xB7 Research \xB7 Care" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-1", children: items.map((it) => /* @__PURE__ */ jsxs("a", { href: `#${it.toLowerCase()}`, className: `relative px-3 py-2 text-[13.5px] font-medium transition-colors group ${scrolled ? "text-[var(--ink)] hover:text-[var(--navy)]" : "text-white/90 hover:text-white"}`, children: [
        it,
        /* @__PURE__ */ jsx("span", { className: "absolute left-3 right-3 -bottom-0.5 h-0.5 bg-[var(--gold)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" })
      ] }, it)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("a", { href: "#admission", className: "hidden md:inline-flex font-button font-semibold text-sm px-5 py-2.5 rounded-full bg-[var(--gold)] text-[var(--navy-deep)] hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5", children: "Apply Now" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setOpen(true), className: `lg:hidden p-2 rounded-md ${scrolled ? "text-[var(--navy)]" : "text-white"}`, "aria-label": "Open menu", children: /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${open ? "visible opacity-100" : "invisible opacity-0"}`, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[var(--navy-deep)]", onClick: () => setOpen(false) }),
      /* @__PURE__ */ jsxs("div", { className: `absolute inset-y-0 right-0 w-full max-w-sm bg-[var(--navy)] text-white p-8 transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display font-bold", children: "Menu" }),
          /* @__PURE__ */ jsx("button", { onClick: () => setOpen(false), className: "p-2", children: /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) })
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-1", children: items.map((it, i) => /* @__PURE__ */ jsxs("a", { href: `#${it.toLowerCase()}`, onClick: () => setOpen(false), className: "group flex items-center justify-between py-4 border-b border-white/10 text-lg font-display", style: { transitionDelay: `${i * 40}ms` }, children: [
          /* @__PURE__ */ jsx("span", { className: "group-hover:text-[var(--gold)] transition-colors", children: it }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 opacity-50 group-hover:text-[var(--gold)] group-hover:translate-x-1 transition" })
        ] }, it)) }),
        /* @__PURE__ */ jsxs("a", { href: "#admission", onClick: () => setOpen(false), className: "mt-10 inline-flex w-full justify-center items-center gap-2 bg-[var(--gold)] text-[var(--navy-deep)] font-button font-semibold py-4 rounded-full", children: [
          "Apply Now ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "relative min-h-screen flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("img", { src: heroCampus, alt: "VJ's College of Pharmacy campus", className: "h-full w-full object-cover animate-slow-zoom", width: 1920, height: 1280 }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/85 via-[var(--navy-deep)]/55 to-[var(--navy-deep)]/85" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.18),transparent_55%)]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-16 grid lg:grid-cols-12 gap-10 items-center w-full", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "lg:col-span-7 text-white", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider uppercase", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-pulse" }),
          " PCI Approved \xB7 Estd. 2007"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display font-black mt-6 text-[44px] sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight", children: [
          "Building Future ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Healthcare Leaders" }),
          " Through Excellence"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed", children: "A premier pharmacy institution shaping clinically skilled, research-driven and industry-ready professionals \u2014 backed by 18+ years of academic legacy." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "#admission", className: "group inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--navy-deep)] font-button font-semibold px-7 py-4 rounded-full shadow-gold-glow hover:-translate-y-0.5 transition-all", children: [
            "Apply for 2026 ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "#tour", className: "group inline-flex items-center gap-2 glass text-white font-button font-medium px-7 py-4 rounded-full hover:bg-white/15 transition", children: [
            /* @__PURE__ */ jsx(Play, { className: "h-4 w-4 text-[var(--gold)]" }),
            " Virtual Tour"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/75", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4 text-[var(--gold)]" }),
            " PCI \xB7 AICTE Approved"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Award, { className: "h-4 w-4 text-[var(--gold)]" }),
            " NAAC Accredited"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-[var(--gold)]" }),
            " 4.9 / 5 Student Rating"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { delay: 200, className: "lg:col-span-5", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-8 lg:p-10 text-white shadow-premium", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.2em] uppercase text-[var(--gold)]", children: "By the Numbers" }),
            /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-2xl mt-1", children: "A legacy you can trust" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-full bg-[var(--gold)]/20 grid place-items-center", children: /* @__PURE__ */ jsx(GraduationCap, { className: "h-5 w-5 text-[var(--gold)]" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6", children: [
          { v: 5e3, s: "+", l: "Alumni Network" },
          { v: 95, s: "%", l: "Placement Rate" },
          { v: 20, s: "+", l: "Advanced Labs" },
          { v: 18, s: "+", l: "Years of Legacy" }
        ].map((m) => /* @__PURE__ */ jsxs("div", { className: "border-l-2 border-[var(--gold)]/50 pl-4", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display font-black text-3xl lg:text-4xl text-white", children: /* @__PURE__ */ jsx(Counter, { to: m.v, suffix: m.s }) }),
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-white/65 mt-1", children: m.l })
        ] }, m.l)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "text-white/70", children: "Next intake begins" }),
          /* @__PURE__ */ jsx("span", { className: "font-button font-semibold text-[var(--gold)]", children: "August 2026" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.3em] uppercase animate-bounce", children: "Scroll" })
  ] });
}
function Metrics() {
  const m = [
    { v: 18, s: "+", l: "Years of Excellence" },
    { v: 5e3, s: "+", l: "Alumni Worldwide" },
    { v: 100, s: "+", l: "Expert Faculty" },
    { v: 20, s: "+", l: "Advanced Labs" },
    { v: 95, s: "%", l: "Placement Rate" },
    { v: 100, s: "%", l: "Academic Commitment" }
  ];
  return /* @__PURE__ */ jsx("section", { className: "bg-white py-20 border-b border-[var(--navy)]/5", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8", children: m.map((x) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "font-display font-black text-4xl lg:text-5xl text-[var(--navy)]", children: /* @__PURE__ */ jsx(Counter, { to: x.v, suffix: x.s }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs uppercase tracking-wider text-[var(--muted-ink)] font-medium", children: x.l })
  ] }) }, x.l)) }) }) });
}
function Highlights() {
  const items = [
    { icon: ShieldCheck, t: "PCI Approved", d: "Recognised by Pharmacy Council of India ensuring nationally accepted credentials." },
    { icon: Hospital, t: "Hospital Training", d: "Hands-on clinical exposure through tie-ups with leading multi-specialty hospitals." },
    { icon: Briefcase, t: "Placement Assistance", d: "Dedicated career cell with 95% placement record across top pharma companies." },
    { icon: FlaskConical, t: "Advanced Labs", d: "20+ state-of-the-art laboratories with modern instrumentation and research tools." }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "relative py-20 bg-[var(--surface)] overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,37,64,0.04),transparent_60%)]" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 relative", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: items.map((it, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs("div", { className: "group relative h-full bg-white rounded-2xl p-8 border border-[var(--navy)]/8 hover:border-[var(--gold)]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold-glow", children: [
      /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] grid place-items-center mb-5 group-hover:scale-110 transition-transform duration-500", children: /* @__PURE__ */ jsx(it.icon, { className: "h-6 w-6 text-[var(--gold)]" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-lg text-[var(--navy)]", children: it.t }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-[var(--muted-ink)] leading-relaxed", children: it.d })
    ] }) }, it.t)) }) })
  ] });
}
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-[var(--gold)]/10 rounded-3xl rotate-2" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -right-6 w-40 h-40 bg-[var(--navy)] rounded-2xl hidden lg:block" }),
      /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-2xl shadow-premium", children: /* @__PURE__ */ jsx("img", { src: aboutCampus, alt: "VJ's College campus building", className: "w-full h-[520px] object-cover hover:scale-105 transition-transform duration-[1.5s]", loading: "lazy", width: 1280, height: 960 }) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-8 -left-6 lg:left-8 bg-white rounded-2xl shadow-premium p-5 flex items-center gap-4 max-w-[280px]", children: [
        /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-xl bg-[var(--gold)]/15 grid place-items-center", children: /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-[var(--gold)]" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display font-black text-2xl text-[var(--navy)]", children: "18+ Years" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-[var(--muted-ink)]", children: "of academic excellence" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Reveal, { delay: 150, children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold", children: "About the Institution" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight", children: [
        "A pharmacy institution built on ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "care, research" }),
        " and rigour."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-6 text-[var(--muted-ink)] leading-relaxed", children: [
        "Since 2007, VJ's College of Pharmacy has nurtured generations of pharmacists, clinical researchers and healthcare innovators. Our curriculum blends ",
        /* @__PURE__ */ jsx("strong", { className: "text-[var(--navy)]", children: "deep scientific foundations" }),
        ", ",
        /* @__PURE__ */ jsx("strong", { className: "text-[var(--navy)]", children: "industry exposure" }),
        " and ",
        /* @__PURE__ */ jsx("strong", { className: "text-[var(--navy)]", children: "hospital-based clinical training" }),
        " \u2014 preparing graduates who lead the future of patient care."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-[var(--muted-ink)] leading-relaxed", children: "From advanced pharmacology labs to research collaborations with hospitals and pharma majors, every part of campus life is engineered to build practitioners the industry trusts." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-2 gap-5 max-w-md", children: [
        { i: BookOpen, t: "PCI-Aligned Curriculum" },
        { i: Users, t: "100+ Expert Faculty" },
        { i: Globe2, t: "Industry Collaborations" },
        { i: Microscope, t: "Research-Led Learning" }
      ].map((x) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "h-9 w-9 rounded-lg bg-[var(--navy)]/5 grid place-items-center", children: /* @__PURE__ */ jsx(x.i, { className: "h-4 w-4 text-[var(--navy)]" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[var(--ink)]", children: x.t })
      ] }, x.t)) }),
      /* @__PURE__ */ jsxs("a", { href: "#", className: "mt-10 inline-flex items-center gap-2 font-button font-semibold text-[var(--navy)] border-b-2 border-[var(--gold)] pb-1 hover:gap-3 transition-all", children: [
        "Read Our Full Story ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] })
  ] }) });
}
function Achievements() {
  const a = [
    { v: 100, s: "%", l: "Pass Results" },
    { v: 45, s: "+", l: "GPAT Rank Holders" },
    { v: 28, s: "+", l: "NIPER Qualified" },
    { v: 120, s: "+", l: "Research Publications" },
    { v: 35, s: "+", l: "Awards & Honours" },
    { v: 18, s: "+", l: "Years of Excellence" }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "relative py-28 bg-[var(--navy)] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.12),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(212,175,55,0.08),transparent_45%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold", children: "Our Achievements" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display font-black text-4xl lg:text-5xl mt-3", children: [
          "A track record of ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "measurable excellence" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-white/70 leading-relaxed", children: "Numbers that reflect the depth of our academic discipline, mentorship and student success across two decades." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden", children: a.map((x) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "bg-[var(--navy)] p-10 hover:bg-[var(--navy-deep)] transition-colors group", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display font-black text-5xl lg:text-6xl text-gradient-gold", children: /* @__PURE__ */ jsx(Counter, { to: x.v, suffix: x.s }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 text-sm uppercase tracking-wider text-white/70 group-hover:text-[var(--gold)] transition", children: x.l })
      ] }) }, x.l)) })
    ] })
  ] });
}
function Programs() {
  const progs = [
    { code: "B.Pharm", name: "Bachelor of Pharmacy", dur: "4 Years", elig: "10+2 with PCM/B", seats: 100 },
    { code: "Pharm.D", name: "Doctor of Pharmacy", dur: "6 Years", elig: "10+2 with PCB/M", seats: 30 },
    { code: "M.Pharm", name: "Master of Pharmacy", dur: "2 Years", elig: "B.Pharm Graduate", seats: 24 },
    { code: "D.Pharm", name: "Diploma in Pharmacy", dur: "2 Years", elig: "10+2 with Science", seats: 60 }
  ];
  return /* @__PURE__ */ jsx("section", { id: "programs", className: "py-28 bg-[var(--surface)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold", children: "Programs Offered" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight max-w-2xl", children: "Pathways designed for every stage of your pharmacy career." })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "#", className: "font-button font-semibold text-[var(--navy)] inline-flex items-center gap-2 group", children: [
        "View All Programs ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: progs.map((p, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs("div", { className: "group relative bg-white rounded-2xl p-7 border border-[var(--navy)]/8 hover:border-[var(--navy)] transition-all duration-500 hover:-translate-y-2 hover:shadow-premium h-full flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 px-3 py-1 m-4 rounded-full bg-[var(--gold)]/15 text-[var(--navy)] text-[10px] font-button font-semibold tracking-wider", children: p.dur.toUpperCase() }),
      /* @__PURE__ */ jsx("div", { className: "font-display font-black text-3xl text-[var(--navy)]", children: p.code }),
      /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-[var(--muted-ink)]", children: p.name }),
      /* @__PURE__ */ jsx("div", { className: "my-6 h-px bg-gradient-to-r from-[var(--gold)]/40 to-transparent" }),
      /* @__PURE__ */ jsxs("dl", { className: "space-y-3 text-sm flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-[var(--muted-ink)]", children: "Duration" }),
          /* @__PURE__ */ jsx("dd", { className: "font-medium text-[var(--ink)]", children: p.dur })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-[var(--muted-ink)]", children: "Eligibility" }),
          /* @__PURE__ */ jsx("dd", { className: "font-medium text-[var(--ink)] text-right", children: p.elig })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx("dt", { className: "text-[var(--muted-ink)]", children: "Seats" }),
          /* @__PURE__ */ jsx("dd", { className: "font-medium text-[var(--ink)]", children: p.seats })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "#", className: "mt-7 inline-flex items-center justify-between text-sm font-button font-semibold text-[var(--navy)] group/btn", children: [
        /* @__PURE__ */ jsx("span", { children: "Learn More" }),
        /* @__PURE__ */ jsx("span", { className: "h-8 w-8 rounded-full bg-[var(--navy)] text-white grid place-items-center group-hover/btn:bg-[var(--gold)] group-hover/btn:text-[var(--navy)] transition", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }) })
      ] })
    ] }) }, p.code)) })
  ] }) });
}
function WhyChoose() {
  const f = [
    { i: Users, t: "Experienced Faculty", d: "100+ doctoral and industry-trained professors mentoring every student." },
    { i: Lightbulb, t: "Digital Learning", d: "Smart classrooms, LMS, interactive simulations and curated digital libraries." },
    { i: Microscope, t: "Research-Based Education", d: "Live research projects integrated into the undergraduate curriculum." },
    { i: Building2, t: "Industry Exposure", d: "Internships, industrial visits and live projects with leading pharma companies." },
    { i: Beaker, t: "Advanced Labs", d: "20+ specialised labs including pharmaceutics, analysis and clinical pharmacy." },
    { i: Briefcase, t: "Placement Assistance", d: "Career cell with year-round drives and personalised coaching." }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold", children: "Why Choose VJ's" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight", children: [
        "An institution built around ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "your growth" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: f.map((x, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsx("div", { className: "group relative h-full p-8 rounded-2xl glass-light hover:bg-white hover:shadow-premium hover:-translate-y-1 transition-all duration-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-[var(--navy)] grid place-items-center shrink-0 group-hover:bg-[var(--gold)] transition-colors", children: /* @__PURE__ */ jsx(x.i, { className: "h-5 w-5 text-[var(--gold)] group-hover:text-[var(--navy)] transition-colors" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-lg text-[var(--navy)]", children: x.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm text-[var(--muted-ink)] leading-relaxed", children: x.d })
      ] })
    ] }) }) }, x.t)) })
  ] }) });
}
function Research() {
  const r = [
    { i: FileText, v: 120, s: "+", l: "Publications" },
    { i: ShieldCheck, v: 12, s: "", l: "Patents Filed" },
    { i: Globe2, v: 18, s: "+", l: "Collaborations" },
    { i: Award, v: 60, s: "+", l: "Presentations" },
    { i: Lightbulb, v: 25, s: "+", l: "Innovation Projects" }
  ];
  return /* @__PURE__ */ jsx("section", { id: "research", className: "py-28 bg-[var(--surface)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl shadow-premium", children: /* @__PURE__ */ jsx("img", { src: researchLab, alt: "Research laboratory", className: "w-full h-[520px] object-cover hover:scale-105 transition-transform duration-[1.5s]", loading: "lazy", width: 1280, height: 960 }) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute top-6 right-6 glass-light rounded-xl px-5 py-3 shadow-premium", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-widest uppercase text-[var(--muted-ink)]", children: "Active Projects" }),
        /* @__PURE__ */ jsx("div", { className: "font-display font-black text-3xl text-[var(--navy)]", children: "25+" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Reveal, { delay: 150, children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold", children: "Research & Innovation" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight", children: [
        "Where curiosity becomes ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "discovery" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-[var(--muted-ink)] leading-relaxed", children: "Our research culture spans formulation, pharmacology, clinical trials and natural product chemistry \u2014 supported by industry partnerships and peer-reviewed publications." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-4", children: r.map((x) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 rounded-xl bg-white border border-[var(--navy)]/8 hover:border-[var(--gold)] hover:shadow-premium transition group", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-lg bg-[var(--navy)]/5 grid place-items-center group-hover:bg-[var(--gold)]/15 transition", children: /* @__PURE__ */ jsx(x.i, { className: "h-5 w-5 text-[var(--navy)]" }) }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-[var(--ink)]", children: x.l })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "font-display font-black text-2xl text-[var(--navy)]", children: /* @__PURE__ */ jsx(Counter, { to: x.v, suffix: x.s }) })
      ] }, x.l)) })
    ] })
  ] }) });
}
function Campus() {
  const [idx, setIdx] = React.useState(0);
  const slides = [
    { img: researchLab, cat: "Labs", t: "Advanced Research Laboratories" },
    { img: campusLibrary, cat: "Library", t: "Modern Digital Library" },
    { img: campusSeminar, cat: "Seminar Hall", t: "Premium Seminar Auditorium" },
    { img: campusClassroom, cat: "Classrooms", t: "Smart Digital Classrooms" },
    { img: aboutCampus, cat: "Green Campus", t: "Spacious Green Campus" },
    { img: heroCampus, cat: "Auditorium", t: "Grand Convocation Hall" }
  ];
  React.useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5e3);
    return () => clearInterval(id);
  }, [slides.length]);
  return /* @__PURE__ */ jsx("section", { id: "infrastructure", className: "py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold", children: "Campus Experience" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 max-w-2xl leading-tight", children: [
          "A campus engineered for ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "modern learning" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: slides.map((_, i) => /* @__PURE__ */ jsx("button", { onClick: () => setIdx(i), className: `h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-[var(--navy)]" : "w-6 bg-[var(--navy)]/20 hover:bg-[var(--navy)]/40"}`, "aria-label": `slide ${i + 1}` }, i)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-3xl shadow-premium aspect-[16/8]", children: slides.map((s, i) => /* @__PURE__ */ jsxs("div", { className: `absolute inset-0 transition-all duration-1000 ${i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"}`, children: [
      /* @__PURE__ */ jsx("img", { src: s.img, alt: s.t, className: "h-full w-full object-cover", loading: "lazy" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/90 via-transparent to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-2", children: s.cat }),
        /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-2xl lg:text-4xl", children: s.t })
      ] })
    ] }, i)) })
  ] }) });
}
function Recruiters() {
  const logos = [
    "Apollo",
    "Dr. Reddy's",
    "Cipla",
    "Sun Pharma",
    "Biocon",
    "Aurobindo",
    "Pfizer",
    "Glenmark",
    "Mankind",
    "Lupin",
    "Zydus",
    "Torrent",
    "Hetero",
    "Wockhardt",
    "Alkem",
    "Abbott"
  ];
  return /* @__PURE__ */ jsxs("section", { className: "py-20 bg-[var(--surface)] overflow-hidden border-y border-[var(--navy)]/8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 mb-10 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold", children: "Recruiters & Partners" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display font-black text-3xl lg:text-4xl text-[var(--navy)] mt-3", children: "Trusted by the industry's most respected names" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--surface)] to-transparent z-10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--surface)] to-transparent z-10" }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-12 animate-marquee w-max", children: [...logos, ...logos].map((l, i) => /* @__PURE__ */ jsx("div", { className: "shrink-0 h-20 px-10 grid place-items-center font-display font-black text-2xl text-[var(--navy)]/30 hover:text-[var(--navy)] transition-colors duration-300 grayscale hover:grayscale-0", children: l }, i)) })
    ] })
  ] });
}
function Placements() {
  const cards = [
    { i: Hospital, t: "Hospital Training", d: "Live clinical rotations across multi-specialty hospitals." },
    { i: Briefcase, t: "Industry Internships", d: "Structured internships with leading pharma companies." },
    { i: Users, t: "Career Guidance", d: "1-on-1 mentorship, resume building and mock interviews." },
    { i: GraduationCap, t: "Career Programs", d: "GPAT, NIPER and competitive exam coaching included." }
  ];
  return /* @__PURE__ */ jsx("section", { id: "placements", className: "py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold", children: "Placements & Career Development" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight", children: [
        "Building ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Career-Ready" }),
        " Pharmacy Professionals"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-[var(--muted-ink)]", children: "A focused, hands-on placement ecosystem that has consistently delivered industry-leading outcomes." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: cards.map((c, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs("div", { className: "group p-7 rounded-2xl bg-[var(--surface)] hover:bg-[var(--navy)] hover:text-white transition-all duration-500 hover:-translate-y-1 h-full", children: [
      /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-white grid place-items-center mb-5 group-hover:bg-[var(--gold)] transition", children: /* @__PURE__ */ jsx(c.i, { className: "h-5 w-5 text-[var(--navy)]" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-lg", children: c.t }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-[var(--muted-ink)] group-hover:text-white/75 transition", children: c.d })
    ] }) }, c.t)) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--navy)]/10 rounded-2xl overflow-hidden border border-[var(--navy)]/10", children: [
      { v: 95, s: "%", l: "Placement Rate" },
      { v: 12, s: "LPA", l: "Highest Package" },
      { v: 4, s: ".8", l: "Average Package" },
      { v: 150, s: "+", l: "Recruiting Partners" }
    ].map((x) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display font-black text-4xl text-[var(--navy)]", children: /* @__PURE__ */ jsx(Counter, { to: x.v, suffix: x.s }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs uppercase tracking-wider text-[var(--muted-ink)]", children: x.l })
    ] }, x.l)) })
  ] }) });
}
function StudentLife() {
  const items = [
    { img: life1, t: "Annual Cultural Fest", cat: "Cultural", h: "h-[420px]" },
    { img: life3, t: "Inter-College Sports", cat: "Sports", h: "h-[300px]" },
    { img: life2, t: "Industrial Visits", cat: "Industry", h: "h-[300px]" },
    { img: life4, t: "Expert Workshops", cat: "Workshops", h: "h-[260px]" },
    { img: researchLab, t: "Community Outreach", cat: "Service", h: "h-[260px]" },
    { img: campusClassroom, t: "Annual Tech Fest", cat: "Fest", h: "h-[420px]" }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-28 bg-[var(--surface)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold", children: "Student Life" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight", children: [
        "More than a college \u2014 ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "a community" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5", children: items.map((it, i) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: `group relative overflow-hidden rounded-2xl shadow-premium break-inside-avoid ${it.h}`, children: [
      /* @__PURE__ */ jsx("img", { src: it.img, alt: it.t, className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-700", loading: "lazy" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/90 via-[var(--navy-deep)]/20 to-transparent opacity-90 group-hover:opacity-100 transition" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6 text-white", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] mb-1", children: it.cat }),
        /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-xl", children: it.t })
      ] })
    ] }) }, i)) })
  ] }) });
}
function Leadership() {
  const leaders = [
    { img: chairmanImg, name: "Dr. V. Janardhan Reddy", role: "Chairman", quote: "Education is the most powerful instrument we can place in the hands of tomorrow's healthcare leaders." },
    { img: secretaryImg, name: "Sri V. Karthik Reddy", role: "Secretary & Correspondent", quote: "Our promise is simple \u2014 every student receives the mentorship, resources and opportunity to lead." }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold", children: "Leadership Messages" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display font-black text-4xl lg:text-5xl text-[var(--navy)] mt-3 leading-tight", children: "Guided by visionary leadership." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: leaders.map((l, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxs("div", { className: "group bg-[var(--surface)] rounded-3xl p-8 lg:p-10 hover:shadow-premium transition-all duration-500 flex flex-col sm:flex-row gap-7 items-start h-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative shrink-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl bg-[var(--gold)] translate-x-2 translate-y-2" }),
        /* @__PURE__ */ jsx("img", { src: l.img, alt: l.name, className: "relative h-40 w-32 object-cover rounded-2xl", loading: "lazy" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx(Quote, { className: "h-7 w-7 text-[var(--gold)] mb-3" }),
        /* @__PURE__ */ jsxs("p", { className: "text-[var(--ink)] leading-relaxed italic", children: [
          '"',
          l.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-[var(--navy)]", children: l.name }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-[var(--muted-ink)]", children: l.role })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#", className: "mt-5 inline-flex items-center gap-2 text-sm font-button font-semibold text-[var(--navy)] group/btn", children: [
          "View Message ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 group-hover/btn:translate-x-1 transition" })
        ] })
      ] })
    ] }) }, l.name)) })
  ] }) });
}
function Testimonials() {
  const t = [
    { img: student1, name: "Priya Sharma", co: "Dr. Reddy's Labs", role: "Pharm.D, 2023", text: "From hospital postings to research mentorship, every part of VJ's prepared me for real clinical practice. I walked into my role with confidence." },
    { img: student2, name: "Arjun Reddy", co: "Apollo Hospitals", role: "B.Pharm, 2022", text: "The faculty go far beyond textbooks. Personalised mentorship and industry connect made the difference between learning and actually becoming a pharmacist." },
    { img: student1, name: "Meera Iyer", co: "Cipla", role: "M.Pharm, 2024", text: "The labs and research culture here are exceptional. I co-authored two publications before graduation \u2014 opportunities most colleges can't offer." }
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % t.length), 6e3);
    return () => clearInterval(id);
  }, [t.length]);
  return /* @__PURE__ */ jsxs("section", { className: "relative py-28 bg-[var(--navy)] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_60%)]" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold", children: "Student Success" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display font-black text-4xl lg:text-5xl mt-3", children: [
          "Stories that ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "define our promise" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative h-[340px]", children: t.map((s, k) => /* @__PURE__ */ jsx("div", { className: `absolute inset-0 transition-all duration-700 ${k === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`, children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-8 lg:p-12 h-full flex flex-col lg:flex-row gap-8 items-center", children: [
        /* @__PURE__ */ jsx("img", { src: s.img, alt: s.name, className: "h-28 w-28 lg:h-36 lg:w-36 rounded-2xl object-cover shadow-premium", loading: "lazy" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center lg:text-left", children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center lg:justify-start gap-1 mb-4", children: Array.from({ length: 5 }).map((_, n) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" }, n)) }),
          /* @__PURE__ */ jsxs("p", { className: "text-lg lg:text-xl leading-relaxed text-white/90 italic", children: [
            '"',
            s.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-lg", children: s.name }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-[var(--gold)]", children: [
              s.role,
              " \xB7 ",
              s.co
            ] })
          ] })
        ] })
      ] }) }, k)) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-8", children: t.map((_, k) => /* @__PURE__ */ jsx("button", { onClick: () => setI(k), className: `h-2 rounded-full transition-all ${k === i ? "w-10 bg-[var(--gold)]" : "w-2 bg-white/30"}`, "aria-label": `testimonial ${k + 1}` }, k)) })
    ] })
  ] });
}
function VirtualTour() {
  return /* @__PURE__ */ jsx("section", { id: "tour", className: "relative py-28 bg-white", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl shadow-premium aspect-[16/9] group cursor-pointer", children: [
    /* @__PURE__ */ jsx("img", { src: heroCampus, alt: "Virtual campus tour", className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]", loading: "lazy" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[var(--navy-deep)]/55 group-hover:bg-[var(--navy-deep)]/40 transition" }),
    /* @__PURE__ */ jsxs("div", { className: "relative h-full flex flex-col items-center justify-center text-white text-center p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-[var(--gold)] font-button font-semibold mb-3", children: "Virtual Campus Tour" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display font-black text-4xl lg:text-6xl max-w-3xl leading-[1.05]", children: [
        "Explore our campus ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "virtually" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs("button", { className: "mt-8 group/btn relative h-20 w-20 rounded-full bg-[var(--gold)] grid place-items-center hover:scale-110 transition-transform shadow-gold-glow", children: [
        /* @__PURE__ */ jsx(Play, { className: "h-7 w-7 text-[var(--navy-deep)] fill-[var(--navy-deep)] ml-1" }),
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-[var(--gold)] animate-ping opacity-40" })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "#", className: "mt-6 inline-flex items-center gap-2 text-sm font-button font-semibold", children: [
        "Watch Tour ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] })
  ] }) }) });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxs("section", { id: "admission", className: "relative py-28 bg-[var(--navy-deep)] text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.18),transparent_50%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[var(--gold)]/10 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--gold)]/10 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-6 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider uppercase mb-6", children: [
        /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5 text-[var(--gold)]" }),
        " Limited Seats \xB7 2026 Intake"
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display font-black text-4xl lg:text-6xl leading-[1.05]", children: [
        "Start Your ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Pharmacy Career" }),
        " Today."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-white/75 max-w-2xl mx-auto", children: "Admissions for the 2026 academic year are now open. Submit your application before seats fill up." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "#", className: "group inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--navy-deep)] font-button font-semibold px-8 py-4 rounded-full shadow-gold-glow hover:-translate-y-0.5 transition-all", children: [
          "Apply Now ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 glass text-white font-button font-medium px-8 py-4 rounded-full hover:bg-white/15 transition", children: [
          /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-[var(--gold)]" }),
          " Contact Admissions"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 text-sm text-white/60", children: [
        "Application deadline: ",
        /* @__PURE__ */ jsx("span", { className: "text-[var(--gold)] font-semibold", children: "31st July 2026" })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { id: "contact", className: "bg-[var(--navy)] text-white pt-20 pb-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-xl grid place-items-center font-display font-black bg-[var(--gold)] text-[var(--navy-deep)]", children: "VJ" }),
          /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-lg", children: "VJ's College of Pharmacy" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-white/70 text-sm leading-relaxed", children: "Building future healthcare leaders through excellence in pharmacy education, research and innovation since 2007." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex gap-3", children: [Facebook, Instagram, Linkedin, Youtube].map((I, i) => /* @__PURE__ */ jsx("a", { href: "#", className: "h-9 w-9 grid place-items-center rounded-full border border-white/15 hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] hover:border-[var(--gold)] transition", children: /* @__PURE__ */ jsx(I, { className: "h-4 w-4" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-sm tracking-wider uppercase text-[var(--gold)] mb-5", children: "Quick Links" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-sm text-white/75", children: ["About Us", "Admissions", "Faculty", "Research", "Campus Life", "News & Events"].map((x) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#", className: "hover:text-[var(--gold)] transition flex items-center gap-2 group", children: [
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 opacity-0 group-hover:opacity-100 transition" }),
          x
        ] }) }, x)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-sm tracking-wider uppercase text-[var(--gold)] mb-5", children: "Programs" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-sm text-white/75", children: ["B.Pharm", "Pharm.D", "M.Pharm", "D.Pharm", "Ph.D Research"].map((x) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#", className: "hover:text-[var(--gold)] transition flex items-center gap-2 group", children: [
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 opacity-0 group-hover:opacity-100 transition" }),
          x
        ] }) }, x)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-sm tracking-wider uppercase text-[var(--gold)] mb-5", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-sm text-white/75", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-[var(--gold)] mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "VJ's College of Pharmacy, Diwancheruvu, Rajamahendravaram, Andhra Pradesh 533103" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-[var(--gold)]" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+919876543210", className: "hover:text-[var(--gold)]", children: "+91 98765 43210" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-[var(--gold)]" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:admissions@vjpharmacy.edu.in", className: "hover:text-[var(--gold)]", children: "admissions@vjpharmacy.edu.in" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-white/60 mb-2", children: "Newsletter" }),
          /* @__PURE__ */ jsxs("form", { className: "flex gap-2", onSubmit: (e) => e.preventDefault(), children: [
            /* @__PURE__ */ jsx("input", { type: "email", placeholder: "Your email", className: "flex-1 px-4 py-2.5 bg-white/5 border border-white/15 rounded-full text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--gold)]" }),
            /* @__PURE__ */ jsx("button", { className: "px-4 py-2.5 rounded-full bg-[var(--gold)] text-[var(--navy-deep)] font-button font-semibold text-sm hover:brightness-110", children: "Join" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-white/55", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " VJ's College of Pharmacy. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-[var(--gold)]", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-[var(--gold)]", children: "Terms of Use" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-[var(--gold)]", children: "Disclosures" })
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-white", children: [
    /* @__PURE__ */ jsx(TopBar, {}),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Metrics, {}),
    /* @__PURE__ */ jsx(Highlights, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Achievements, {}),
    /* @__PURE__ */ jsx(Programs, {}),
    /* @__PURE__ */ jsx(WhyChoose, {}),
    /* @__PURE__ */ jsx(Research, {}),
    /* @__PURE__ */ jsx(Campus, {}),
    /* @__PURE__ */ jsx(Recruiters, {}),
    /* @__PURE__ */ jsx(Placements, {}),
    /* @__PURE__ */ jsx(StudentLife, {}),
    /* @__PURE__ */ jsx(Leadership, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(VirtualTour, {}),
    /* @__PURE__ */ jsx(FinalCTA, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Route
};
