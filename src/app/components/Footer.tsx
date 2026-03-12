import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a56db] py-12 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-wider text-white">
              HỒNG HUỲNH
            </h3>
            <p className="text-white/80">
              Chuyên gia Chuyển đổi số & Chiến lược vận hành doanh nghiệp
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 tracking-wide text-white">LĨNH VỰC CHUYÊN MÔN</h4>
            <ul className="space-y-2 text-white/80">
              <li>Chiến lược chuyển đổi số</li>
              <li>Tối ưu vận hành</li>
              <li>Chuẩn hóa quản trị</li>
              <li>Ứng dụng công nghệ & AI</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 tracking-wide text-white">KẾT NỐI</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#1a56db] transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hong.huynh@blueboltsoftware.com"
                className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} Hồng Huỳnh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}