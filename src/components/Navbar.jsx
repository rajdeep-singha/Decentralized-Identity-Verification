import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SecureID</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#Hero" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#Features" className="text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#HowItWorks" className="text-gray-700 hover:text-indigo-600">How It Works</a>
            <a href="#FAQ" className="text-gray-700 hover:text-indigo-600">Docs</a>
            <a href="#Footer" className="text-gray-700 hover:text-indigo-600">Contact</a>
            
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-md border border-indigo-600 hover:bg-indigo-50">
              Login
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#Hero" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
            <a href="#Features" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#HowItWorks" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">How It Works</a>
            <a href="#FAQ" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Docs</a>
            <a href="#Footer" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            
            <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600">
              Login
            </button>
            <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;