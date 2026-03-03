import React from "react";

const FEATURES = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Digital Design Precision",
    desc: "Advanced CAD software and modeling tools to create exact digital replicas of your concepts with tolerances down to microns.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    title: "Physical Manufacturing",
    desc: "From FDM 3D printing to laser cutting and CNC, we transform digital files into tangible, functional products with perfect finish.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Industrial Automation",
    desc: "Complete PLC programming and industrial automation solutions to streamline your production processes and increase efficiency.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Creative & Cultural Projects",
    desc: "Beyond engineering — we bring cultural artifacts, artistic visions, and non-technical concepts to life through our manufacturing capabilities.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-carbon-900 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-brand-500" />
              <span className="text-brand-400 font-mono text-sm tracking-widest uppercase">
                About MechaCAD
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Where Digital Design Meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                Physical Reality
              </span>
            </h2>

            <p className="text-silver-400 text-lg leading-relaxed mb-6">
              MechaCAD Solutions is Sri Lanka's premier engineering and digital
              manufacturing firm, specializing in bridging the gap between
              complex digital designs and high-quality physical products. We
              serve both{" "}
              <span className="text-silver-200 font-medium">
                engineering industries
              </span>{" "}
              and{" "}
              <span className="text-silver-200 font-medium">
                non-engineering applications
              </span>{" "}
              with equal precision.
            </p>

            <p className="text-silver-500 leading-relaxed mb-10">
              Whether you're an engineer needing precise CAD models, a business
              requiring branded signage, or a creator with a cultural vision —
              our team delivers with{" "}
              <em className="text-brand-400 not-italic font-medium">
                perfect finish
              </em>{" "}
              every time. From concept sketches to functional prototypes, we are
              your complete manufacturing partner.
            </p>

            {/* Highlight badges */}
            <div className="flex flex-wrap gap-3">
              {[
                "Functional Engineering",
                "Perfect Finish",
                "Concept to Reality",
                "Fast Turnaround",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-carbon-800 border border-brand-700/30 rounded text-silver-300 text-sm font-medium hover:border-brand-500/60 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="service-card glow-border bg-carbon-800/60 backdrop-blur-sm rounded-lg p-6 hover:bg-carbon-800 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-900/40 border border-brand-700/30 rounded-lg flex items-center justify-center text-brand-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-silver-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
