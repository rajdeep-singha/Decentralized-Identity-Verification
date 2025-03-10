import React, { useState } from 'react';
import { Shield, FileCheck, Lock } from 'lucide-react';

// Simulate different hashes for different uploads
const generateHash = () => {
  const characters = '0123456789abcdef';
  let hash = '0x';
  for (let i = 0; i < 64; i++) {
    hash += characters[Math.floor(Math.random() * characters.length)];
  }
  return hash;
};

// Hardcoded sample data
const sampleAadhaarHashes = {
  '1234-5678-9012': '0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
  '2345-6789-0123': '0x9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
  '3456-7890-1234': '0x60a5b31b3c7d6346b54c4cbf6640e9881952c3c8472055691e6b77fbf0860def'
};

const GetStarted = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [hash, setHash] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing delay
    setTimeout(() => {
      if (aadhaarNumber in sampleAadhaarHashes) {
        setHash(sampleAadhaarHashes[aadhaarNumber]);
      } else {
        setHash(generateHash());
      }
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Shield className="mx-auto h-16 w-16 text-indigo-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Secure Your Identity
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your Aadhaar card to generate a unique cryptographic hash.
            This hash serves as a secure, tamper-proof verification of your identity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Left Column - Upload Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Upload Aadhaar Card
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  placeholder="XXXX-XXXX-XXXX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  value={aadhaarNumber}
                  onChange={(e) => setAadhaarNumber(e.target.value)}
                  pattern="\d{4}-\d{4}-\d{4}"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Aadhaar Card (PDF or Image)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <FileCheck className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input
                          type="file"
                          className="sr-only"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          required
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, PNG, JPG up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Generate Hash'}
              </button>
            </form>
          </div>

          {/* Right Column - Hash Display */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Lock className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Cryptographic Hash
              </h2>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Generated Hash:</p>
              {hash ? (
                <div className="font-mono text-sm break-all bg-white p-4 rounded border border-gray-200">
                  {hash}
                </div>
              ) : (
                <div className="text-gray-500 italic">
                  Upload your Aadhaar card to generate a hash
                </div>
              )}
            </div>

            {hash && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Hash Information
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Algorithm: SHA-256</p>
                  <p>• Length: 64 characters</p>
                  <p>• Generated: {new Date().toLocaleString()}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;