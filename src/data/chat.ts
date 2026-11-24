import { ChatMessage } from '@/types';

export const initialChatMessages: ChatMessage[] = [
  {
    id: 'welcome-msg',
    sender: 'bot',
    text: 'Xin chào quý khách! Tôi là Trợ lý AI của Nhà thuốc Phương Bản. Tôi có thể hỗ trợ quý khách tìm hiểu thông tin về các sản phẩm mẫu, hướng dẫn sử dụng thông thường hoặc giờ hoạt động của nhà thuốc.',
    timestamp: 'Vừa xong',
    suggestedPrompts: [
      'Gợi ý sản phẩm khi bị nghẹt mũi, sổ mũi',
      'Cách dùng viên sủi Vitamin C',
      'Giờ mở cửa của Nhà thuốc Phương Bản',
      'Sản phẩm chăm sóc vết thương nhẹ',
    ],
  },
];

export const quickTopics = [
  { label: 'Hô hấp & Mũi họng', query: 'Tư vấn sản phẩm vệ sinh mũi và làm dịu họng' },
  { label: 'Tăng đề kháng', query: 'Nên dùng vitamin C và khoáng chất như thế nào?' },
  { label: 'Chăm sóc vết thương', query: 'Nhà thuốc có băng dán cá nhân vô trùng không?' },
  { label: 'Giờ mở cửa', query: 'Nhà thuốc Phương Bản mở cửa vào những khung giờ nào?' },
];

export function getBotResponse(userText: string): {
  text: string;
  recommendedProductIds?: string[];
  suggestedPrompts?: string[];
} {
  const query = userText.toLowerCase().trim();

  if (query.includes('mũi') || query.includes('sổ mũi') || query.includes('nghẹt') || query.includes('xoang')) {
    return {
      text: 'Để vệ sinh đường thở thông thoáng và làm sạch bụi bẩn, quý khách có thể tham khảo Dung dịch xịt mũi nước muối biển sinh lý. Sản phẩm giúp giữ ẩm niêm mạc mũi tự nhiên.',
      recommendedProductIds: ['sp-1'],
      suggestedPrompts: [
        'Dùng xịt mũi bao nhiêu lần một ngày?',
        'Có nước súc miệng thảo mộc không?',
      ],
    };
  }

  if (query.includes('họng') || query.includes('súc miệng') || query.includes('răng miệng')) {
    return {
      text: 'Khi cổ họng cảm thấy rát nhẹ hoặc cần vệ sinh họng sau khi ra ngoài, Nước súc miệng thảo mộc giúp hỗ trợ kháng khuẩn và làm dịu cảm giác khó chịu ở khoang miệng.',
      recommendedProductIds: ['sp-4'],
      suggestedPrompts: [
        'Có cần pha loãng nước súc miệng không?',
        'Gợi ý sản phẩm tăng đề kháng',
      ],
    };
  }

  if (query.includes('vitamin') || query.includes('đề kháng') || query.includes('mệt mỏi') || query.includes('sủi')) {
    return {
      text: 'Viên sủi Vitamin C 1000mg & Kẽm (Vị cam) hỗ trợ bổ sung vi chất cho cơ thể trong những ngày mệt mỏi hoặc thời tiết giao mùa. Nên uống vào buổi sáng hoặc sau bữa ăn.',
      recommendedProductIds: ['sp-2'],
      suggestedPrompts: [
        'Người đau dạ dày có nên uống sủi C không?',
        'Nhà thuốc có dầu tràm gừng không?',
      ],
    };
  }

  if (query.includes('vết thương') || query.includes('băng') || query.includes('trầy') || query.includes('đứt tay')) {
    return {
      text: 'Đối với các vết xước nhỏ ngoài da, quý khách nên rửa sạch bằng nước muối sinh lý, sau đó bảo vệ bằng Băng dán cá nhân vô trùng thoáng khí để tránh bụi bẩn.',
      recommendedProductIds: ['sp-3'],
      suggestedPrompts: [
        'Bao lâu thì nên thay băng cá nhân?',
        'Tìm hiểu thêm dầu xoa bóp giữ ấm',
      ],
    };
  }

  if (query.includes('tràm') || query.includes('gừng') || query.includes('lạnh') || query.includes('giữ ấm') || query.includes('dầu')) {
    return {
      text: 'Dầu tràm gừng xoa bóp là sản phẩm quen thuộc giúp giữ ấm ngực, lưng và lòng bàn chân cho cả người lớn tuổi lẫn trẻ nhỏ khi thời tiết trở lạnh.',
      recommendedProductIds: ['sp-5'],
      suggestedPrompts: [
        'Cách dùng dầu tràm an toàn cho bé',
        'Giờ mở cửa của nhà thuốc',
      ],
    };
  }

  if (query.includes('tiêu hóa') || query.includes('bụng') || query.includes('men') || query.includes('ruột')) {
    return {
      text: 'Men vi sinh hỗ trợ bổ sung lợi khuẩn đường ruột, giúp cân bằng hệ vi sinh khi ăn uống thất thường hoặc hệ tiêu hóa cần chăm sóc.',
      recommendedProductIds: ['sp-6'],
      suggestedPrompts: [
        'Nên uống men vi sinh trước hay sau ăn?',
        'Tư vấn sản phẩm tăng sức đề kháng',
      ],
    };
  }

  if (query.includes('giờ') || query.includes('mở cửa') || query.includes('địa chỉ') || query.includes('ở đâu') || query.includes('liên hệ')) {
    return {
      text: 'Nhà thuốc Phương Bản mở cửa phục vụ từ 06:00 đến 21:30 hàng ngày (từ Thứ Hai đến Chủ Nhật). Địa chỉ Cơ sở 1: thôn Hưng Công, xã Bình An, thành phố Ninh Bình hoặc Cơ sở 2: chợ Vọc, xã Bình Giang, thành phố Ninh Bình . Số điện thoại mẫu: 098 882 5748 hoặc 035 311 8525',
      suggestedPrompts: [
        'Gợi ý sản phẩm chăm sóc hô hấp',
        'Tư vấn viên sủi vitamin C',
      ],
    };
  }

  return {
    text: 'Cảm ơn quý khách đã đặt câu hỏi. Nhà thuốc Phương Bản luôn sẵn sàng hỗ trợ thông tin về các mặt hàng mẫu (xịt mũi, vitamin C, băng dán, thảo mộc...), liều lượng tham khảo hoặc thời gian phục vụ. Quý khách đang quan tâm đến vấn đề sức khỏe nào ạ?',
    suggestedPrompts: [
      'Gợi ý sản phẩm khi bị nghẹt mũi',
      'Cách bổ sung vitamin C',
      'Băng dán vết thương vô trùng',
      'Giờ mở cửa của nhà thuốc',
    ],
  };
}
