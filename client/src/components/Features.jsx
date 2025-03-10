import React from 'react';
import { Shield, Lock, Clock, Database, Cloud } from 'lucide-react';

const features = [
  {
    name: 'Decentralized & Secure',
    description: 'No central entity controls user data, ensuring maximum security and privacy.',
    icon: Shield,
  },
  {
    name: 'Privacy-Focused',
    description: 'Users have full control over their identity and personal information.',
    icon: Lock,
  },
  {
    name: 'Fast & Reliable',
    description: 'Uses blockchain for real-time verification with unmatched reliability.',
    icon: Clock,
  },
  {
    name: 'Tamper-Proof Verification',
    description: 'Organizations can verify identity without storing personal data.',
    icon: Database,
  },
  {
    name: 'IPFS Storage',
    description: 'Ensures data is stored in a distributed manner for enhanced security.',
    icon: Cloud,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for secure identity management
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides comprehensive identity verification solutions with cutting-edge security features.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;