import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { ARTICLES } from '@/data/news';
import { NewsCard } from '@/components/ui/NewsCard';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 9;

const CATEGORY_THEMES: Record<string, {
  headerBg: string;
  headerText: string;
  accentColor: string;
  fontStyle: string;
  layout: 'grid' | 'masonry' | 'list';
  description: string;
}> = {
  'ai-ml': {
    headerBg: 'bg-zinc-950',
    headerText: 'text-white',
    accentColor: 'text-emerald-400',
    fontStyle: 'font-mono',
    layout: 'grid',
    description: "Exploring the frontiers of artificial intelligence and machine learning."
  },
  'enterprise': {
    headerBg: 'bg-slate-50',
    headerText: 'text-slate-900',
    accentColor: 'text-blue-600',
    fontStyle: 'font-serif',
    layout: 'list',
    description: "Strategic insights for the modern enterprise."
  },
  'analysis': {
    headerBg: 'bg-zinc-100',
    headerText: 'text-zinc-800',
    accentColor: 'text-purple-600',
    fontStyle: 'font-serif',
    layout: 'list',
    description: "In-depth analysis and expert perspectives."
  },
  'case-studies': {
    headerBg: 'bg-zinc-900',
    headerText: 'text-white',
    accentColor: 'text-orange-500',
    fontStyle: 'font-sans',
    layout: 'grid',
    description: "Real-world success stories and implementation guides."
  },
  'trending': {
    headerBg: 'bg-white',
    headerText: 'text-black',
    accentColor: 'text-red-600',
    fontStyle: 'font-sans',
    layout: 'masonry',
    description: "The stories everyone is talking about right now."
  },
  'default': {
    headerBg: 'bg-white',
    headerText: 'text-zinc-900',
    accentColor: 'text-zinc-500',
    fontStyle: 'font-serif',
    layout: 'grid',
    description: "Latest updates and analysis."
  }
};

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');
  
  const normalizedCategory = category?.toLowerCase() || 'default';
  
  // Map URL param to theme key (simple mapping for demo)
  const themeKey = Object.keys(CATEGORY_THEMES).find(k => normalizedCategory.includes(k)) || 'default';
  const theme = CATEGORY_THEMES[themeKey];

  // Filter articles (mock logic)
  const allCategoryArticles = ARTICLES.filter(a => 
    normalizedCategory === 'trending' ? a.trending : 
    a.category.toLowerCase().includes(normalizedCategory.replace('-', ' ')) || 
    normalizedCategory === 'news' // Show all for /news
  );

  const totalPages = Math.ceil(allCategoryArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = allCategoryArticles.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Category Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "py-20 md:py-32 px-6 mb-12 border-b border-zinc-100",
          theme.headerBg
        )}
      >
        <div className="container mx-auto max-w-7xl">
          <span className={cn(
            "text-xs font-bold uppercase tracking-widest mb-4 block",
            theme.accentColor
          )}>
            Category
          </span>
          <h1 className={cn(
            "text-5xl md:text-7xl font-bold mb-6 tracking-tight",
            theme.headerText,
            theme.fontStyle
          )}>
            {category?.replace('-', ' ').toUpperCase()}
          </h1>
          <p className={cn(
            "text-xl max-w-2xl opacity-80",
            theme.headerText === 'text-white' ? 'text-zinc-400' : 'text-zinc-600'
          )}>
            {theme.description}
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-7xl">
        {paginatedArticles.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-serif text-zinc-500">No articles found in this category.</h3>
          </div>
        ) : (
          <>
            <div className={cn(
              "grid gap-x-8 gap-y-12 mb-16",
              theme.layout === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" :
              theme.layout === 'list' ? "grid-cols-1 max-w-4xl mx-auto" :
              "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Fallback for masonry
            )}>
              {paginatedArticles.map((article, idx) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <NewsCard 
                    article={article} 
                    variant={theme.layout === 'list' ? 'minimal' : 'standard'} 
                  />
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => handlePageChange(p)}
                      className={cn(
                        "w-10 h-10 rounded-full text-sm font-bold transition-colors",
                        page === p 
                          ? "bg-black text-white" 
                          : "text-zinc-500 hover:bg-zinc-100"
                      )}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
