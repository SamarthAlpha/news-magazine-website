import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

export function MagazinePage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="py-24 px-6 border-b border-zinc-100">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-end justify-between">
          <div>
            <h1 className="text-6xl md:text-9xl font-serif font-bold text-zinc-900 tracking-tighter leading-none">
              ISSUE<span className="text-zinc-200">04</span>
            </h1>
            <p className="text-xl text-zinc-500 mt-4 font-serif italic">
              The Quantum Edition • February 2026
            </p>
          </div>
          <button className="mt-8 md:mt-0 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-colors flex items-center">
            Subscribe to Print <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Cover Image */}
          <div className="lg:w-1/2 relative group perspective-1000">
            <div className="relative z-10 transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/magazine/800/1000" 
                alt="Magazine Cover" 
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-4xl font-serif font-bold mb-2">The Quantum Leap</h2>
                <p className="text-lg opacity-90">Exclusive interview with IBM's Chief Scientist</p>
              </div>
            </div>
            {/* Shadow/Reflection effect */}
            <div className="absolute top-4 left-4 w-full h-full bg-zinc-200 rounded-lg -z-10 transform rotate-3" />
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">In This Issue</h3>
              <ul className="space-y-6">
                {[
                  { title: "Quantum Supremacy: Are We There Yet?", page: "08" },
                  { title: "The CIO's Guide to Post-Quantum Cryptography", page: "14" },
                  { title: "Interview: Sam Altman on AGI", page: "22" },
                  { title: "Tech Hubs: Why Austin is Fading", page: "34" },
                  { title: "Luxury Tech: The $10,000 Smartwatch", page: "45" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-baseline justify-between group cursor-pointer border-b border-zinc-100 pb-4">
                    <h4 className="text-2xl font-serif font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">
                      {item.title}
                    </h4>
                    <span className="font-mono text-zinc-400 text-sm">p.{item.page}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-zinc-900 text-white py-4 rounded-xl font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center">
                Read Digital Edition
              </button>
              <button className="flex-1 border border-zinc-200 text-zinc-900 py-4 rounded-xl font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" /> Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
