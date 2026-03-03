import React from "react";

const HERO_IMAGE =
  "https://pixabay.com/get/gdf150c72a69067c51ffb749df0a77f237a27bc7a1fe2093ceccb44994ac43e3d0abe40a0c8e78185e9a277bb1554870f68328b08e71b4e80c5199034eedd6398_1280.jpg";

const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Industrial Engineering"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950 via-carbon-900/90 to-carbon-950" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      {/* Decorative glows — amber tinted */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-brand-700/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-20 left-10 w-80 h-80 bg-brand-900/15 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 hidden lg:block">
        <div className="w-20 h-20 border-t-2 border-l-2 border-brand-500/40 rounded-tl-sm" />
      </div>
      <div className="absolute bottom-24 right-8 hidden lg:block">
        <div className="w-20 h-20 border-b-2 border-r-2 border-brand-500/40 rounded-br-sm" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Pre-headline badge */}
          <div className="inline-flex items-center gap-2 bg-carbon-800/60 backdrop-blur-sm border border-brand-700/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
            <span className="text-silver-300 text-sm font-mono tracking-wider">
              Premier Engineering Solutions · Sri Lanka
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Turning Concepts into{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                Functional Reality
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-400 to-brand-300 opacity-60" />
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-silver-400 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-10 max-w-3xl">
            Expert 3D Modeling, Precision Engineering, and Advanced Prototyping
            Solutions — bridging the gap between digital design and physical
            manufacturing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <button
              onClick={() => handleScroll("#contact")}
              className="group bg-brand-500 hover:bg-brand-400 text-carbon-900 px-8 py-4 rounded font-bold text-lg transition-all duration-300 hover:shadow-brand-glow flex items-center gap-3"
            >
              <span>Contact Us</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
            <button
              onClick={() => handleScroll("#portfolio")}
              className="group border border-silver-600 hover:border-brand-500 text-silver-300 hover:text-brand-400 px-8 py-4 rounded font-semibold text-lg transition-all duration-300 flex items-center gap-3"
            >
              <span>View Our Work</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="border border-carbon-700/60 bg-carbon-900/40 backdrop-blur-sm rounded-lg p-5 text-center hover:border-brand-700/50 transition-colors duration-300"
              >
                <div className="text-3xl font-bold text-brand-400 stat-number mb-1">
                  {stat.value}
                </div>
                <div className="text-silver-500 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-silver-600 text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-silver-600 to-transparent" />
      </div>
    </section>
  );
}
