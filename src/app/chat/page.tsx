import React, { Suspense } from 'react';
import ChatInterface from '@/components/ChatInterface';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Trợ lý AI - Nhà thuốc Phương Bản',
  description: 'Hỗ trợ giải đáp các câu hỏi thường gặp về sản phẩm chăm sóc sức khỏe mẫu và thông tin nhà thuốc.',
};

export default function ChatPage() {
  return (
    <div className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top navigation helper */}
      <div className="max-w-4xl mx-auto mb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-700 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại Trang chủ</span>
        </Link>
        <span className="text-xs text-slate-400 font-medium">Nhà thuốc Phương Bản</span>
      </div>

      {/* Chat Area with Suspense boundary */}
      <Suspense
        fallback={
          <div className="max-w-4xl mx-auto h-[550px] bg-white rounded-2xl border border-slate-200 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin"></div>
              <span className="text-xs text-slate-500 font-medium">Đang tải Trợ lý AI...</span>
            </div>
          </div>
        }
      >
        <ChatInterface />
      </Suspense>
    </div>
  );
}
