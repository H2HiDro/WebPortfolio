import { ArrowRight } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Khảo sát & phân tích',
      description: 'Đánh giá thực trạng mô hình vận hành, quy trình quản trị và mức độ ứng dụng công nghệ của doanh nghiệp.',
    },
    {
      number: '02',
      title: 'Xây dựng chiến lược',
      description: 'Xây dựng lộ trình chuyển đổi số và mô hình vận hành phù hợp với mục tiêu phát triển của doanh nghiệp.',
    },
    {
      number: '03',
      title: 'Triển khai & tối ưu',
      description: 'Đồng hành cùng doanh nghiệp trong quá trình triển khai giải pháp và tối ưu hệ thống vận hành.',
    },
    {
      number: '04',
      title: 'Đào tạo & chuyển giao',
      description: 'Đào tạo đội ngũ nội bộ để doanh nghiệp có thể vận hành hệ thống một cách hiệu quả và bền vững.',
    },
  ];

  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-pink-500 to-orange-500',
    'from-orange-500 to-yellow-500'
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-blue-50 to-white relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 w-1 h-16 bg-[#1a56db]" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block border-4 border-[#1a56db] px-12 py-4 mb-8">
            <h2 className="text-4xl font-bold text-[#1a56db] tracking-[0.3em]">
              QUY TRÌNH TƯ VẤN
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Phương pháp tiếp cận có hệ thống để đảm bảo kết quả tối ưu
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white border-2 border-[#1a56db] p-8 hover:bg-[#1a56db] hover:text-white transition-all duration-300 shadow-md">
                <div className="flex items-start gap-6">
                  <span className="text-6xl font-bold text-orange-500 group-hover:text-orange-300">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ArrowRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
              
              {/* Connecting line */}
              {index < steps.length - 1 && index % 2 === 0 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-[#1a56db] z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}