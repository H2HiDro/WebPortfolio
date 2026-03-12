import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import profileImg from "figma:asset/f4bb3d25c8c6dc315ff8ce64ad3dffdba2375b0d.png";

export function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#1a56db] transform rotate-12 translate-x-1/3 opacity-5" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500 rounded-full -translate-x-1/2 translate-y-1/2 opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-160px)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-[#1a56db] tracking-wider font-semibold">Xin chào, Tôi là</p>
              <h1 className="text-6xl lg:text-7xl font-bold text-[#1a56db] leading-tight">
                Hồng Huỳnh
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-700 font-semibold tracking-wide">
                Chuyên gia Chuyển đổi số & Chiến lược vận hành
              </p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Với hơn 10 năm kinh nghiệm tư vấn chiến lược và triển khai chuyển đổi số, 
              Hồng Huỳnh đã đồng hành cùng nhiều doanh nghiệp trong quá trình tối ưu vận hành, 
              ứng dụng công nghệ và xây dựng hệ thống quản trị hiện đại.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all tracking-wide group shadow-lg"
              >
                Đặt lịch tư vấn
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 border-2 border-[#1a56db] text-[#1a56db] px-8 py-4 rounded-full font-bold hover:bg-[#1a56db] hover:text-white transition-colors tracking-wide"
              >
                Xem hồ sơ chuyên môn
              </a>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-12 h-12 bg-[#1a56db] rounded-full flex items-center justify-center hover:bg-[#1642b0] transition-all text-white shadow-md"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hong.huynh@blueboltsoftware.com"
                className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all text-white shadow-md"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src={profileImg}
                alt="Hồng Huỳnh"
                className="w-full max-w-md mx-auto lg:ml-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#1a56db] rounded-2xl -z-10" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}