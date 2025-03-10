import React from 'react';

const faqs = [
  {
    question: "How is my identity secured?",
    answer: "Your identity is secured using advanced blockchain technology and encryption. We never store raw identity data - only cryptographic hashes are stored on the blockchain, ensuring your information remains private and secure."
  },
  {
    question: "Can I revoke access to my identity?",
    answer: "Yes, you have full control over your identity. You can revoke access at any time through your dashboard, and organizations will immediately lose their ability to verify your identity."
  },
  {
    question: "Which organizations can verify my identity?",
    answer: "Only organizations that you explicitly authorize can verify your identity. You can manage permissions through your dashboard and see a complete history of all verifications."
  },
  {
    question: "What happens if I lose access to my account?",
    answer: "We have a secure account recovery process that verifies your identity through multiple factors. Contact our support team, and they will guide you through the recovery process."
  }
];

const FAQ = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need to know about our identity verification platform
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;