import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section id='Hero'>
        <Hero />
        </section>

        <section id='Features'>
        <Features /></section>

        <section id='HowItWorks'>
        <HowItWorks /> </section>

        <section id='Testimonials'>
        <Testimonials /></section>
        <section id='FAQ'>
        <FAQ />
        </section>
      </main>
      <section id='Footer'>
      <Footer /></section>
    </div>
  );
}

export default App;