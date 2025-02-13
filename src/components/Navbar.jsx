import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Clipboard,Check } from 'lucide-react';
import Web3 from 'web3';

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
    setTimeout(() => setIsCopied(false), 3000); // Reset after 2 seconds
  };

  // Connect Wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setIsConnected(true);

        // Fetch Balance
        const balanceInWei = await web3.eth.getBalance(accounts[0]);
        setBalance(web3.utils.fromWei(balanceInWei, "ether"));

        // Get Network
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

  // Disconnect Wallet
  const disconnectWallet = () => {
    setAccount(null);
    setBalance(null);
    setNetwork("");
    setIsConnected(false);
  };

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

            {/* Wallet Connection Button */}
            {isConnected ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={disconnectWallet}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Disconnect
                </button>
                <span className="bg-green-700 px-3 py-1 rounded-md text-white text-sm">
                  {account.slice(0, 6)}...{account.slice(-4)}
                </span>
                <button
                          onClick={copyToClipboard}
                          className="text-indigo-700 hover:text-indigo-600 flex items-center space-x-2"
>
                           {isCopied ? (
                           <Check className="h-5 w-5 text-green-500" />
                            ) : (
                            <Clipboard className="h-5 w-5" />
                         )}
                           {isCopied && <span className="text-sm text-green-600">Address Copied!</span>}
                </button>
                <span className="text-sm text-gray-700">{balance} ETH</span>
                <span className="text-sm text-gray-700">({network})</span>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Connect Wallet
              </button>
            )}
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

            {isConnected ? (
              <button
                onClick={disconnectWallet}
                className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
              >
                Disconnect {account.slice(0, 6)}...{account.slice(-4)}
              </button>
            ) : (
              <button
                onClick={connectWallet}
                className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
