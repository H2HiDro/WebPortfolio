import { Award, Briefcase, Target } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Award,
      text: '10+ năm kinh nghiệm',
    },
    {
      icon: Briefcase,
      text: 'Đồng hành cùng nhiều doanh nghiệp',
    },
    {
      icon: Target,
      text: 'Chuyên sâu chiến lược & vận hành',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 w-1 h-16 bg-[#1a56db]" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block border-4 border-[#1a56db] px-12 py-4 mb-8">
            <h2 className="text-4xl font-bold text-[#1a56db] tracking-[0.3em]">
              VỀ HỒNG HUỲNH
            </h2>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Hồng Huỳnh là chuyên gia tư vấn chiến lược và chuyển đổi số với hơn 10 năm kinh nghiệm 
            làm việc cùng các doanh nghiệp trong nhiều lĩnh vực.
          </p>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Trong quá trình tư vấn, Hồng Huỳnh tập trung vào việc giúp doanh nghiệp:
            </p>
            
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#1a56db] rounded-full mt-2.5 flex-shrink-0" />
                <span>Tái cấu trúc mô hình vận hành</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#1a56db] rounded-full mt-2.5 flex-shrink-0" />
                <span>Chuẩn hóa hệ thống quản trị</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#1a56db] rounded-full mt-2.5 flex-shrink-0" />
                <span>Ứng dụng công nghệ và dữ liệu trong quản lý</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#1a56db] rounded-full mt-2.5 flex-shrink-0" />
                <span>Nâng cao năng lực điều hành của đội ngũ lãnh đạo</span>
              </li>
            </ul>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Cách tiếp cận của Hồng Huỳnh không chỉ dừng lại ở tư vấn chiến lược, mà còn đồng hành 
            cùng doanh nghiệp trong quá trình triển khai thực tế nhằm tạo ra kết quả đo lường được.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center p-8 border-2 border-[#1a56db] hover:bg-[#1a56db] hover:text-white transition-all group shadow-md"
              >
                <Icon className="h-12 w-12 mx-auto mb-4 text-[#1a56db] group-hover:text-white" />
                <p className="text-lg font-semibold tracking-wide">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}