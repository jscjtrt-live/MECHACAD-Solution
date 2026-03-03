import { useState } from 'react';

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: 'Reverse Engineering',
    title: 'Mercedes-Benz W140 Console Parts',
    description: 'Complete reverse engineering and 3D modeling of discontinued Mercedes-Benz W140 interior console components. Exact OEM dimensions restored for production.',
    image: 'https://pixabay.com/get/gd1f588aa0c252fe9fd06b76c06ece52d352be10c79878113293f8f328064ca6c0a798ad87f3aadcc4b6cb9f200d9322a74a7097a31c1b3487c8db21b8911e407_1280.jpg',
    tags: ['CAD Modeling', '3D Scanning', 'Reverse Engineering'],
    badge: 'Automotive',
  },
  {
    id: 2,
    category: 'Cultural Technology',
    title: '3D Printed Karaduwa',
    description: 'A celebration of Sri Lankan heritage — traditional Karaduwa architectural elements digitized and reproduced in high-fidelity 3D prints with authentic detailing.',
    image: 'https://pixabay.com/get/g0098973c80efba84a3496fecb1eec86483726f8d972b20afae35ce2f702393cacc23b3e48318d4ef1bff10860a5c8b945512a2a6532699b6955e9de736f60fa8_1280.jpg',
    tags: ['3D Printing', 'Cultural Heritage', 'Custom Design'],
    badge: 'Heritage',
  },
  {
    id: 3,
    category: 'Industrial',
    title: 'Sound Professional Enclosures',
    description: 'Custom acoustic enclosures for professional audio equipment. Precision-cut panels, CNC-machined components, and 3D-printed mounting brackets for perfect fit.',
    image: 'https://pixabay.com/get/g106fbb11dd88de571e625933af6fb86a96c45d6249514d47df2053ee46ea77f17f4f45e96b8f46e506388d5f3e75b4dc2dc8187744a52198c3a3eb8bb616cb9a_1280.jpg',
    tags: ['Laser Cutting', 'Custom Fabrication', 'Industrial'],
    badge: 'Audio Tech',
  },
  {
    id: 4,
    category: 'Robotics',
    title: 'Raspberry Pi 2-Axis Robotics Base',
    description: 'Fully designed and 3D-printed 2-axis robotic platform base for Raspberry Pi-controlled automation projects. Integrated servo mounts and cable management.',
    image: 'https://pixabay.com/get/gff0a10726a36bcf0ac39963dde3224ad79e901bc27b5c37f4a52d0a8f295196ba4cd8edc656d8249d92b7fe16e447b8d61a67e68d3ccae063a5ee9046c759093_1280.jpg',
    tags: ['3D Printing', 'Robotics', 'Prototype'],
    badge: 'Robotics',
  },
  {
    id: 5,
    category: 'Branding',
    title: '3D LED Sign Boards',
    description: 'High-impact 3D LED illuminated sign boards for businesses. Laser-cut acrylic faces, 3D-printed lettering, and integrated LED light guides for premium look.',
    image: 'https://pixabay.com/get/gc34a5536b94137c185e6613cf276020b15ce6d10b75f2835253bd6fb74d5a922a586296dca8d23fe5834e4aba28d14a6272fb2119840842b633dff6ef318d2da_1280.jpg',
    tags: ['Laser Cutting', '3D Printing', 'Branding'],
    badge: 'Signage',
  },
  {
    id: 6,
    category: 'Awards',
    title: 'Custom Trophies & Awards',
    description: 'Bespoke trophy and award designs for corporate events, sports competitions, and recognition ceremonies. Metal, acrylic, and composite materials available.',
    image: 'https://pixabay.com/get/g83ca89ca3f1d66a7aa7c9aad8bfe85cceefc3e21dbec4aa87e4706a7a0e977b77eb2579054b842efe992e573adeed47c9faf6c4470fe48407c8b432795840680_640.jpg',
    tags: ['Custom Design', '3D Printing', 'Awards'],
    badge: 'Premium',
  },
];

const CATEGORIES = ['All', 'Reverse Engineering', 'Cultural Technology', 'Industrial', 'Robotics', 'Branding', 'Awards'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = filter === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-carbon-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-brand-500" />
            <span className="text-brand-400 font-mono text-sm tracking-widest uppercase">Finished Projects</span>
            <div className="h-px w-10 bg-brand-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Portfolio Showcase
          </h2>
          <p className="text-silver-500 text-lg max-w-2xl mx-auto">
            Real projects. Real results. Every item you see has been engineered, manufactured, 
            and delivered with our commitment to precision and quality.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-brand-500 text-carbon-900 font-bold'
                  : 'bg-carbon-800 text-silver-400 hover:text-white border border-carbon-700 hover:border-carbon-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="portfolio-item group relative bg-carbon-800 rounded-xl overflow-hidden border border-carbon-700 hover:border-brand-700/50 transition-all duration-300 hover:shadow-card-hover cursor-pointer"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-900 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-500/85 backdrop-blur-sm text-carbon-900 font-bold text-xs px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className={`portfolio-overlay absolute inset-0 bg-carbon-900/85 flex items-center justify-center transition-all duration-300 ${hovered === item.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button
                    onClick={() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-brand-500 hover:bg-brand-400 text-carbon-900 px-5 py-2.5 rounded-lg font-bold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span>Get Similar Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-brand-400 text-xs font-mono mb-2 uppercase tracking-wider">{item.category}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-300 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-silver-500 text-sm leading-relaxed mb-4">{item.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-carbon-700/60 border border-carbon-600/40 text-silver-400 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-silver-500 mb-5">Have a unique project in mind?</p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-brand-500 hover:bg-brand-400 text-carbon-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-brand-glow"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
