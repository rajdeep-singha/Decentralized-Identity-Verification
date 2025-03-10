import React from 'react';
import { Upload, Hash, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    name: 'Upload Identity Proof',
    description: 'Upload your identity document (e.g., Passport, Driver\'s License)',
    icon: Upload,
  },
  {
    id: 2,
    name: 'Generate Hash',
    description: 'System generates a cryptographic hash and stores it on the blockchain',
    icon: Hash,
  },
  {
    id: 3,
    name: 'Verify Identity',
    description: 'Organizations can verify the hash without accessing raw identity data',
    icon: CheckCircle,
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="bg-gray-50 py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            How It Works
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Secure, and Straightforward
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform makes identity verification easy while maintaining the highest security standards.
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            {/* Steps connection line */}
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t-2 border-gray-300" />
            </div>

            {/* Steps */}
            <div className="relative flex justify-between">
              {steps.map((step) => (
                <div key={step.id} className="relative">
                  <div className="relative flex h-20 items-center justify-center">
                    <div className="rounded-full bg-white border-2 border-indigo-600 p-4">
                      <step.icon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900">{step.name}</h3>
                    <p className="mt-2 text-sm text-gray-500 max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;