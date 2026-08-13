import React from 'react';

const services = [
  {
    title: 'Custom Decks',
    description: 'Premium composite or natural wood decks designed for your lifestyle. Perfect for entertaining or quiet mornings.',
    image: '/services_deck_1786481182671.webp',
    icon: '🪵',
    accent: '#7e22ce',
    accentLight: '#f3e8ff',
  },
  {
    title: 'Privacy Fencing',
    description: 'Robust and elegant fencing in vinyl, cedar, or modern metal — tailored to your property and style.',
    image: '/services_fence_1786481230809.webp',
    icon: '🏡',
    accent: '#0369a1',
    accentLight: '#e0f2fe',
  },
  {
    title: 'Smart Lighting',
    description: 'Low-voltage LED systems integrated into your deck or fence. Control ambiance from your phone.',
    image: '/services_lighting_1786481805892.webp',
    icon: '✨',
    accent: '#92400e',
    accentLight: '#fef3c7',
  },
  {
    title: 'Gate Installation',
    description: 'Custom driveway and walkway gates built for security, curb appeal, and long-term durability.',
    image: '/hero_fence_deck_1786481154195.webp',
    icon: '🚪',
    accent: '#b91c1c',
    accentLight: '#fee2e2',
  },
  {
    title: 'Pergolas & Arbors',
    description: 'Beautifully crafted shade structures that transform any yard into a relaxing outdoor retreat.',
    image: '/about_team_1786481775672.webp',
    icon: '🌿',
    accent: '#15803d',
    accentLight: '#dcfce7',
  },
  {
    title: 'Repairs & Staining',
    description: 'Restore and protect your existing deck or fence with expert repairs and professional staining.',
    image: '/services_deck_1786481182671.webp',
    icon: '🔧',
    accent: '#c2410c',
    accentLight: '#ffedd5',
  },
];

export default function Services() {
  return (
    <div className="py-24 px-6 md:px-14 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-pink-700 font-bold text-xs uppercase tracking-[0.3em] mb-3">What We Build</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              Services
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium text-base leading-relaxed">
            Comprehensive outdoor solutions designed to enhance the beauty and value of your property.
          </p>
        </div>

        {/* 6-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Icon badge over image */}
                <div
                  className="absolute top-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-md"
                  style={{ background: s.accentLight }}
                >
                  {s.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-black text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm font-medium leading-relaxed mb-4">{s.description}</p>
                <div
                  className="flex items-center gap-1.5 text-xs font-bold transition-colors"
                  style={{ color: s.accent }}
                >
                  Get a Quote
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
