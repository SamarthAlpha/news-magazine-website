import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="block mb-6">
              <h2 className="font-serif text-3xl font-bold text-white tracking-tighter">
                CIO TECH WORLD.
              </h2>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-zinc-500">
              The premier source for enterprise technology leaders. 
              Delivering insights, analysis, and trends that shape the future of business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-6">Sections</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/news" className="hover:text-white transition-colors">Latest News</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/analysis" className="hover:text-white transition-colors">Analysis</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/awards" className="hover:text-white transition-colors">Awards</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-6">Subscribe</h3>
            <p className="text-sm text-zinc-500 mb-4">
              Get the latest insights delivered to your inbox daily.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-zinc-700 text-sm placeholder:text-zinc-600"
              />
              <button className="bg-white text-black font-medium py-3 rounded-lg hover:bg-zinc-200 transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} CIO Tech World. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/sitemap" className="hover:text-zinc-400">Sitemap</Link>
            <Link to="/accessibility" className="hover:text-zinc-400">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
