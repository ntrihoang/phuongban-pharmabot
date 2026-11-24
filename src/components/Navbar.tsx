'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, Menu, X, PlusCircle } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs group-hover:bg-emerald-700 transition">
              <PlusCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg text-slate-900 tracking-tight block">
                Nhà thuốc Phương Bản
              </span>
              <span className="text-[11px] text-emerald-700 font-medium hidden sm:block">
                Chăm sóc sức khỏe gia đình
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition ${
                pathname === '/' ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              Trang chủ
            </Link>
            <Link
              href="/#san-pham"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition"
            >
              Sản phẩm
            </Link>
            <Link
              href="/chat"
              className={`text-sm font-medium flex items-center gap-1.5 transition ${
                pathname === '/chat' ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              <Bot className="w-4 h-4 text-emerald-600" />
              <span>Trợ lý AI</span>
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition shadow-xs"
            >
              <Bot className="w-4 h-4" />
              <span>Hỏi đáp cùng Trợ lý AI</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Mở danh mục điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Trang chủ
          </Link>
          <Link
            href="/#san-pham"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Sản phẩm
          </Link>
          <Link
            href="/chat"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium text-emerald-700 bg-emerald-50"
          >
            <Bot className="w-4 h-4" />
            <span>Trợ lý AI</span>
          </Link>
        </div>
      )}
    </header>
  );
}
