import React from "react";
import logo from "../assets/mechacad-logo.png";

const PHONE_NUM = "075 613 3530";

export default function Footer() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-carbon-950 border-t border-carbon-800">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img
                src={logo}
                alt="MechaCAD Solutions"
                className="h-12 w-auto object-contain"
                //style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-silver-500 text-sm leading-relaxed max-w-sm mb-6">
              Sri Lanka's leading engineering and digital manufacturing firm —
              turning your concepts into functional reality with precision,
              reliability, and perfect finish.
            </p>
            {/* Contact quick ref */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-brand-400">📞</span>
                <span className="text-silver-300 font-medium">{PHONE_NUM}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-brand-400">✉</span>
                <span className="text-silver-300">info@mechacad.lk</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-brand-400">📍</span>
                <span className="text-silver-400">Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Character Modeling",
                "Engineering CAD",
                "FDM 3D Printing",
                "Resin Printing",
                "Metal Laser Cutting",
                "Acrylic Cutting",
                "Laser Engraving",
                "PLC Automation",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleScroll("#services")}
                    className="text-silver-500 hover:text-brand-400 text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-brand-500 rounded-full" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Client Reviews", href: "#reviews" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleScroll(item.href)}
                    className="text-silver-500 hover:text-brand-400 text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Materials badge */}
            <div className="mt-6 p-4 bg-carbon-800/60 border border-carbon-700/40 rounded-lg">
              <div className="text-silver-500 text-xs font-mono uppercase tracking-wider mb-2">
                Materials
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["PLA+", "PETG", "CF", "TPU", "SS", "MS", "AL"].map((m) => (
                  <span
                    key={m}
                    className="px-2 py-0.5 bg-carbon-700 text-brand-400 text-xs rounded font-mono border border-brand-700/20"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-carbon-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-silver-600 text-sm text-center sm:text-left">
              © 2024 MechaCAD Solutions. All rights reserved. · Precision
              Engineering · Sri Lanka
            </div>
            <div className="flex items-center gap-2">
              <span className="text-silver-600 text-xs font-mono">
                Concept to Reality
              </span>
              <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
