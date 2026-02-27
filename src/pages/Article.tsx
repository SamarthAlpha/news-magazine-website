import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '@/data/news';
import { 
  Clock, Calendar, Share2, ThumbsUp, ThumbsDown, 
  Facebook, Twitter, Linkedin, Instagram, MessageCircle, Send,
  Copy, Check
} from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export function ArticlePage() {
  const { id } = useParams();
  const article = ARTICLES.find(a => a.id === id) || ARTICLES[0]; // Fallback for demo
  const [likes, setLikes] = useState(124);
  const [dislikes, setDislikes] = useState(12);
  const [userAction, setUserAction] = useState<'like' | 'dislike' | null>(null);
  const [copied, setCopied] = useState(false);

  const handleLike = () => {
    if (userAction === 'like') {
      setLikes(l => l - 1);
      setUserAction(null);
    } else {
      if (userAction === 'dislike') setDislikes(d => d - 1);
      setLikes(l => l + 1);
      setUserAction('like');
    }
  };

  const handleDislike = () => {
    if (userAction === 'dislike') {
      setDislikes(d => d - 1);
      setUserAction(null);
    } else {
      if (userAction === 'like') setLikes(l => l - 1);
      setDislikes(d => d + 1);
      setUserAction('dislike');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="pb-20">
      {/* Header */}
      <header className="container mx-auto px-6 max-w-4xl pt-12 pb-12 text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Link 
            to={`/category/${article.category.toLowerCase()}`}
            className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-colors"
          >
            {article.category}
          </Link>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 leading-tight mb-8">
          {article.title}
        </h1>
        <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-center space-x-8 text-sm text-zinc-500 border-y border-zinc-100 py-6">
          <div className="flex items-center space-x-3">
            <img src={article.author.avatar} alt={article.author.name} className="w-10 h-10 rounded-full" />
            <div className="text-left">
              <div className="font-bold text-zinc-900">{article.author.name}</div>
              <div className="text-xs">{article.author.role}</div>
            </div>
          </div>
          <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {format(new Date(article.publishedAt), 'MMM d, yyyy')}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {article.readTime}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="container mx-auto px-6 max-w-6xl mb-16">
        <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-xl">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-center text-xs text-zinc-400 mt-4 italic">
          Image source: Unsplash / ExecuTech Visuals
        </p>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-3xl">
        <div 
          className="prose prose-lg prose-zinc max-w-none 
          prose-headings:font-serif prose-headings:font-bold 
          prose-p:text-zinc-600 prose-p:leading-loose 
          prose-a:text-black prose-a:no-underline prose-a:border-b prose-a:border-black/20 hover:prose-a:border-black
          prose-img:rounded-xl prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Engagement & Share */}
        <div className="mt-16 pt-8 border-t border-zinc-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Likes */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleLike}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-full border transition-all",
                  userAction === 'like' 
                    ? "bg-black text-white border-black" 
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"
                )}
              >
                <ThumbsUp className="w-4 h-4" />
                <span className="font-medium">{likes}</span>
              </button>
              <button 
                onClick={handleDislike}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-full border transition-all",
                  userAction === 'dislike' 
                    ? "bg-zinc-200 text-black border-zinc-300" 
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"
                )}
              >
                <ThumbsDown className="w-4 h-4" />
                <span className="font-medium">{dislikes}</span>
              </button>
            </div>

            {/* Share */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest mr-2">Share</span>
              
              <button 
                className="p-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors shadow-sm hover:shadow-md"
                title="Share on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              
              <button 
                className="p-2.5 rounded-full bg-[#0088cc] text-white hover:bg-[#007db1] transition-colors shadow-sm hover:shadow-md"
                title="Share on Telegram"
              >
                <Send className="w-4 h-4" />
              </button>
              
              <button 
                className="p-2.5 rounded-full bg-black text-white hover:bg-zinc-800 transition-colors shadow-sm hover:shadow-md"
                title="Share on X"
              >
                <Twitter className="w-4 h-4" />
              </button>
              
              <button 
                className="p-2.5 rounded-full bg-[#1877F2] text-white hover:bg-[#166fe5] transition-colors shadow-sm hover:shadow-md"
                title="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
              
              <button 
                className="p-2.5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90 transition-opacity shadow-sm hover:shadow-md"
                title="Share on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </button>

              <div className="w-px h-6 bg-zinc-200 mx-2" />

              <button 
                onClick={handleCopyLink}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                  copied 
                    ? "bg-emerald-100 text-emerald-700 border border-emerald-200" 
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 border border-transparent"
                )}
              >
                {copied ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                {copied ? 'Copied' : 'Copy Link'}
              </button>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-16 bg-zinc-50 p-8 rounded-2xl flex items-start space-x-6">
          <img src={article.author.avatar} alt={article.author.name} className="w-16 h-16 rounded-full" />
          <div>
            <h3 className="font-serif text-lg font-bold text-zinc-900 mb-2">About {article.author.name}</h3>
            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
              {article.author.role} at ExecuTech. Specializing in enterprise architecture and digital transformation strategies.
              Previously served as CTO for a Fortune 500 logistics firm.
            </p>
            <button className="text-xs font-bold uppercase tracking-widest text-black border-b border-black pb-0.5 hover:opacity-70">
              View all articles
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-20 border-t border-zinc-100 pt-16">
          <h3 className="font-serif text-2xl font-bold mb-8">Related Intelligence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES.filter(a => a.id !== article.id && a.category === article.category).slice(0, 2).map(related => (
              <Link key={related.id} to={`/news/${related.id}`} className="group block">
                <div className="aspect-[3/2] w-full overflow-hidden rounded-xl mb-4 bg-zinc-100">
                  <img 
                    src={related.image} 
                    alt={related.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 block">
                  {related.category}
                </span>
                <h4 className="text-xl font-serif font-bold text-zinc-900 leading-tight group-hover:text-zinc-600 transition-colors">
                  {related.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
