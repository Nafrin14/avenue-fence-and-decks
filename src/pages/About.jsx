import React from 'react';

const stats = [
  { value: '500+', label: 'Happy Backyards',  sub: 'Completed projects' },
  { value: '15+',  label: 'Years Experience', sub: 'Industry expertise' },
  { value: '100%', label: 'Satisfaction',     sub: 'Happiness guaranteed' },
];

export default function About() {
  return (
    <div className="py-24 px-6 md:px-14 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 font-bold text-xs uppercase tracking-[0.3em] mb-3">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              Avenue
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium text-base leading-relaxed">
            We believe your outdoor space should be a natural extension of your home's luxury and comfort.
          </p>
        </div>

        {/* Image + text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-pink-100">
            <img
              src="/about_team_1786481775672.jpg"
              alt="Avenue Team"
              className="w-full h-[360px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent" />
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm border border-pink-100 rounded-xl px-4 py-2.5 shadow-md">
              <p className="text-gray-900 font-black text-sm">Expert Team</p>
              <p className="text-pink-500 text-xs font-semibold">Serving since 2009</p>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-3xl font-black text-gray-900 leading-snug">
              Craftsmanship<br />
              <span className="text-pink-500">Meets Quality</span>
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              With over 15 years of experience, our team brings unparalleled expertise to every project.
              We craft lasting outdoor experiences using modern materials like high-performance composites
              and precision-engineered metals.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-7 py-3.5 rounded-xl font-black text-sm shadow-md shadow-pink-200 hover:-translate-y-0.5 transform transition-all"
            >
              Work With Us →
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-pink-50 border border-pink-100 rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-pink-100 hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-4xl font-black text-pink-500 mb-1">{s.value}</p>
              <p className="text-gray-900 font-bold text-sm">{s.label}</p>
              <p className="text-gray-400 text-xs mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
