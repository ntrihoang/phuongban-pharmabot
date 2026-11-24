import React from 'react';
import Link from 'next/link';
import { Bot, ShieldCheck, Zap, ArrowRight, Pill, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 pt-10 pb-16 border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-semibold tracking-wide border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>24/7 AI-Powered Pharmacy Assistant</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Caring healthcare,{' '}
              <span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy decoration-2">
                simplified
              </span>{' '}
              for you.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              PharmaBot connects you to certified over-the-counter essentials and instant guidance. Ask questions about symptoms, discover vitamins, and get answers in seconds.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/chat"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition shadow-sm hover:shadow-md"
              >
                <Bot className="w-5 h-5" />
                <span>Chat with PharmaBot</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <Link
                href="/#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 font-medium border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition"
              >
                <Pill className="w-4 h-4 text-emerald-600" />
                <span>Browse Featured OTC</span>
              </Link>
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/70">
              <div className="space-y-0.5">
                <p className="text-xl font-bold text-slate-900">100%</p>
                <p className="text-xs text-slate-500 font-medium">Genuine Verified OTC</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-xl font-bold text-slate-900">&lt; 10s</p>
                <p className="text-xs text-slate-500 font-medium">Instant Bot Response</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-xl font-bold text-slate-900">2-Hour</p>
                <p className="text-xs text-slate-500 font-medium">Local Express Delivery</p>
              </div>
            </div>
          </div>

          {/* Right Card / Interactive Preview */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 p-5 space-y-4 relative">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-slate-800">PharmaBot Assistant</h3>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      <span>Online & Ready</span>
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                  Live Preview
                </span>
              </div>

              {/* Chat snippet mock */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[10px] font-bold shrink-0">
                    You
                  </div>
                  <div className="bg-slate-100 text-slate-800 px-3 py-2 rounded-xl rounded-tl-none max-w-[85%]">
                    I have a dry cough and mild fever. What can I take?
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 px-3 py-2.5 rounded-xl rounded-tl-none border border-emerald-100/80 max-w-[90%] space-y-2">
                    <p>
                      For mild symptoms, <strong>Paracetamol 500mg</strong> can help ease fever, while <strong>Herbal Soothe Lozenges</strong> calm throat irritation.
                    </p>
                    <div className="p-2 bg-white rounded-lg border border-emerald-200/70 flex items-center justify-between text-[11px]">
                      <span className="font-medium text-slate-800">Paracetamol Relief Extra</span>
                      <span className="font-bold text-emerald-700">$6.99</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat prompt link */}
              <div className="pt-2">
                <Link
                  href="/chat"
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold transition"
                >
                  <span>Open Full Chatbot Experience</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
