'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { Info, MessageSquare, ChevronRight, X } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showDetail, setShowDetail] = useState(false);

  const formattedPrice = new Intl.NumberFormat('vi-VN').format(product.price);

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group">
        {/* Product Visual Area */}
        <div className="relative bg-slate-50 p-6 flex items-center justify-center border-b border-slate-100 group-hover:bg-emerald-50/30 transition">
          {product.tag && (
            <span className="absolute top-3 left-3 bg-emerald-100 text-emerald-800 text-[11px] font-medium px-2 py-0.5 rounded-full">
              {product.tag}
            </span>
          )}
          <span className="text-5xl select-none transform group-hover:scale-105 transition duration-200 py-2">
            {product.imageEmoji}
          </span>
          <span className="absolute bottom-2 right-3 text-[10px] text-slate-400 bg-white/80 px-1.5 py-0.5 rounded border border-slate-200/60">
            {product.category}
          </span>
        </div>

        {/* Content details */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
          <div className="space-y-1.5">
            <h3 className="font-semibold text-slate-900 text-base leading-snug group-hover:text-emerald-700 transition">
              {product.name}
            </h3>

            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Pricing & CTA */}
          <div className="pt-3 border-t border-slate-100 flex items-end justify-between gap-2">
            <div>
              <span className="text-[10px] text-slate-400 block font-normal">Giá minh họa</span>
              <span className="text-base font-bold text-emerald-800">
                {formattedPrice} đ
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowDetail(true)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 transition cursor-pointer"
            >
              <span>Tìm hiểu thêm</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal chi tiết sản phẩm minh họa */}
      {showDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-100 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="text-4xl p-2 bg-slate-50 rounded-xl border border-slate-100">
                  {product.imageEmoji}
                </span>
                <div>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {product.category}
                  </span>
                  <h4 className="font-bold text-slate-900 text-base mt-1">{product.name}</h4>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowDetail(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-600 border-y border-slate-100 py-3">
              <p><strong>Mô tả:</strong> {product.description}</p>
              {product.dosage && (
                <p><strong>Cách dùng gợi ý:</strong> {product.dosage}</p>
              )}
              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-500">Giá tham khảo (minh họa):</span>
                <span className="font-bold text-emerald-700 text-sm">{formattedPrice} đ</span>
              </div>
            </div>

            <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-200/70 text-[11px] text-amber-900 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              <span>
                Đây là dữ liệu sản phẩm minh họa cho giao diện web. Quý khách vui lòng trao đổi cùng dược sĩ hoặc tham khảo ý kiến chuyên môn trước khi sử dụng.
              </span>
            </div>

            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowDetail(false)}
                className="px-3.5 py-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100 transition"
              >
                Đóng
              </button>
              <Link
                href={`/chat?prompt=${encodeURIComponent(`Xin tư vấn thêm về sản phẩm: ${product.name}`)}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Hỏi trợ lý AI về sản phẩm</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
