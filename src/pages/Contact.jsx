import React, { useEffect } from 'react';

const infoItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Call Us',
    value: '(555) 123-4567',
    sub: 'Mon – Sat, 8am – 6pm',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email Us',
    value: 'hello@avenue.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Visit Us',
    value: '123 Sunshine Blvd',
    sub: 'New York, NY 10001',
  },
];

export default function Contact() {
  // Load GHL embed script
  useEffect(() => {
    if (document.querySelector('script[src="https://link.kdlead.com/js/form_embed.js"]')) return;
    const s = document.createElement('script');
    s.src = 'https://link.kdlead.com/js/form_embed.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="py-24 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-pink-50 border border-pink-200 text-pink-500 font-bold text-xs uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              Beautiful
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            Ready to transform your outdoor space? Fill in the form and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left: Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-pink-200 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500 shrink-0 group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-gray-900 font-bold text-sm">{item.value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Free consultation banner */}
            <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 shadow-xl shadow-pink-200 mt-1">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white font-black text-base mb-1">Free Consultation</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  No obligation. We'll assess your space and give you a detailed quote at no charge.
                </p>
              </div>
            </div>
          </div>

          {/* Right: GHL iframe form */}
          <div className="lg:col-span-3 bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-100 overflow-hidden">
            <iframe
              src="https://link.kdlead.com/widget/form/IyfhvN5cduj4G2rfJMmM"
              id="inline-IyfhvN5cduj4G2rfJMmM"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Optin Claim"
              data-height="763"
              data-layout-iframe-id="inline-IyfhvN5cduj4G2rfJMmM"
              data-form-id="IyfhvN5cduj4G2rfJMmM"
              title="Optin Claim"
              style={{ width: '100%', minHeight: '900px', height: 'auto', border: 'none', display: 'block' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
