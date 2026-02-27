import React, { useState, useMemo } from 'react';
import { ARTICLES } from '@/data/news';
import { Link } from 'react-router-dom';
import { Eye, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { ResponsiveCarousel } from '@/components/ui/ResponsiveCarousel';

type TimePeriod = 'day' | 'week' | 'month';

export function MostReadSection() {
  const [period, setPeriod] = useState<TimePeriod>('week');

  // Simulate changing data based on period
  // In a real app, this would query the backend
  const topArticles = useMemo(() => {
    // Clone and sort by views
    let sorted = [...ARTICLES].sort((a, b) => (b.views || 0) - (a.views || 0));
    
    // Shuffle slightly based on period to simulate different results
    if (period === 'day') {
      sorted = [sorted[1], sorted[3], sorted[0]];
    } else if (period === 'month') {
      sorted = [sorted[0], sorted[2], sorted[4]];
    } else {
      sorted = [sorted[0], sorted[1], sorted[2]];
    }
    
    return sorted.slice(0, 3);
  }, [period]);

  return (
    <section className="container mx-auto px-6 max-w-7xl mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-zinc-100 pb-4">
        <div>
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2 block flex items-center">
            <TrendingUp className="w-3 h-3 mr-2" />
            Analytics
          </span>
          <h2 className="text-2xl font-serif font-bold text-zinc-900">Most Read</h2>
        </div>
        
        <div className="flex items-center space-x-1 mt-4 md:mt-0 bg-zinc-100 p-1 rounded-lg">
          {(['day', 'week', 'month'] as TimePeriod[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={cn(
                "px-4 py-1.5 text-xs font-bold uppercase tracking-wide rounded-md transition-all",
                period === p 
                  ? "bg-white text-black shadow-sm" 
                  : "text-zinc-500 hover:text-zinc-900"
              )}
            >
              {p === 'day' ? 'Today' : p === 'week' ? 'This Week' : 'This Month'}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveCarousel gridClasses="md:grid-cols-3 gap-8">
        <AnimatePresence mode='wait'>
          {topArticles.map((article, idx) => (
            <motion.div
              key={`${period}-${article.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="min-w-[280px] md:min-w-0 snap-center"
            >
              <Link to={`/news/${article.id}`} className="group block h-full flex flex-col">
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl mb-4 bg-zinc-100">
                  <span className="absolute top-4 left-4 z-10 bg-black text-white text-xl font-serif font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
                    {idx + 1}
                  </span>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <div className="flex items-center text-xs font-medium text-zinc-400">
                      <Eye className="w-3 h-3 mr-1" />
                      {new Intl.NumberFormat('en-US').format(article.views || 0)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-zinc-900 leading-tight mb-3 group-hover:text-zinc-600 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </ResponsiveCarousel>
    </section>
  );
}
