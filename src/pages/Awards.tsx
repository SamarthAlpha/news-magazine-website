import React from 'react';
import { Award, Star } from 'lucide-react';

export function AwardsPage() {
  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="py-32 px-6 text-center bg-gradient-to-b from-zinc-900 to-black">
        <Award className="w-16 h-16 text-yellow-500 mx-auto mb-8" />
        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200">
          The CIO 100
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
          Honoring the visionary leaders driving digital transformation and business value.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-colors group text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-zinc-800 mb-6 overflow-hidden border-2 border-zinc-700 group-hover:border-yellow-500 transition-colors">
                <img src={`https://picsum.photos/seed/ceo${i}/200/200`} alt="Winner" className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-1">Jane Doe</h3>
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">CIO, TechCorp Global</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                "For pioneering the use of generative AI in supply chain optimization, reducing costs by 40%."
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
