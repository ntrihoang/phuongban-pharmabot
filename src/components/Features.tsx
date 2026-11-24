import React from 'react';
import { ShieldCheck, MessageSquare, Truck, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: '24/7 Virtual Pharmacy Chat',
    description:
      'Ask questions about symptom relief, dosages, and common drug interactions with instant, safe guidance.',
  },
  {
    icon: ShieldCheck,
    title: 'Pharmacist-Reviewed Catalog',
    description:
      'All listed medications and supplements are standard over-the-counter formulas verified for consumer safety.',
  },
  {
    icon: Truck,
    title: 'Fast Doorstep Delivery',
    description:
      'Local contactless 2-hour express dispatch for urgent remedies, packed with temperature monitoring.',
  },
  {
    icon: HeartPulse,
    title: 'Patient-First Privacy',
    description:
      'We respect your personal health queries with clean and secure digital communication standards.',
  },
];

export default function Features() {
  return (
    <section id="safety" className="py-14 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold text-emerald-700 tracking-wider uppercase mb-2">
            Trust & Quality Standards
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Designed for dependable everyday wellness
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Simple, trustworthy, and modern healthcare support right when you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-emerald-200 hover:bg-emerald-50/20 transition-all duration-200 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 text-base">{feature.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
