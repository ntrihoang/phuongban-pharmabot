'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChatMessage, Product } from '@/types';
import { initialChatMessages, quickTopics, getBotResponse } from '@/data/chat';
import { mockProducts } from '@/data/products';
import {
  Bot,
  Send,
  User,
  Trash2,
  AlertTriangle,
  Sparkles,
  ShoppingBag,
  ExternalLink,
  Info,
} from 'lucide-react';

export default function ChatInterface() {
  const searchParams = useSearchParams();
  const [messages, setMessages] = useState<ChatMessage[]>(initialChatMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle incoming query param prompt (e.g. from Product Card "Tìm hiểu thêm")
  useEffect(() => {
    const prompt = searchParams.get('prompt');
    if (prompt) {
      handleSend(prompt);
    }
  }, [searchParams]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const responseData = getBotResponse(text);
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: responseData.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedPrompts: responseData.suggestedPrompts,
        recommendedProductIds: responseData.recommendedProductIds,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const clearChat = () => {
    setMessages(initialChatMessages);
  };

  const getProductsByIds = (ids?: string[]): Product[] => {
    if (!ids || ids.length === 0) return [];
    return mockProducts.filter((p) => ids.includes(p.id));
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-8.5rem)] min-h-[550px] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Top Bar */}
      <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-slate-900 text-sm">Trợ lý AI — Nhà thuốc Phương Bản</h2>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-800">
                Trực tuyến
              </span>
            </div>
            <p className="text-xs text-slate-500">Hỗ trợ thông tin & giải đáp thắc mắc thường ngày</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={clearChat}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 p-2 rounded-lg hover:bg-slate-200/60 transition cursor-pointer"
            title="Làm mới cuộc trò chuyện"
          >
            <Trash2 className="w-4 h-4" />
            <span className="hidden sm:inline">Xóa hội thoại</span>
          </button>
        </div>
      </div>

      {/* Medical Safety Disclaimer Strip */}
      <div className="bg-amber-50/90 border-b border-amber-200/80 px-4 py-2 flex items-center gap-2 text-xs text-amber-900">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
        <span className="leading-tight">
          <strong>Lưu ý:</strong> Trợ lý AI cung cấp thông tin tham khảo. Trường hợp cấp bách hoặc có triệu chứng nặng, vui lòng liên hệ cơ sở y tế gần nhất.
        </span>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-50/40">
        {messages.map((msg) => {
          const isBot = msg.sender === 'bot';
          const recommended = getProductsByIds(msg.recommendedProductIds);

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}
            >
              {isBot && (
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className="max-w-[85%] sm:max-w-[75%] space-y-2">
                {/* Text Bubble */}
                <div
                  className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-2xs ${
                    isBot
                      ? 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-xs'
                      : 'bg-emerald-600 text-white rounded-tr-xs'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Product Recommendations within Bot Message */}
                  {recommended.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
                      <p className="text-xs font-semibold text-emerald-800 flex items-center gap-1">
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Sản phẩm mẫu liên quan:</span>
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {recommended.map((prod) => (
                          <div
                            key={prod.id}
                            className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-2"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="text-lg">{prod.imageEmoji}</span>
                              <div className="truncate">
                                <p className="text-xs font-semibold text-slate-900 truncate">
                                  {prod.name}
                                </p>
                                <p className="text-[11px] text-emerald-700 font-medium">
                                  {new Intl.NumberFormat('vi-VN').format(prod.price)} đ
                                </p>
                              </div>
                            </div>
                            <Link
                              href="/#san-pham"
                              className="text-xs text-emerald-700 hover:text-emerald-800 font-medium shrink-0 inline-flex items-center gap-0.5"
                            >
                              <span>Xem</span>
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <span
                    className={`block text-[10px] mt-1.5 text-right ${
                      isBot ? 'text-slate-400' : 'text-emerald-100'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {/* Suggested Prompts Pill Buttons */}
                {isBot && msg.suggestedPrompts && msg.suggestedPrompts.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {msg.suggestedPrompts.map((prompt, pIdx) => (
                      <button
                        key={pIdx}
                        type="button"
                        onClick={() => handleSend(prompt)}
                        className="text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 px-2.5 py-1 rounded-full transition text-left cursor-pointer"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {!isBot && (
                <div className="w-8 h-8 rounded-lg bg-slate-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-xs shadow-2xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Topics */}
      <div className="bg-white px-4 py-2 border-t border-slate-100 flex items-center gap-2 overflow-x-auto text-xs scrollbar-none">
        <span className="text-slate-400 font-medium shrink-0 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          Chủ đề gợi ý:
        </span>
        {quickTopics.map((topic, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSend(topic.query)}
            className="shrink-0 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-medium transition cursor-pointer"
          >
            {topic.label}
          </button>
        ))}
      </div>

      {/* Input area */}
      <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập câu hỏi của bạn (ví dụ: cách dùng xịt mũi, bổ sung vitamin C, giờ mở cửa)..."
            className="flex-1 px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl font-medium transition flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Gửi</span>
          </button>
        </form>
        <p className="text-[11px] text-slate-400 text-center mt-2 flex items-center justify-center gap-1">
          <Info className="w-3 h-3 text-slate-400" />
          <span>Dữ liệu phản hồi được mô phỏng cho mục đích trình diễn giao diện thử nghiệm.</span>
        </p>
      </div>
    </div>
  );
}
