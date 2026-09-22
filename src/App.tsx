/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ContactFooter } from './components/ContactFooter';
import { NeuralBackground } from './components/NeuralBackground';

export default function App() {
  return (
    <div id="portfolio-app" className="min-h-screen bg-[#09090b] text-[#f4f4f5] relative overflow-x-hidden selection:bg-red-600/30 selection:text-amber-300 font-sans">
      {/* Subtle AI-inspired Neural Network Canvas Background */}
      <NeuralBackground />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      {/* Contact & Footer */}
      <ContactFooter />
    </div>
  );
}
