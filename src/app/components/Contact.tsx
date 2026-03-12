import { Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1a56db] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 border-4 border-orange-500/30 rotate-45 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block border-4 border-orange-500 px-12 py-4 mb-8">
            <h2 className="text-4xl font-bold tracking-[0.3em]">
              KẾT NỐI & HỢP TÁC
            </h2>
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Nếu doanh nghiệp của bạn đang tìm kiếm giải pháp để tối ưu vận hành và triển khai 
            chuyển đổi số, hãy kết nối với Hồng Huỳnh để trao đổi và tìm ra hướng đi phù hợp.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 p-8 md:p-12 shadow-2xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Họ tên</Label>
                <Input
                  id="name"
                  placeholder="Nhập họ tên của bạn"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">Công ty</Label>
              <Input
                id="company"
                placeholder="Tên công ty"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">Nội dung</Label>
              <Textarea
                id="message"
                placeholder="Mô tả ngắn về nhu cầu tư vấn..."
                rows={6}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
              />
            </div>
            
            <Button
              type="submit"
              size="lg"
              className="w-full bg-orange-500 text-white hover:bg-orange-600 font-bold tracking-wide shadow-xl"
            >
              <Send className="mr-2 h-5 w-5" />
              Gửi tin nhắn
            </Button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-white/80 mb-2">Hoặc liên hệ trực tiếp qua email:</p>
            <a
              href="mailto:hong.huynh@blueboltsoftware.com"
              className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 transition-colors text-lg font-semibold"
            >
              <Mail className="h-5 w-5" />
              hong.huynh@blueboltsoftware.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}