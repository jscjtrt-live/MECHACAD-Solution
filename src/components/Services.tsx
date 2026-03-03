import { useState } from 'react';

const MODELING_IMG = 'https://pixabay.com/get/gd1f588aa0c252fe9fd06b76c06ece52d352be10c79878113293f8f328064ca6c0a798ad87f3aadcc4b6cb9f200d9322a74a7097a31c1b3487c8db21b8911e407_1280.jpg';
const PRINTING_IMG = 'https://pixabay.com/get/g106fbb11dd88de571e625933af6fb86a96c45d6249514d47df2053ee46ea77f17f4f45e96b8f46e506388d5f3e75b4dc2dc8187744a52198c3a3eb8bb616cb9a_1280.jpg';
const LASER_IMG = 'https://pixabay.com/get/gc34a5536b94137c185e6613cf276020b15ce6d10b75f2835253bd6fb74d5a922a586296dca8d23fe5834e4aba28d14a6272fb2119840842b633dff6ef318d2da_1280.jpg';
const AUTOMATION_IMG = 'https://pixabay.com/get/gff0a10726a36bcf0ac39963dde3224ad79e901bc27b5c37f4a52d0a8f295196ba4cd8edc656d8249d92b7fe16e447b8d61a67e68d3ccae063a5ee9046c759093_1280.jpg';

const SERVICES = [
  {
    id: '3d-modeling',
    number: '01',
    title: '3D Modeling',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
      </svg>
    ),
    image: MODELING_IMG,
    tagline: 'From imagination to precise digital form',
    description: 'We create highly detailed 3D models for every application — from artistic characters to precision engineering components. Our workflow ensures accuracy, detail, and manufacturability.',
    subServices: [
      { name: 'Character Modeling', desc: 'Figurines, mascots, cultural artifacts, and artistic designs for 3D printing or visualization.' },
      { name: 'Engineering CAD Modeling', desc: 'Precise mechanical parts, assemblies, and technical drawings for manufacturing and prototyping.' },
      { name: 'General 3D Design', desc: 'Product visualization, architecture models, sign boards, and custom objects for any application.' },
    ],
    highlight: 'Perfect geometric accuracy for every project',
  },
  {
    id: '3d-printing',
    number: '02',
    title: '3D Printing',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    image: PRINTING_IMG,
    tagline: 'Industrial-grade materials for real-world performance',
    description: 'Advanced FDM and Resin 3D printing capabilities using premium materials. Each print is optimized for strength, finish, and dimensional accuracy.',
    subServices: [
      { name: 'FDM Printing', desc: 'High-strength parts using PLA+, PETG, Carbon Fiber composites, and flexible TPU materials.' },
      { name: 'Resin Printing', desc: 'Ultra-fine detail parts for jewelry masters, dental models, and high-precision components.' },
      { name: 'Material Expertise', desc: 'PLA+ for general use · PETG for strength · Carbon Fiber for rigidity · TPU for flexibility.' },
    ],
    highlight: 'PLA+ · PETG · Carbon Fiber · TPU materials',
  },
  {
    id: 'laser-cutting',
    number: '03',
    title: 'Laser Cutting & Engraving',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    image: LASER_IMG,
    tagline: 'Precision cuts through any material, any thickness',
    description: 'Industrial-grade laser cutting and engraving on metals, acrylics, wood, and more. From delicate engravings to heavy structural cuts — we handle all your cutting needs.',
    subServices: [
      { name: 'Metal Cutting', desc: 'Stainless Steel up to 6mm · Mild Steel up to 15mm · Aluminum cutting with clean, precise edges.' },
      { name: 'Acrylic Cutting', desc: 'Crystal-clear edge cuts for signage, displays, decorative panels, and LED light guides.' },
      { name: 'Multi-Material Engraving', desc: 'Detailed engraving on Wood, Metal, Acrylic for branding, artwork, and personalization.' },
    ],
    highlight: 'SS up to 6mm · MS up to 15mm · Aluminum',
  },
  {
    id: 'automation',
    number: '04',
    title: 'Industrial Automation',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    image: AUTOMATION_IMG,
    tagline: 'Smart systems for smarter manufacturing',
    description: "Comprehensive PLC programming and industrial automation solutions using the world's leading control systems. We design, program, and commission automation projects of any complexity.",
    subServices: [
      { name: 'PLC Programming', desc: 'Expert programming for Omron, Siemens, Allen Bradley, and Mitsubishi PLC platforms.' },
      { name: 'SCADA & HMI', desc: 'Complete supervisory control systems with intuitive human-machine interfaces for process monitoring.' },
      { name: 'General Automation', desc: 'Conveyor systems, robotic cells, packaging lines, and custom industrial automation solutions.' },
    ],
    highlight: 'Omron · Siemens · Allen Bradley · Mitsubishi',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(SERVICES[0].id);
  const active = SERVICES.find(s => s.id === activeService) || SERVICES[0];

  return (
    <section id="services" className="py-24 bg-carbon-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-brand-500" />
            <span className="text-brand-400 font-mono text-sm tracking-widest uppercase">Core Services</span>
            <div className="h-px w-10 bg-brand-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Complete Manufacturing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
              Ecosystem
            </span>
          </h2>
          <p className="text-silver-500 text-lg max-w-2xl mx-auto">
            From initial CAD design to final physical product — we cover every step of the manufacturing journey.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex items-center gap-3 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeService === service.id
                  ? 'bg-brand-500 text-carbon-900 shadow-brand-glow'
                  : 'bg-carbon-800 text-silver-400 hover:text-white hover:bg-carbon-700 border border-carbon-700'
              }`}
            >
              <span className={`font-mono text-xs ${activeService === service.id ? 'text-carbon-900/70' : 'text-brand-500'}`}>{service.number}</span>
              {service.title}
            </button>
          ))}
        </div>

        {/* Active service content */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Image side */}
          <div className="relative rounded-xl overflow-hidden group" style={{ minHeight: '400px' }}>
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-carbon-900/80 backdrop-blur-sm border border-brand-700/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-brand-500 rounded-full" />
                  <span className="text-silver-400 text-sm">{active.highlight}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-col justify-between">
            <div className="bg-carbon-900 border border-carbon-700/60 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-900/30 border border-brand-700/40 rounded-xl flex items-center justify-center text-brand-400">
                  {active.icon}
                </div>
                <div>
                  <div className="text-brand-500 font-mono text-sm mb-1">{active.number}</div>
                  <h3 className="text-2xl font-bold text-white">{active.title}</h3>
                </div>
              </div>
              
              <p className="text-silver-400 leading-relaxed mb-8">{active.description}</p>

              <div className="space-y-4">
                {active.subServices.map((sub, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-lg bg-carbon-800/60 border border-carbon-700/40 hover:border-brand-700/40 transition-colors duration-200"
                  >
                    <div className="w-6 h-6 bg-brand-700/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm mb-1">{sub.name}</div>
                      <div className="text-silver-500 text-sm leading-relaxed">{sub.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-brand-500/15 hover:bg-brand-500/30 border border-brand-500/40 hover:border-brand-400 text-brand-300 hover:text-brand-200 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Get a Quote for {active.title}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
