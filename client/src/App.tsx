import { useEffect, useRef, useState } from "react";
import { Link, Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ArrowRight, ArrowUpRight, Menu, Phone, X } from "lucide-react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { listing } from "./data/listing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Visit from "./pages/Visit";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
  { href: "/contact", label: "Contact Us" },
];
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" />
        <path d="M14 29h20M17 29V19h14v10M20 19c0-3 2-4 2-7m4 7c0-3 2-4 2-7" />
        <path d="M19 24h10" />
      </svg>
    </span>
  );
}

function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [location]);

  return (
    <header className="site-header" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="header-inner">
        <Link href="/" className="brand-lockup" aria-label="Yadav G Ka Dhaba home">
          <BrandMark />
          <span className="brand-words"><strong>Yadav G Ka Dhaba</strong><small>Sorkha · Noida</small></span>
        </Link>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav id="primary-navigation" className={`main-navigation${open ? " is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${location === item.href ? " is-current" : ""}`}
              aria-current={location === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="header-call" href="/contact" aria-label="Go to Contact Us">
            <Phone size={15} aria-hidden="true" /> <span>Call Us</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <BrandMark />
          <div><strong>{listing.name}</strong><span>{listing.category} · Sorkha, Noida</span></div>
        </div>
        <p className="footer-note">Find us in Sorkha, Noida.</p>
        <a className="footer-direction" href={listing.directionsUrl} target="_blank" rel="noreferrer noopener">
          Get directions <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {listing.name}</span>
        <nav aria-label="Footer navigation">
          <Link href="/about">About</Link><Link href="/visit">Visit</Link><Link href="/contact">Contact Us</Link>
        </nav>
        <a href={listing.mapsUrl} target="_blank" rel="noreferrer noopener">Google Maps <ArrowUpRight size={13} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}

function NotFound() {
  return (
    <main id="main-content" className="simple-page not-found-page">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>That page took a wrong turn.</h1>
      <p>Head back to the home page or open the Maps listing.</p>
      <div className="action-row"><Link className="button button-primary" href="/">Go home <ArrowRight size={16} /></Link><a className="button button-secondary" href={listing.mapsUrl} target="_blank" rel="noreferrer noopener">Open Maps <ArrowUpRight size={16} /></a></div>
    </main>
  );
}

function MotionAndScroll() {
  const [location] = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const lenis = new Lenis({ duration: 1.08, smoothWheel: true, syncTouch: false });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scope = document.querySelector("main") ?? undefined;
    const context = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>("[data-enter]");
      elements.forEach((element, index) => {
        gsap.from(element, {
          y: 22,
          duration: 0.72,
          delay: (index % 4) * 0.045,
          ease: "power3.out",
          clearProps: "transform",
          immediateRender: false,
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      if (document.querySelector(".hero-photo")) {
        gsap.to(".hero-photo", {
          scale: 1.045,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.7 },
        });
      }
    }, scope);

    const refreshId = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      window.cancelAnimationFrame(refreshId);
      context.revert();
    };
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/visit" component={Visit} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <WouterRouter base={BASE_PATH}>
          <MotionAndScroll />
          <Header />
          <Router />
          <Footer />
        </WouterRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
