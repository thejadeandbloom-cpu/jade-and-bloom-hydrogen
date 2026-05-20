// app/components/Header.jsx
// Navigation Header for Jade and Bloom

import { useState } from 'react';
import { Link } from '@shopify/remix-oxygen';

export default function Header({ shop }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e0d4c7]">
      {/* Top Bar with Contact Info */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-[#f5ebe0] text-sm text-[#1a1a1a]">
        <div>📞 +91 9876543210</div>
        <div>✉️ hello@thejadeandbloom.com</div>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/the.jadeandbloom/" target="_blank" rel="noopener" className="hover:text-[#C65D3B]">Instagram</a>
          <a href="https://www.youtube.com/@jadeandbloom" target="_blank" rel="noopener" className="hover:text-[#C65D3B]">YouTube</a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 py-4 md:px-6 md:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold" style={{ fontFamily: 'Cinzel Decorative, serif' }}>
              Jade and Bloom
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/shop" className="text-[#1a1a1a] hover:text-[#C65D3B] font-medium transition">
              Shop
            </Link>
            <Link to="/story" className="text-[#1a1a1a] hover:text-[#C65D3B] font-medium transition">
              Our Story
            </Link>
            <Link to="/ingredients" className="text-[#1a1a1a] hover:text-[#C65D3B] font-medium transition">
              Ingredients
            </Link>
            <Link to="/reviews" className="text-[#1a1a1a] hover:text-[#C65D3B] font-medium transition">
              Reviews
            </Link>
            <a href="https://jovial-crostata-9caec5.netlify.app/" target="_blank" rel="noopener" className="text-[#1a1a1a] hover:text-[#C65D3B] font-medium transition">
              Quiz
            </a>
          </div>

          {/* Cart Icon (Placeholder) */}
          <div className="flex items-center gap-4">
            <button className="md:hidden text-[#1a1a1a] text-2xl">
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
            <Link to="/cart" className="relative">
              <svg className="w-6 h-6 text-[#1a1a1a] hover:text-[#C65D3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-[#C65D3B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link to="/shop" className="block px-4 py-2 text-[#1a1a1a] hover:bg-[#f5ebe0] rounded">Shop</Link>
            <Link to="/story" className="block px-4 py-2 text-[#1a1a1a] hover:bg-[#f5ebe0] rounded">Our Story</Link>
            <Link to="/ingredients" className="block px-4 py-2 text-[#1a1a1a] hover:bg-[#f5ebe0] rounded">Ingredients</Link>
            <Link to="/reviews" className="block px-4 py-2 text-[#1a1a1a] hover:bg-[#f5ebe0] rounded">Reviews</Link>
            <a href="https://jovial-crostata-9caec5.netlify.app/" target="_blank" rel="noopener" className="block px-4 py-2 text-[#1a1a1a] hover:bg-[#f5ebe0] rounded">Quiz</a>
          </div>
        )}
      </nav>

      {/* Scroll Shadow */}
      <style>{`
        header {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </header>
  );
}
