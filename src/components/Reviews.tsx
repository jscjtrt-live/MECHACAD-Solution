import { useState } from 'react';

const REVIEWS = [
  {
    id: 1,
    name: 'Ruwan Perera',
    role: 'Automotive Restoration Specialist',
    company: 'Perera Auto Works',
    rating: 5,
    review: "MechaCAD Solutions delivered exceptional quality for our Mercedes-Benz W140 console restoration project. The reverse-engineered parts fit perfectly — you couldn't tell them from the originals. Their attention to detail and engineering precision is unmatched in Sri Lanka.",
    avatar: 'RP',
    color: 'bg-brand-700',
  },
  {
    id: 2,
    name: 'Nimalka Wijesinghe',
    role: 'Operations Manager',
    company: 'SoundPro Audio Systems',
    rating: 5,
    review: "We commissioned custom enclosures for our professional audio line and MechaCAD exceeded all expectations. Perfect dimensions, flawless laser-cut panels, and delivered on time. Their team's communication throughout the project was excellent.",
    avatar: 'NW',
    color: 'bg-carbon-600',
  },
  {
    id: 3,
    name: 'Chamara Jayawardena',
    role: 'Factory Automation Engineer',
    company: 'CeylonTech Industries',
    rating: 5,
    review: 'Their PLC automation work transformed our production line. The Omron PLC solution they programmed reduced our cycle time by 40%. Professional, reliable, and they truly understand industrial requirements. Highly recommend for any automation project.',
    avatar: 'CJ',
    color: 'bg-brand-800',
  },
  {
    id: 4,
    name: 'Dilshan Fernando',
    role: 'Startup Founder',
    company: 'TechVenture LK',
    rating: 5,
    review: 'As a startup, we needed rapid prototyping with limited budget. MechaCAD gave us high-quality 3D printed prototypes that helped us secure our first round of investment. Their PETG parts were strong enough for actual product testing. Game-changer!',
    avatar: 'DF',
    color: 'bg-green-700',
  },
  {
    id: 5,
    name: 'Kumari Dissanayake',
    role: 'Cultural Events Director',
    company: 'Heritage Sri Lanka Foundation',
    rating: 5,
    review: 'The 3D printed Karaduwa pieces they created for our cultural exhibition were absolutely stunning. They perfectly captured the traditional architectural details. Every visitor was amazed that these were 3D printed. Truly a blend of technology and heritage.',
    avatar: 'KD',
    color: 'bg-purple-700',
  },
  {
    id: 6,
    name: 'Asantha Bandara',
    role: 'Manufacturing Director',
    company: 'Precision Parts Lanka',
    rating: 5,
    review: "We've been partnering with MechaCAD for laser cutting requirements for over two years. Their metal cutting quality — especially for stainless steel — is consistently excellent. Fast turnaround, competitive pricing, and always perfect finish.",
    avatar: 'AB',
    color: 'bg-orange-700',
  },
];

const CLIENT_LOGOS = [
  'CeylonTech', 'SoundPro', 'Perera Auto', 'Heritage LK', 'PrecisionParts', 'TechVenture',
];

export default function Reviews() {
  const [active, setActive] = useState(0);

  return (
    <section id="reviews" className="py-24 bg-carbon-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-brand-500" />
            <span className="text-brand-400 font-mono text-sm tracking-widest uppercase">Social Proof</span>
            <div className="h-px w-10 bg-brand-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-silver-500 text-lg max-w-xl mx-auto">
            Trusted by engineers, manufacturers, and innovators across Sri Lanka.
          </p>
          
          {/* Rating summary */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {[1,2,3,4,5].map(star => (
              <svg key={star} className="w-6 h-6 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white font-bold ml-2">5.0</span>
            <span className="text-silver-500">· 100+ verified reviews</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {REVIEWS.map((review, i) => (
            <div
              key={review.id}
              onClick={() => setActive(i)}
              className={`relative bg-carbon-900 border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                active === i
                  ? 'border-brand-500 shadow-brand-glow scale-[1.02]'
                  : 'border-carbon-700 hover:border-carbon-600'
              }`}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-5 text-brand-700/30 text-5xl font-serif leading-none">"</div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-silver-400 text-sm leading-relaxed mb-6 relative z-10">
                "{review.review}"
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {review.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{review.name}</div>
                  <div className="text-silver-500 text-xs">{review.role}</div>
                  <div className="text-brand-400 text-xs font-mono">{review.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="border-t border-carbon-800 pt-12">
          <p className="text-center text-silver-600 text-sm font-mono tracking-widest uppercase mb-8">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo}
                className="px-6 py-3 bg-carbon-800/60 border border-carbon-700/40 rounded-lg text-silver-500 font-semibold text-sm hover:text-brand-400 hover:border-brand-700/40 transition-colors duration-200"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
