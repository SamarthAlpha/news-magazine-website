import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const EVENTS = [
  {
    id: 1,
    title: "Global AI Summit 2026",
    date: "March 15-17, 2026",
    location: "San Francisco, CA",
    description: "The premier gathering for AI researchers and enterprise leaders.",
    image: "https://picsum.photos/seed/event1/800/600"
  },
  {
    id: 2,
    title: "CyberSec Europe",
    date: "April 22-24, 2026",
    location: "London, UK",
    description: "Defending the digital frontier in an age of quantum threats.",
    image: "https://picsum.photos/seed/event2/800/600"
  },
  {
    id: 3,
    title: "Future of FinTech",
    date: "May 10, 2026",
    location: "Singapore",
    description: "Blockchain, DeFi, and the next generation of banking.",
    image: "https://picsum.photos/seed/event3/800/600"
  }
];

export function EventsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      <div className="bg-zinc-900 text-white py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4 block">Networking</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Industry Events</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Connect with peers and thought leaders at the world's most influential technology conferences.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl -mt-12">
        <div className="grid gap-8">
          {EVENTS.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row group hover:shadow-2xl transition-shadow duration-300">
              <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center flex-1">
                <div className="flex items-center space-x-6 text-sm font-medium text-zinc-500 mb-4">
                  <div className="flex items-center text-emerald-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-zinc-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {event.title}
                </h3>
                <p className="text-zinc-600 mb-8 leading-relaxed">
                  {event.description}
                </p>
                <button className="self-start flex items-center text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-emerald-700 hover:border-emerald-700 transition-colors">
                  Register Now <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
