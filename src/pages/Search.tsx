import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ARTICLES } from '@/data/news';
import { NewsCard } from '@/components/ui/NewsCard';
import { Search as SearchIcon } from 'lucide-react';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return ARTICLES.filter(article => 
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.category.toLowerCase().includes(lowerQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }, [query]);

  return (
    <div className="min-h-screen pb-20 pt-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12 border-b border-zinc-100 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 block">
            Search Results
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-4">
            {query ? `"${query}"` : 'All Articles'}
          </h1>
          <p className="text-zinc-500">
            Found {results.length} {results.length === 1 ? 'result' : 'results'} for your search.
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {results.map(article => (
              <NewsCard key={article.id} article={article} variant="standard" />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-zinc-50 rounded-2xl">
            <SearchIcon className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-zinc-900 mb-2">No results found</h3>
            <p className="text-zinc-500 max-w-md mx-auto">
              We couldn't find any articles matching "{query}". Try checking for typos or using different keywords.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
