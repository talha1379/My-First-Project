import supabase from "../config/supabaseClints";
import React, { useEffect, useState, Children, Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CpuIcon,
  MemoryStickIcon,
  MonitorIcon,
  KeyboardIcon,
  MouseIcon,
  ZapIcon,
  HardDriveIcon,
  CircuitBoardIcon,
  GamepadIcon,
  ArrowRightIcon,
  TruckIcon,
  ShieldCheckIcon,
  RotateCcwIcon,
  HeadphonesIcon,
  SendIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FlameIcon,
} from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import {
  getFeaturedProducts,
  getTrendingProducts,
  formatPrice,
} from "../data/products";
/* ─── Hero Slides ─── */
const heroSlides = [
  {
    headline: "Level Up Your Setup",
    subline: "RTX 40-Series GPUs — Now in Stock",
    cta: "Shop GPUs",
    ctaLink: "/products",
    gradient: "from-blue-900/40 via-bg to-bg",
    accent: "from-primary/20 to-transparent",
  },
  {
    headline: "Build Your Dream PC",
    subline: "Intel 14th Gen + DDR5 Bundles",
    cta: "Explore Bundles",
    ctaLink: "/products",
    gradient: "from-indigo-900/40 via-bg to-bg",
    accent: "from-violet-500/20 to-transparent",
  },
  {
    headline: "Gaming Gear Drop",
    subline: "Keyboards · Mice · Headsets · Pads",
    cta: "Shop Gaming",
    ctaLink: "/products",
    gradient: "from-cyan-900/40 via-bg to-bg",
    accent: "from-cyan-500/20 to-transparent",
  },
];

/* ─── Categories ─── */
const categories = [
  {
    name: "CPUs",
    icon: CpuIcon,
  },
  {
    name: "RAMs",
    icon: MemoryStickIcon,
  },
  {
    name: "LCDs",
    icon: MonitorIcon,
  },
  {
    name: "Keyboards",
    icon: KeyboardIcon,
  },
  {
    name: "Mice",
    icon: MouseIcon,
  },
  {
    name: "GPUs",
    icon: ZapIcon,
  },
  {
    name: "SSDs",
    icon: HardDriveIcon,
  },
  {
    name: "Motherboards",
    icon: CircuitBoardIcon,
  },
  {
    name: "Gaming",
    icon: GamepadIcon,
  },
];

/* ─── Brands ─── */
const brands = [
  "Intel",
  "AMD",
  "NVIDIA",
  "Samsung",
  "Corsair",
  "ASUS",
  "Logitech",
  "Seagate",
];

/* ─── Why Us ─── */
const whyUsItems = [
  {
    icon: TruckIcon,
    title: "Fast Delivery",
    desc: "Free shipping on orders over PKR 5,000 across KPK",
  },
  {
    icon: ShieldCheckIcon,
    title: "Genuine Products",
    desc: "100% authentic products with manufacturer warranty",
  },
  {
    icon: RotateCcwIcon,
    title: "Easy Returns",
    desc: "7-day hassle-free return policy on all items",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    desc: "Round-the-clock customer support via chat & phone",
  },
];

