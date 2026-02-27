import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Search, User, Globe, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { 
    label: 'News', 
    href: '/news',
    subItems: [
      { label: 'Trending', href: '/news/trending', desc: 'Most read stories today' },
      { label: 'Enterprise', href: '/news/enterprise', desc: 'Corporate tech strategies' },
      { label: 'Startups', href: '/news/startups', desc: 'Emerging disruptors' },
      { label: 'Policy', href: '/news/policy', desc: 'Global tech regulations' },
    ]
  },
  { 
    label: 'Technology', 
    href: '/technology',
    subItems: [
      { label: 'AI & ML', href: '/technology/ai-ml', desc: 'Artificial Intelligence' },
      { label: 'Cloud', href: '/technology/cloud', desc: 'Infrastructure & SaaS' },
      { label: 'Cybersecurity', href: '/technology/cybersecurity', desc: 'Security & Privacy' },
      { label: 'Blockchain', href: '/technology/blockchain', desc: 'Web3 & Crypto' },
    ]
  },
  { 
    label: 'Analysis', 
    href: '/analysis',
    subItems: [
      { label: 'Case Studies', href: '/analysis/case-studies', desc: 'Deep dives into success' },
      { label: 'Opinion', href: '/analysis/opinion', desc: 'Expert perspectives' },
      { label: 'Reports', href: '/analysis/reports', desc: 'Data-driven insights' },
    ]
  },
  { label: 'Events', href: '/events' },
  { label: 'Awards', href: '/awards' },
  { label: 'Magazine', href: '/magazine' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
    setIsSearchOpen(false);
  }, [location]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
          isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-zinc-100" : "bg-white py-6 border-zinc-100"
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-50 group">
              <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-tighter text-zinc-900 group-hover:opacity-80 transition-opacity">
                CIO TECH WORLD<span className="text-zinc-400">.</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className={cn(
              "hidden lg:flex items-center space-x-8 transition-opacity duration-200",
              isSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}>
              {NAV_ITEMS.map((item) => (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(item.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link 
                    to={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium tracking-wide transition-colors py-2",
                      activeSubmenu === item.label ? "text-black" : "text-zinc-500 hover:text-black"
                    )}
                  >
                    {item.label}
                    {item.subItems && (
                      <ChevronDown className={cn(
                        "ml-1 w-3 h-3 transition-transform duration-300",
                        activeSubmenu === item.label ? "rotate-180" : ""
                      )} />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {item.subItems && activeSubmenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                      >
                        <div className="bg-white border border-zinc-100 shadow-xl rounded-xl p-4 overflow-hidden">
                          <div className="flex flex-col space-y-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="group/item block p-3 rounded-lg hover:bg-zinc-50 transition-colors"
                              >
                                <div className="text-sm font-semibold text-zinc-900 group-hover/item:text-black">
                                  {subItem.label}
                                </div>
                                <div className="text-xs text-zinc-500 mt-0.5 font-medium">
                                  {subItem.desc}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className={cn(
              "hidden lg:flex items-center space-x-6 transition-opacity duration-200",
              isSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-zinc-400 hover:text-black transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <div className="h-4 w-px bg-zinc-200" />
              <button className="text-sm font-medium text-zinc-500 hover:text-black transition-colors">
                Sign In
              </button>
              <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200">
                Subscribe
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 lg:hidden">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-zinc-800 p-2"
              >
                <Search className="w-6 h-6" />
              </button>
              <button 
                className="relative z-50 p-2 -mr-2 text-zinc-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Search Overlay */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-white z-40 flex items-center justify-center"
              >
                <form onSubmit={handleSearch} className="w-full max-w-3xl relative flex items-center">
                  <Search className="w-5 h-5 text-zinc-400 mr-4 flex-shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search news, topics, and analysis..."
                    className="w-full bg-transparent border-none text-xl md:text-2xl font-serif placeholder:text-zinc-300 focus:ring-0 focus:outline-none py-2 text-zinc-900"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button 
                    type="button" 
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 hover:bg-zinc-100 rounded-full transition-colors ml-4"
                  >
                    <X className="w-5 h-5 text-zinc-500" />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-24 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col space-y-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-zinc-100 pb-4 last:border-0">
                  <Link 
                    to={item.href}
                    className="text-2xl font-serif font-medium text-zinc-900 block mb-2"
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="pl-4 flex flex-col space-y-3 mt-2 border-l border-zinc-100">
                      {item.subItems.map((subItem) => (
                        <Link 
                          key={subItem.label}
                          to={subItem.href}
                          className="text-sm text-zinc-500 font-medium block"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 flex flex-col space-y-4">
                <button className="w-full bg-black text-white py-4 rounded-xl text-lg font-medium">
                  Subscribe Now
                </button>
                <button className="w-full border border-zinc-200 text-zinc-900 py-4 rounded-xl text-lg font-medium">
                  Sign In
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
