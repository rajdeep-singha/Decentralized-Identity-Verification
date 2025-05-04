import React, { useState } from 'react';
import { Shield, FileCheck, Lock } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import crypto from 'crypto-js';

const GetStarted = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [file, setFile] = useState(null);
  const [hashValue, setHash] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const generateHash = (e) => {
    e.preventDefault();
    if (!aadhaar || !file) {
      alert('Please enter Aadhaar number and upload a file.');
      return;
    }

    setIsProcessing(true);

    const reader = new FileReader();
    reader.onload = () => {
      const fileData = reader.result;
      const combinedData = aadhaar + fileData;
      const hash = crypto.SHA256(combinedData).toString();
      setHash(hash);
      setShowQR(true);
      setIsProcessing(false);
    };

    reader.readAsDataURL(file);
  };


  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-code");
  
    if (!canvas) {
      console.error("QR code canvas not found!");
      return;
    }
  const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
  
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "aadhaar-hash-qr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
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
            Upload your Aadhaar card to generate a unique cryptographic hash and QR code. This acts as a tamper-proof identity verification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Upload Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Upload Aadhaar Card
            </h2>
            <form onSubmit={generateHash} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  placeholder="XXXX-XXXX-XXXX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  value={aadhaar}
                  onChange={(e) => setAadhaar(e.target.value)}
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
                {isProcessing ? 'Processing...' : 'Generate Hash & QR'}
              </button>
            </form>
          </div>

          {/* Hash + QR Display */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Lock className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Cryptographic Output
              </h2>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Generated Hash:</p>
              {hashValue ? (
                <div className="font-mono text-sm break-all bg-white p-4 rounded border border-gray-200">
                  {hashValue}
                </div>
              ) : (
                <div className="text-gray-500 italic">
                  Upload Aadhaar and file to generate a hash
                </div>
              )}
            </div>

            {showQR && (
              <div className="mt-6 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  QR Code for Verification
                </h3>
                <QRCodeCanvas value={hashValue} size={256} level="H" includeMargin />
                <p className="mt-4 text-sm break-all text-gray-600">{hashValue}</p>
                <canvas id="qr-code"></canvas>
<button
  onClick={downloadQRCode}
  className="mt-4 inline-flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
>
  🖨️ Download QR
</button>
              </div>
            )}

            {hashValue && (
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
