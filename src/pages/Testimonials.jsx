import React from 'react';

const testimonials = [
  { id: 1, name: 'Sarah Jenkins',   role: 'Homeowner',          rating: 5, content: 'Avenue completely transformed our backyard. The composite deck they built is absolutely flawless!' },
  { id: 2, name: 'David Chen',      role: 'Property Developer', rating: 5, content: 'Top-tier privacy fencing — durable, beautiful, always on time and on budget.' },
  { id: 3, name: 'Emily Roberts',   role: 'Homeowner',          rating: 5, content: 'The smart lighting makes our evenings so enjoyable. Outstanding craftsmanship throughout.' },
  { id: 4, name: 'Marcus Williams', role: 'Homeowner',          rating: 4, content: "Impressive attention to detail. They perfectly matched our home's modern exterior." },
  { id: 5, name: 'Linda Martinez',  role: 'Restaurant Owner',   rating: 5, content: 'Built an amazing outdoor patio for my restaurant. Completely elevated the dining experience.' },
  { id: 6, name: 'James Taylor',    role: 'Homeowner',          rating: 5, content: 'Fantastic team from consultation to walkthrough. Our cedar fence looks beautiful.' },
];

const avatarColors = [
  'from-purple-400 to-violet-500',
  'from-sky-400 to-blue-500',
  'from-amber-400 to-yellow-500',
  'from-rose-400 to-pink-500',
  'from-emerald-400 to-green-500',
  'from-orange-400 to-amber-500',
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill={i < count ? '#f472b6' : '#fce7f3'} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="py-24 px-6 md:px-14 bg-[#FFF5F9]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-pink-700 font-bold text-xs uppercase tracking-[0.3em] mb-3">Happy Clients</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight">
            What They{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              Say
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto font-medium text-base">
            Don't just take our word for it.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="bg-white border border-pink-100 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-lg hover:shadow-pink-100 hover:-translate-y-1 transition-all duration-300"
            >
              <Stars count={t.rating} />
              <p className="text-gray-700 text-sm font-medium leading-relaxed italic mt-4 flex-grow">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-pink-50">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center text-white font-black text-sm shrink-0 shadow-md`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-600 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
