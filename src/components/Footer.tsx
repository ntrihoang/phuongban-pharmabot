import React from 'react';
import Link from 'next/link';
import { PlusCircle, MapPin, Phone, Clock, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                <PlusCircle className="w-5 h-5" />
              </div>
              <span className="font-bold text-base text-white">Nhà thuốc Phương Bản</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Điểm tựa chăm sóc sức khỏe gia đình với sự tận tâm, chu đáo và tư vấn thân thiện.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-3">
              Liên kết nhanh
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/#san-pham" className="hover:text-emerald-400 transition">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-emerald-400 transition">
                  Trợ lý AI
                </Link>
              </li>
              <li>
                <Link href="/#gioi-thieu" className="hover:text-emerald-400 transition">
                  Giới thiệu nhà thuốc
                </Link>
              </li>
            </ul>
          </div>

          {/* Pharmacy Info Placeholders */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-3">
              Thông tin liên hệ
            </h3>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>Cơ sở 1: thôn Hưng Công, xã Bình An, thành phố Ninh Bình</span>
                <span>Cơ sở 2: chợ Vọc, xã Bình Giang, thành phố Ninh Bình</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>098 882 5748 hoặc 035 311 8525</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>06:00 – 21:30 (Thứ Hai – Chủ Nhật)</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-3">
              Lưu ý y tế
            </h3>
            <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <Info className="w-3.5 h-3.5" />
                <span>Thông tin tham khảo</span>
              </div>
              <p className="leading-relaxed">
                Nội dung và câu trả lời từ trợ lý AI mang tính chất hỗ trợ thông tin thông dụng. Khi có triệu chứng bất thường hoặc bệnh lý nghiêm trọng, quý khách vui lòng thăm khám trực tiếp tại cơ sở y tế.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Nhà thuốc Phương Bản. Phiên bản giao diện mẫu (Frontend MVP).</p>
          <p>Dữ liệu sản phẩm và giá chỉ mang tính chất minh họa.</p>
        </div>
      </div>
    </footer>
  );
}
