import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const navItems = [
  { label: 'Home',     id: 'home' },
  { label: 'About',    id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Reviews',  id: 'testimonials' },
  { label: 'Contact',  id: 'contact' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal]       = useState(null);
  const [activeId, setActiveId] = useState('home');

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  /* ── Active section detection via IntersectionObserver ── */
  useEffect(() => {
    const observers = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        {
          rootMargin: '-50% 0px -50% 0px', // trigger when section crosses middle of screen
          threshold: 0,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div
      className="min-h-screen bg-[#FFF0F5] font-sans flex flex-col"
      style={{ overflowX: 'hidden', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {/* scrollbar */}

      {/* ── Floating Navbar ── */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
        <div className="bg-white/90 backdrop-blur-xl border border-pink-100 rounded-2xl shadow-lg shadow-pink-200/40 px-5 py-3">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <button onClick={() => scrollTo('home')} className="flex items-center group">
              <div className="h-12 w-12 rounded-full ring-2 ring-pink-200 shadow-md overflow-hidden group-hover:scale-110 transition-transform flex-shrink-0">
                <img
                  src="/logo.webp"
                  alt="Avenue Fence and Decks"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1 bg-pink-50 rounded-xl px-2 py-1.5 border border-pink-100">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200
                      ${isActive
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-200'
                        : 'text-gray-500 hover:text-pink-600 hover:bg-white'
                      }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:block bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-5 py-2 rounded-xl font-bold text-sm transition-all shadow-md shadow-pink-300/40 hover:-translate-y-0.5 transform"
            >
              Get a Quote
            </button>

            {/* Mobile burger */}
            <button
              className="md:hidden text-gray-500 hover:text-pink-500 p-1"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen
                ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              }
            </button>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-pink-100 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all text-left
                      ${isActive
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                        : 'text-gray-500 hover:text-pink-600 hover:bg-pink-50'
                      }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => scrollTo('contact')}
                className="mt-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2.5 rounded-xl font-bold text-sm"
              >
                Get a Quote
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ── Pages ── */}
      <main className="flex-grow flex flex-col gap-4 px-4 md:px-8 pt-4 pb-4">

        <section id="home" className="rounded-3xl overflow-hidden">
          <Home />
        </section>

        <section id="about" className="bg-white rounded-3xl overflow-hidden shadow-sm border border-pink-100">
          <About />
        </section>

        <section id="services" className="bg-white rounded-3xl overflow-hidden shadow-sm border border-pink-100">
          <Services />
        </section>

        <section id="testimonials" className="bg-white rounded-3xl overflow-hidden shadow-sm border border-pink-100">
          <Testimonials />
        </section>

        <section id="contact" className="bg-white rounded-3xl shadow-sm border border-pink-100">
          <Contact />
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="bg-white border border-pink-100 rounded-3xl mx-4 md:mx-8 mb-4 shadow-sm overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-300"></div>

        <div className="max-w-5xl mx-auto px-8 md:px-12 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <img src="/logo.webp" alt="Avenue Fence and Decks" className="h-9 w-auto object-contain" />
                <span className="font-extrabold text-gray-900 text-lg italic" style={{ fontFamily: 'Georgia,serif' }}>avenue</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Beautiful, durable fencing and custom deck solutions for your dream outdoor space.
              </p>
              <div className="flex gap-3 mt-5">
                {[{ label: 'FB', title: 'Facebook' }, { label: 'IG', title: 'Instagram' }, { label: 'HZ', title: 'Houzz' }].map((s) => (
                  <a key={s.label} href="#" title={s.title}
                    className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-700 hover:bg-pink-500 hover:border-pink-500 hover:text-white transition-all font-bold text-xs">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">Quick Links</p>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollTo(item.id)}
                      className="text-gray-600 hover:text-pink-500 transition-colors text-sm font-medium">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">Contact</p>
              <ul className="space-y-2.5">
                <li className="text-gray-600 text-sm">(716) 466-1330</li>
                <li className="text-gray-600 text-sm">kdlandscapingny@gmail.com</li>
                <li className="text-gray-600 text-sm">9950 County Rd, Clarence, Buffalo NY</li>
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-t border-pink-50 pt-6">
            <p className="text-gray-600 text-xs">© 2026 Avenue Fence and Decks. All rights reserved.</p>
            <div className="flex gap-4">
              <button onClick={() => setModal('privacy')} className="text-gray-600 hover:text-pink-500 text-xs transition-colors">Privacy Policy</button>
              <span className="text-gray-300">|</span>
              <button onClick={() => setModal('terms')} className="text-gray-600 hover:text-pink-500 text-xs transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Privacy / Terms Modal ── */}
      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setModal(null)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto z-10">
            {/* Close button — sticky so it stays visible while scrolling */}
            <div className="sticky top-0 z-20 flex justify-end px-4 pt-4 bg-white rounded-t-3xl">
              <button onClick={() => setModal(null)}
                className="w-9 h-9 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white transition-all shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {modal === 'privacy' ? <Privacy /> : <Terms />}
          </div>
        </div>
      )}

    </div>
  );
}
