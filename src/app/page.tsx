'use client';

import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/data/products';
import {
  PlusCircle,
  Bot,
  ArrowRight,
  HeartHandshake,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  Building2,
  MapPin,
  HelpCircle,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-slate-50 pt-12 pb-16 border-b border-emerald-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-medium border border-emerald-200">
                <PlusCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Nhà thuốc Phương Bản — Chăm sóc sức khỏe gia đình</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Chăm sóc sức khỏe,{' '}
                <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2">
                  tận tâm
                </span>{' '}
                từ những điều nhỏ nhất.
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Chào mừng bạn đến với Nhà thuốc Phương Bản. Chúng tôi đồng hành cùng gia đình bạn trong việc tìm hiểu các sản phẩm chăm sóc sức khỏe thông dụng và giải đáp thắc mắc thường ngày nhanh chóng, thuận tiện.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/#san-pham"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition shadow-xs hover:shadow"
                >
                  <span>Khám phá sản phẩm</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/chat"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 text-sm font-semibold border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition"
                >
                  <Bot className="w-4 h-4 text-emerald-600" />
                  <span>Trò chuyện cùng trợ lý AI</span>
                </Link>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/60 max-w-lg">
                <div className="space-y-0.5">
                  <p className="text-base font-bold text-slate-900">Tận tâm</p>
                  <p className="text-xs text-slate-500">Tư vấn chu đáo</p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-base font-bold text-slate-900">Rõ ràng</p>
                  <p className="text-xs text-slate-500">Thông tin minh bạch</p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-base font-bold text-slate-900">24/7</p>
                  <p className="text-xs text-slate-500">Trợ lý hỗ trợ hỏi đáp</p>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100/90 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                      <PlusCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Nhà thuốc Phương Bản</h3>
                      <p className="text-xs text-emerald-700 font-medium">Không gian chăm sóc sức khỏe</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200/50">
                    Mở cửa hàng ngày
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Cung cấp các sản phẩm thiết yếu cho gia đình: vitamin, nước súc miệng, băng gạc, dung dịch xịt mũi.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Hỗ trợ tra cứu nhanh các câu hỏi thường gặp về sức khỏe thông qua trợ lý trực tuyến.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/chat"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold transition"
                  >
                    <Bot className="w-4 h-4" />
                    <span>Nhắn tin cùng Trợ lý AI ngay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION (Giới thiệu về Nhà thuốc Phương Bản) */}
      <section id="gioi-thieu" className="py-16 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Giới thiệu
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Về Nhà thuốc Phương Bản
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Nhà thuốc Phương Bản được hình thành với mong muốn trở thành một điểm tựa sức khỏe thân thuộc, gần gũi cho mọi người dân trong khu vực. Chúng tôi tin rằng sự chăm sóc đúng đắn và lời khuyên trung thực, tận tâm chính là điều quý giá nhất dành cho người bệnh và gia đình.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed italic bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              * Ghi chú: Phần nội dung giới thiệu hiện đang sử dụng thông tin mẫu đại diện để hoàn thiện giao diện trang web (MVP) trước khi cập nhật toàn bộ lịch sử và giấy phép của cơ sở thực tế.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS (Sản phẩm tiêu biểu) */}
      <section id="san-pham" className="py-16 bg-slate-50/70 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-100/70 px-3 py-1 rounded-full">
              Danh mục tham khảo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sản phẩm tiêu biểu
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Một số mặt hàng chăm sóc sức khỏe gia đình phổ biến (Dữ liệu minh họa hiển thị mẫu).
            </p>
          </div>

          {/* Grid 4-6 sample products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400">
              * Giá và thông tin hiển thị ở trên là dữ liệu mẫu phục vụ phát triển giao diện người dùng.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Vì sao chọn chúng tôi - 3 Benefit Cards) */}
      <section className="py-16 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Giá trị cốt lõi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Vì sao chọn Nhà thuốc Phương Bản?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Chúng tôi luôn hướng đến sự hài lòng và cảm giác an tâm của từng khách hàng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all duration-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Tư vấn tận tâm, chu đáo</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Luôn kiên nhẫn lắng nghe tình trạng và chia sẻ những hướng dẫn sử dụng đơn giản, an toàn, phù hợp cho từng độ tuổi trong gia đình.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all duration-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Sản phẩm rõ ràng, minh bạch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tất cả các sản phẩm thông dụng đều có thông tin công khai, bao bì nguyên vẹn và hạn sử dụng rõ ràng để khách hàng dễ dàng theo dõi.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all duration-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Hỗ trợ tiện lợi, nhanh chóng</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bạn có thể tra cứu thông tin sản phẩm trên website hoặc trò chuyện hỏi đáp nhanh cùng trợ lý trực tuyến bất cứ lúc nào.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CHATBOT CTA SECTION */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-700/35 border border-emerald-500/30 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-semibold border border-emerald-400/30">
                <Bot className="w-3.5 h-3.5" />
                <span>Trợ lý AI Nhà thuốc Phương Bản</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Bạn cần tìm hiểu thông tin sản phẩm hay cách chăm sóc sức khỏe?
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Trợ lý AI của chúng tôi sẵn sàng giải đáp các thắc mắc thông thường về liều lượng tham khảo, công dụng các sản phẩm mẫu hoặc giờ hoạt động của nhà thuốc.
              </p>
            </div>

            <Link
              href="/chat"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-emerald-900 font-bold text-sm hover:bg-emerald-50 transition shadow-md shrink-0"
            >
              <Bot className="w-4 h-4 text-emerald-700" />
              <span>Trò chuyện ngay</span>
              <ArrowRight className="w-4 h-4 ml-1 text-emerald-700" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
