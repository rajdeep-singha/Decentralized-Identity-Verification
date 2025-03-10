import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Web3 from 'web3';
import { Shield, Menu, X, Copy, Check, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState(null);
  const [network, setNetwork] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(account);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000); // Reset after 3 seconds
  };

 
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setIsConnected(true);

       
        const balanceInWei = await web3.eth.getBalance(accounts[0]);
        setBalance(web3.utils.fromWei(balanceInWei, "ether"));

        
        const netId = await web3.eth.net.getId();
        setNetwork(netId === 1 ? "Ethereum Mainnet" : "Test Network");
      } catch (error) {
        console.error("Connection error:", error);
        alert("Failed to connect MetaMask. Please try again.");
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask!");
    }
  };

  
  const disconnectWallet = () => {
    setAccount(null);
    setBalance(null);
    setNetwork("");
    setIsConnected(false);
  };

 
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SecureID</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleScrollTo('Hero')} className="text-gray-700 hover:text-indigo-600">Home</button>
            <button onClick={() => handleScrollTo('Features')} className="text-gray-700 hover:text-indigo-600">Features</button>
            <button onClick={() => handleScrollTo('HowItWorks')} className="text-gray-700 hover:text-indigo-600">How It Works</button>
            <button onClick={() => handleScrollTo('FAQ')} className="text-gray-700 hover:text-indigo-600">Docs</button>
            <button onClick={() => handleScrollTo('Footer')} className="text-gray-700 hover:text-indigo-600">Contact</button>

            {/* Wallet Section */}
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <span className="text-green-600 font-semibold">{balance} ETH</span>
                <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                  <span className="text-gray-800">{account.slice(0, 6)}...{account.slice(-4)}</span>
                  <button onClick={copyToClipboard} className="ml-2 text-gray-500 hover:text-gray-700">
                    {isCopied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                <button onClick={disconnectWallet} className="text-red-500 hover:text-red-700">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Connect Wallet
              </button>
            )}

            {/* "Get Started" Navigates to a Separate Page */}
            {/* <NavLink to="/get-started" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
              Get Started
            </NavLink> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-indigo-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button onClick={() => handleScrollTo('Hero')} className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</button>
            <button onClick={() => handleScrollTo('Features')} className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Features</button>
            <button onClick={() => handleScrollTo('HowItWorks')} className="block px-3 py-2 text-gray-700 hover:text-indigo-600">How It Works</button>
            <button onClick={() => handleScrollTo('FAQ')} className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Docs</button>
            <button onClick={() => handleScrollTo('Footer')} className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</button>

            {/* Wallet Section for Mobile */}
            {isConnected ? (
              <div className="flex flex-col items-center bg-gray-100 p-3 rounded-lg">
                <span className="text-green-600 font-semibold">{balance} ETH</span>
                <div className="flex items-center">
                  <span className="text-gray-800">{account.slice(0, 6)}...{account.slice(-4)}</span>
                  <button onClick={copyToClipboard} className="ml-2 text-gray-500 hover:text-gray-700">
                    {isCopied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                <button onClick={disconnectWallet} className="mt-2 text-red-500 hover:text-red-700">
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Connect Wallet
              </button>
            )}

            {/* "Get Started" */}
            <NavLink to="/get-started" className="block text-center px-3 py-2 bg-indigo-600 text-white rounded-md">
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
