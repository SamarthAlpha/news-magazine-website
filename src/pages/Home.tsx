import React from 'react';
import { ARTICLES } from '@/data/news';
import { NewsCard } from '@/components/ui/NewsCard';
import { ArrowRight, TrendingUp, Zap, Shield, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MostReadSection } from '@/components/home/MostReadSection';

export function Home() {
  const featuredArticle = ARTICLES.find(a => a.featured) || ARTICLES[0];
  const trendingArticles = ARTICLES.filter(a => a.trending).slice(0, 3);
  const latestArticles = ARTICLES.slice(0, 6);
  const techArticles = ARTICLES.filter(a => a.category === 'Technology' || a.category === 'AI & ML').slice(0, 4);
  const analysisArticles = ARTICLES.filter(a => a.category === 'Analysis' || a.category === 'Enterprise').slice(0, 3);

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-7xl mb-12 md:mb-16 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Feature */}
          <div className="lg:col-span-8">
            <NewsCard article={featuredArticle} variant="featured" className="h-full" />
          </div>
          
          {/* Top Stories Sidebar */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex items-center space-x-2 border-b border-black pb-2 mb-2">
              <Zap className="w-4 h-4 text-amber-500 fill-current" />
              <h3 className="font-bold uppercase tracking-widest text-sm">Top Stories</h3>
            </div>
            {ARTICLES.slice(1, 4).map((article) => (
              <NewsCard key={article.id} article={article} variant="compact" />
            ))}
            
            {/* Ad / Promo Placeholder */}
            <div className="bg-zinc-100 rounded-xl p-6 text-center mt-auto">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Advertisement</p>
              <h4 className="font-serif font-bold text-lg mb-4">CIO Tech World Summit 2026</h4>
              <button className="bg-black text-white text-xs font-bold uppercase px-4 py-2 rounded-full">
                Get Tickets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Ticker */}
      <section className="bg-black text-white py-4 mb-16 overflow-hidden whitespace-nowrap">
        <div className="container mx-auto px-6 max-w-7xl flex items-center">
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs mr-6 flex items-center">
            <TrendingUp className="w-3 h-3 mr-2" /> Market Movers
          </span>
          <div className="flex space-x-12 text-sm font-medium text-zinc-300 animate-marquee">
            <span>NVDA <span className="text-green-400">▲ 2.4%</span></span>
            <span>MSFT <span className="text-green-400">▲ 1.1%</span></span>
            <span>GOOGL <span className="text-red-400">▼ 0.5%</span></span>
            <span>TSLA <span className="text-green-400">▲ 3.2%</span></span>
            <span>BTC <span className="text-green-400">▲ 5.8%</span></span>
            <span>ETH <span className="text-green-400">▲ 4.1%</span></span>
            <span>AAPL <span className="text-zinc-500">▬ 0.0%</span></span>
          </div>
        </div>
      </section>

      {/* Technology Focus Grid */}
      <section className="container mx-auto px-6 max-w-7xl mb-20">
        <div className="flex items-end justify-between mb-10 border-b border-zinc-100 pb-4">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">Innovation</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">The Tech Stack</h2>
          </div>
          <Link to="/technology" className="hidden md:flex items-center text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors">
            View All Tech <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techArticles.map(article => (
            <div key={article.id} className="group">
              <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-zinc-100 relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md">
                    {article.category}
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                <Link to={`/news/${article.id}`}>{article.title}</Link>
              </h3>
              <p className="text-sm text-zinc-500 line-clamp-2">{article.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Brief (Analysis) - Dark Section */}
      <section className="bg-zinc-900 text-white py-20 mb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4 block">Deep Dives</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Executive Briefing</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Critical analysis for decision makers. We cut through the noise to bring you the strategic implications of today's tech news.
              </p>
              <button className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Read All Analysis
              </button>
            </div>
            
            <div className="md:w-2/3 grid gap-8">
              {analysisArticles.map(article => (
                <Link key={article.id} to={`/news/${article.id}`} className="flex flex-col md:flex-row gap-6 group border-b border-zinc-800 pb-8 last:border-0 last:pb-0">
                  <div className="md:w-1/3 aspect-[3/2] overflow-hidden rounded-lg">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center space-x-2 mb-2">
                      <img src={article.author.avatar} alt={article.author.name} className="w-5 h-5 rounded-full" />
                      <span className="text-xs font-bold text-zinc-400 uppercase">{article.author.name}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-purple-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-zinc-500 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Sidebar */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8 border-b border-zinc-100 pb-4">
              <h2 className="text-2xl font-serif font-bold text-zinc-900">Latest Intelligence</h2>
              <Link to="/news" className="text-sm text-zinc-500 hover:text-black">View Archive</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-20">
              {latestArticles.map(article => (
                <NewsCard key={article.id} article={article} variant="standard" />
              ))}
            </div>

            {/* Most Read Section (Inserted Here) */}
            <MostReadSection />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            {/* Newsletter Widget */}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
              <h3 className="font-serif text-xl font-bold mb-2">The Daily Brief</h3>
              <p className="text-zinc-500 text-sm mb-6">
                Join 50,000+ leaders who start their day with CIO Tech World.
              </p>
              <input 
                type="email" 
                placeholder="Work email address" 
                className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm mb-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
              <button className="w-full bg-black text-white font-bold py-3 rounded-lg text-sm hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200">
                Subscribe Free
              </button>
            </div>

            {/* Trending Topics */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-6 border-b border-zinc-100 pb-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" /> Trending Now
              </h3>
              <div className="space-y-4">
                {trendingArticles.map((article, idx) => (
                  <Link key={article.id} to={`/news/${article.id}`} className="flex gap-4 group">
                    <span className="text-2xl font-bold text-zinc-200 font-serif group-hover:text-zinc-300">0{idx + 1}</span>
                    <div>
                      <h4 className="font-bold text-sm leading-snug group-hover:text-zinc-600 transition-colors mb-1">
                        {article.title}
                      </h4>
                      <span className="text-xs text-zinc-400">{article.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link to="/news/trending" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-black mt-6 transition-colors group">
                View All Trending <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Topics Cloud */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-6 border-b border-zinc-100 pb-2">Explore Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['AI Strategy', 'Cloud Security', 'Digital Transformation', 'FinTech', 'Leadership', 'Policy', 'Sustainability', 'Quantum', 'Biotech', 'Space'].map(topic => (
                  <Link 
                    key={topic} 
                    to={`/topic/${topic.toLowerCase().replace(' ', '-')}`}
                    className="px-3 py-1.5 bg-white text-zinc-600 text-xs font-medium rounded-full hover:bg-black hover:text-white transition-colors border border-zinc-200"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
