import React from 'react';

const sections = [
  {
    title: '1. Business Identity',
    content: (
      <p>These Terms and Conditions govern your use of the services provided by Avenue Fence and Decks, located at 9950 County Rd, Clarence, Buffalo, NY. Contact: (716) 466-1330 | kdlandscapingny@gmail.com.</p>
    ),
  },
  {
    title: '2. Age Requirement (18+)',
    content: (
      <p>By using this website or enrolling in our services, including SMS messaging, you confirm that you are at least 18 years of age. Our SMS program is not directed to individuals under 18.</p>
    ),
  },
  {
    title: '3. Terminology',
    content: (
      <p>"Client," "You," and "Your" refers to the user of this website. "The Company," "We," "Our," and "Us" refers to Avenue Fence and Decks.</p>
    ),
  },
  {
    title: '4. SMS Messaging Terms of Service',
    content: (
      <div className="space-y-5">
        <div>
          <p className="font-bold text-gray-700 mb-1">4a. Program Description &amp; Message Types</p>
          <p className="mb-2">By providing your phone number and checking the SMS consent checkbox on our contact forms, you agree to receive recurring automated text messages from Avenue Fence and Decks. Messages may include:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-500">
            <li>Free estimate confirmations and scheduling notifications</li>
            <li>Appointment reminders and project status updates</li>
            <li>Customer support and service follow-up communications</li>
            <li>Promotional offers and seasonal announcements related to our fencing and deck services</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-gray-700 mb-1">4b. Message Frequency</p>
          <p>Message frequency varies based on your service activity and interactions with us. You may receive up to 4–8 messages per month. Frequency may increase during active service periods.</p>
        </div>
        <div>
          <p className="font-bold text-gray-700 mb-1">4c. Message &amp; Data Rates</p>
          <p>Message and data rates may apply for any messages sent to you from us and to us from you. Charges are determined by your mobile carrier and your individual service plan. Avenue Fence and Decks is not responsible for any carrier charges.</p>
        </div>
        <div>
          <p className="font-bold text-gray-700 mb-1">4d. How to Opt Out (STOP)</p>
          <p>You can opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message we send. After opting out, you will receive a one-time confirmation message and will no longer receive SMS messages from us unless you re-enroll.</p>
        </div>
        <div>
          <p className="font-bold text-gray-700 mb-1">4e. How to Get Help (HELP)</p>
          <p className="mb-2">For help with our SMS program, reply <strong>HELP</strong> to any message or contact us directly at:</p>
          <ul className="list-none space-y-1 text-gray-500">
            <li>Phone: (716) 466-1330</li>
            <li>Email: <a href="mailto:kdlandscapingny@gmail.com" className="text-pink-500 hover:text-pink-600">kdlandscapingny@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-gray-700 mb-1">4f. Carrier Liability Disclaimer</p>
          <p>Mobile carriers are not liable for delayed or undelivered messages. Avenue Fence and Decks cannot guarantee delivery of SMS messages. Delivery of information through SMS may be subject to your mobile carrier's capability and coverage area.</p>
        </div>
        <div>
          <p className="font-bold text-gray-700 mb-1">4g. Supported Carriers</p>
          <p>Our SMS program is supported by all major U.S. wireless carriers including AT&amp;T, Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.</p>
        </div>
      </div>
    ),
  },
  {
    title: '5. Cookies',
    content: (
      <p>We use cookies in accordance with our Privacy Policy to improve user experience and website functionality.</p>
    ),
  },
  {
    title: '6. Intellectual Property & License',
    content: (
      <p>Unless otherwise stated, Avenue Fence and Decks owns the intellectual property rights for all content on this website. You may not copy, reproduce, republish, sell, or redistribute any material without prior written permission.</p>
    ),
  },
  {
    title: '7. Comments & User Content',
    content: (
      <p>Avenue Fence and Decks reserves the right to monitor and remove any comments or user-generated content on our platforms that are inappropriate, offensive, or violate these terms.</p>
    ),
  },
  {
    title: '8. Content Liability',
    content: (
      <p>We are not responsible for content that appears on external websites linking to us. You agree to defend and protect Avenue Fence and Decks against any claims arising from your website or digital properties.</p>
    ),
  },
  {
    title: '9. Disclaimer',
    content: (
      <p>To the maximum extent permitted by applicable law, Avenue Fence and Decks excludes all warranties, representations, and conditions relating to our website and services. We are not liable for any loss or damage (including, without limitation, damage for loss of business, profits, or revenue) arising from the use of our website or services.</p>
    ),
  },
  {
    title: '10. Changes to These Terms',
    content: (
      <p>We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised "Last Updated" date. Continued use of our website or services constitutes acceptance of the updated terms.</p>
    ),
  },
  {
    title: '11. Contact Information',
    content: (
      <>
        <p className="mb-3">For questions about these Terms and Conditions, please contact us:</p>
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

export default function Terms() {
  return (
    <div className="py-16 px-6 md:px-10 bg-white">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block bg-pink-50 border border-pink-200 text-pink-500 font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-4xl font-black text-gray-900 mb-3">Terms &amp; Conditions</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-medium">
            <span>Effective Date: January 19, 2025</span>
            <span>|</span>
            <span>Last Updated: July 9, 2026</span>
          </div>
          <p className="mt-4 text-gray-500 text-sm leading-relaxed">
            Welcome to Avenue Fence and Decks. By accessing this website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
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