/* ─── Animation Variants ─── */
const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const cardStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
const cardFadeIn = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
/* ─── Section Heading Component ─── */
function SectionHeading({
  title,
  subtitle,
  link,
  linkText,
}: {
  title: string;
  subtitle?: string;
  link?: string;
  linkText?: string;
}) {
  return (
    <div className="flex items-end justify-between mb-10">
      <div>
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="font-heading text-2xl sm:text-3xl font-bold text-white"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
            className="mt-1 text-text-secondary text-sm"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      {link && (
        <Link
          to={link}
          className="hidden sm:flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-2.5 transition-all"
        >
          {linkText || "View All"}
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
/* ═══════════════════════════════════════════ */
/*                HOME PAGE                    */
/* ═══════════════════════════════════════════ */
export function Home() {
  const featured = getFeaturedProducts();
  const trending = getTrendingProducts();
  return (
    <main>
      <HeroSection />
      <CategoryStrip />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          title="Featured Products"
          subtitle="Handpicked top sellers for your build"
          link="/products"
          linkText="View All"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>
      <TrendingSection products={trending} />
      <BrandsBanner />
      <WhyUsSection />
      <NewsletterSection />
    </main>
  );
}
/* ─── HERO SECTION ─── */
function HeroSection() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % heroSlides.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);
  const slide = heroSlides[current];
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-bg" />
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className={`absolute inset-0 bg-gradient-to-b ${slide.gradient}`}
        />
      </AnimatePresence>

      {/* Decorative glow orb */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.4), transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-1/4 left-1/6 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={stagger}
            initial="hidden"
            animate="show"
            exit={{
              opacity: 0,
              y: -20,
              transition: {
                duration: 0.3,
              },
            }}
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-6"
            >
              New Arrivals
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
            >
              {slide.headline}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-text-secondary text-lg sm:text-xl max-w-lg"
            >
              {slide.subline}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to={slide.ctaLink}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-button bg-primary text-white font-semibold text-sm shadow-glow-blue hover:bg-primary-light transition-all animate-glow-pulse"
              >
                {slide.cta}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-button border border-white/15 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                Browse All
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-12 left-4 sm:left-6 lg:left-8 flex items-center gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-4 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>

        {/* Prev/Next */}
        <div className="absolute bottom-12 right-4 sm:right-6 lg:right-8 flex items-center gap-2">
          <button
            onClick={() =>
              setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length)
            }
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % heroSlides.length)}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
/* ─── CATEGORY STRIP ─── */
function CategoryStrip() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        title="Shop by Category"
        subtitle="Find exactly what you need"
      />

      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          margin: "-50px",
        }}
        className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3"
      >
        {categories.map((cat) => (
          <motion.div key={cat.name} variants={cardFadeIn}>
            <Link to="/products">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                className="flex flex-col items-center gap-2.5 p-4 rounded-card cursor-pointer group"
                style={{
                  background: "rgba(13, 21, 38, 0.7)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-text-secondary group-hover:text-white transition-colors text-center">
                  {cat.name}
                </span>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
/* ─── TRENDING SECTION ─── */
function TrendingSection({
  products,
}: {
  products: ReturnType<typeof getTrendingProducts>;
}) {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trending Now"
          subtitle="What everyone's buying this week"
          link="/products"
          linkText="See All"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="min-w-[260px] max-w-[280px] flex-shrink-0 relative"
            >
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1 px-2 py-0.5 bg-orange-500/90 text-white text-xs font-bold rounded-full">
                <FlameIcon className="w-3 h-3" />
                Hot
              </div>
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ─── BRANDS BANNER ─── */
function BrandsBanner() {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-14 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="text-center text-text-muted text-xs uppercase tracking-[0.2em] font-medium"
        >
          Trusted by the world's leading brands
        </motion.p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="mx-10 flex-shrink-0 flex items-center"
            >
              <span className="font-display text-xl sm:text-2xl font-bold text-white/10 hover:text-white/25 transition-colors duration-300 select-none">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ─── WHY US SECTION ─── */
function WhyUsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeading
        title="Why AHMAD Store?"
        subtitle="We go the extra mile for every customer"
      />

      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          margin: "-50px",
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {whyUsItems.map((item) => (
          <motion.div
            key={item.title}
            variants={cardFadeIn}
            className="p-6 rounded-card text-center"
            style={{
              background: "rgba(13, 21, 38, 0.7)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-base font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
/* ─── NEWSLETTER SECTION ─── */
function NewsletterSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="relative overflow-hidden rounded-card p-8 sm:p-12 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(13,21,38,0.9) 100%)",
          border: "1px solid rgba(37,99,235,0.2)",
        }}
      >
        {/* Decorative glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.5), transparent)",
          }}
        />

        <div className="relative z-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
            Stay in the Loop
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-md mx-auto mb-8">
            Get exclusive deals, new product drops, and tech news delivered
            straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-5 py-3 rounded-button bg-bg/80 border border-border text-white text-sm placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:shadow-glow-blue-sm transition-shadow"
            />

            <motion.button
              whileTap={{
                scale: 0.95,
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-button bg-primary text-white font-semibold text-sm shadow-glow-blue hover:bg-primary-light transition-all animate-glow-pulse whitespace-nowrap"
            >
              <SendIcon className="w-4 h-4" />
              Subscribe
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
