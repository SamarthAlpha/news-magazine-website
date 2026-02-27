import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Article } from '@/data/news';

interface NewsCardProps {
  article: Article;
  variant?: 'featured' | 'standard' | 'compact' | 'minimal';
  className?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, variant = 'standard', className }) => {
  if (variant === 'featured') {
    return (
      <Link to={`/news/${article.id}`} className={cn("group block relative overflow-hidden rounded-2xl", className)}>
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
          <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold tracking-wider uppercase mb-4 rounded-full">
              {article.category}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              {article.title}
            </h2>
            <p className="text-zinc-300 text-lg line-clamp-2 max-w-2xl mb-6 font-light">
              {article.excerpt}
            </p>
            <div className="flex items-center text-white/80 text-sm space-x-4">
              <div className="flex items-center space-x-2">
                <img src={article.author.avatar} alt={article.author.name} className="w-6 h-6 rounded-full border border-white/20" />
                <span className="font-medium">{article.author.name}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/news/${article.id}`} className={cn("group flex gap-4 items-start", className)}>
        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-100">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1 block">
            {article.category}
          </span>
          <h3 className="text-base font-serif font-bold text-zinc-900 leading-snug group-hover:text-zinc-600 transition-colors line-clamp-2 mb-1">
            {article.title}
          </h3>
          <div className="flex items-center text-xs text-zinc-400">
            <span>{article.readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'minimal') {
    return (
      <Link to={`/news/${article.id}`} className={cn("group block border-b border-zinc-100 py-4 last:border-0", className)}>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            {article.category}
          </span>
          <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-black transition-colors" />
        </div>
        <h3 className="text-lg font-serif font-bold text-zinc-900 leading-tight group-hover:text-zinc-600 transition-colors mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-zinc-500 line-clamp-2">
          {article.excerpt}
        </p>
      </Link>
    );
  }

  // Standard
  return (
    <Link to={`/news/${article.id}`} className={cn("group block", className)}>
      <div className="aspect-[3/2] w-full overflow-hidden rounded-xl mb-4 bg-zinc-100">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider border-b border-black pb-0.5">
            {article.category}
          </span>
          <span className="text-xs text-zinc-400">{article.readTime}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-zinc-900 leading-tight mb-3 group-hover:text-zinc-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center text-xs font-medium text-zinc-900 mt-auto group-hover:underline decoration-zinc-300 underline-offset-4">
          Read Article <ArrowUpRight className="w-3 h-3 ml-1" />
        </div>
      </div>
    </Link>
  );
}
