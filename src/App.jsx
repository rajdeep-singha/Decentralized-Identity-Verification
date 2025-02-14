import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);

  return null;
};

const MainPage = ({ connectWallet, walletAddress }) => (
  <>
    <Navbar connectWallet={connectWallet} walletAddress={walletAddress} />
    <section id="Hero"><Hero /></section>
    <section id="Features"><Features /></section>
    <section id="HowItWorks"><HowItWorks /></section>
    <section id="Testimonials"><Testimonials /></section>
    <section id="FAQ"><FAQ /></section>
    <section id="Footer"><Footer /></section>
    
  </>
);

function App() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask not detected!");
    }
  };

  return (
    <Router basename="/Decentralized-Identity-Verification">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<MainPage connectWallet={connectWallet} walletAddress={walletAddress} />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}

export default App;
