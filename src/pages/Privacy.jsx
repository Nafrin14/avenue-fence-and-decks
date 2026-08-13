import React from 'react';

const sections = [
  {
    title: '1. Information We Collect',
    content: (
      <>
        <p className="mb-3">We may collect the following categories of personal information when you contact us, request a quote, submit a web form, or use our services:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-500">
          <li>Full name</li>
          <li>Mailing or service address</li>
          <li>Email address</li>
          <li>Mobile phone number</li>
          <li>Service request details and project descriptions</li>
          <li>Communication history and preferences</li>
        </ul>
      </>
    ),
  },
  {
    title: '2. SMS / Text Message Communications',
    content: (
      <div className="space-y-5">
        <div>
          <p className="font-bold text-gray-700 mb-1">2a. How We Collect Your Mobile Number</p>
          <p>We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or other direct communication channels. By providing your mobile number and checking the SMS consent checkbox on our forms, you expressly consent to receive SMS (text message) communications from Avenue Fence and Decks.</p>
        </div>
        <div>
          <p className="font-bold text-gray-700 mb-1">2b. Types of Messages We Send</p>
          <p className="mb-2">By opting in, you may receive recurring automated text messages from Avenue Fence and Decks, including:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-500">
            <li>Free estimate confirmations and appointment reminders</li>
            <li>Project status updates and scheduling notifications</li>
            <li>Customer support and follow-up communications</li>
            <li>Promotional offers and seasonal service announcements related to our fencing and deck services</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-gray-700 mb-1">2c. Message Frequency</p>
          <p>Message frequency varies based on your interactions with us, ongoing service needs, and active promotions. You may receive up to 4–8 messages per month depending on your service activity.</p>
        </div>
        <div>
          <p className="font-bold text-gray-700 mb-1">2d. Message &amp; Data Rates</p>
          <p>Message and data rates may apply. Charges are determined by your mobile carrier and your individual service plan. Avenue Fence and Decks is not responsible for any charges incurred from your mobile carrier.</p>
        </div>
        <div>
          <p className="font-bold text-gray-700 mb-1">2e. How to Opt Out (STOP)</p>
          <p>You may cancel SMS messages at any time by replying <strong>STOP</strong> to any text message you receive from us. After opting out, you will receive one final confirmation message and will no longer receive SMS communications from Avenue Fence and Decks unless you re-enroll.</p>
        </div>
        <div>
          <p className="font-bold text-gray-700 mb-1">2f. How to Get Help (HELP)</p>
          <p className="mb-2">For help with our SMS program, reply <strong>HELP</strong> to any message, or contact us directly at:</p>
          <ul className="list-none space-y-1 text-gray-500">
            <li>Phone: (716) 466-1330</li>
            <li>Email: kdlandscapingny@gmail.com</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: '3. Mobile Information & SMS Consent — No Third-Party Sharing',
    content: (
      <>
        <p className="mb-3">No mobile information (including your mobile phone number and SMS opt-in consent data) will be shared with third parties or affiliates for marketing or promotional purposes.</p>
        <p>All other categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.</p>
      </>
    ),
  },
  {
    title: '4. How We Use Your Information',
    content: (
      <>
        <p className="mb-3">We use the personal information we collect to:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-500">
          <li>Provide and manage fencing and deck services</li>
          <li>Respond to inquiries and service requests</li>
          <li>Schedule appointments and send reminders</li>
          <li>Send promotional communications (with your consent)</li>
          <li>Improve our website and service quality</li>
          <li>Comply with applicable laws and regulations</li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Cookies and Tracking Technologies',
    content: (
      <p>We use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience. Cookies do not store sensitive personal information. By continuing to use this website, you consent to our use of cookies in accordance with this policy.</p>
    ),
  },
  {
    title: '6. Data Security',
    content: (
      <p>We implement reasonable administrative, technical, and physical security measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure.</p>
    ),
  },
  {
    title: '7. Data Retention',
    content: (
      <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. When your data is no longer needed, we securely delete or anonymize it.</p>
    ),
  },
  {
    title: '8. Your Privacy Rights',
    content: (
      <>
        <p className="mb-3">Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-500 mb-3">
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
          <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
          <li><strong>Deletion:</strong> Request deletion of your personal data (including your mobile number and SMS consent record)</li>
          <li><strong>Opt-Out of SMS:</strong> Reply STOP to any text message at any time</li>
          <li><strong>Opt-Out of Marketing:</strong> Contact us directly to be removed from marketing lists</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:kdlandscapingny@gmail.com" className="text-pink-500 hover:text-pink-600">kdlandscapingny@gmail.com</a> or call (716) 466-1330.</p>
      </>
    ),
  },
  {
    title: '9. Changes to This Privacy Policy',
    content: (
      <p>We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised "Last Updated" date. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.</p>
    ),
  },
  {
    title: '10. Contact Information',
    content: (
      <>
        <p className="mb-3">If you have questions or concerns about this Privacy Policy, please contact us:</p>
        <ul className="list-none space-y-1 text-gray-500">
          <li><strong>Company:</strong> Avenue Fence and Decks</li>
          <li><strong>Address:</strong> 9950 County Rd, Clarence, Buffalo, NY</li>
          <li><strong>Phone:</strong> (716) 466-1330</li>
          <li><strong>Email:</strong> <a href="mailto:kdlandscapingny@gmail.com" className="text-pink-500 hover:text-pink-600">kdlandscapingny@gmail.com</a></li>
        </ul>
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <div className="py-16 px-6 md:px-10 bg-white">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block bg-pink-50 border border-pink-200 text-pink-500 font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-4xl font-black text-gray-900 mb-3">Privacy Policy</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-medium">
            <span>Effective Date: January 19, 2025</span>
            <span>|</span>
            <span>Last Updated: July 9, 2026</span>
          </div>
          <p className="mt-4 text-gray-500 text-sm leading-relaxed">
            Avenue Fence and Decks ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data in compliance with applicable U.S. data protection laws, including the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR) where applicable.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="border-l-2 border-pink-200 pl-5">
              <h2 className="text-base font-black text-gray-900 mb-3">{s.title}</h2>
              <div className="text-gray-600 text-sm leading-relaxed">{s.content}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
