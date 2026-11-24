import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nhà thuốc Phương Bản - Chăm sóc sức khỏe, tận tâm từ những điều nhỏ nhất',
  description: 'Nhà thuốc Phương Bản giới thiệu các sản phẩm chăm sóc sức khỏe thông dụng và hỗ trợ giải đáp cùng trợ lý AI trực tuyến.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
