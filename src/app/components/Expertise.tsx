export function Expertise() {
  const expertiseAreas = [
    {
      title: 'Chiến lược chuyển đổi số',
      description: 'Xây dựng lộ trình chuyển đổi số phù hợp với quy mô và mô hình vận hành của doanh nghiệp, giúp doanh nghiệp ứng dụng công nghệ một cách hiệu quả và bền vững.',
    },
    {
      title: 'Tối ưu vận hành doanh nghiệp',
      description: 'Phân tích mô hình vận hành hiện tại, xác định điểm nghẽn và tái thiết kế quy trình nhằm nâng cao hiệu suất hoạt động.',
    },
    {
      title: 'Chuẩn hóa hệ thống quản trị',
      description: 'Xây dựng hệ thống quy trình, quy định và công cụ quản trị giúp doanh nghiệp vận hành hiệu quả và giảm phụ thuộc vào cá nhân.',
    },
    {
      title: 'Ứng dụng công nghệ & AI',
      description: 'Tư vấn triển khai các giải pháp công nghệ và AI trong quản lý, vận hành và kinh doanh.',
    },
    {
      title: 'Phát triển năng lực lãnh đạo',
      description: 'Đào tạo và nâng cao tư duy quản trị hiện đại cho đội ngũ lãnh đạo và quản lý cấp trung.',
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-[#1a56db] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 border-4 border-white/20 rotate-45 -translate-x-1/2" />
      <div className="absolute bottom-20 right-0 w-96 h-96 border-4 border-orange-500/30 rotate-12 translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block border-4 border-orange-500 px-12 py-4 mb-8">
            <h2 className="text-4xl font-bold tracking-[0.3em]">
              LĨNH VỰC CHUYÊN MÔN
            </h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 border-2 border-white/20 hover:bg-white hover:text-[#1a56db] transition-all duration-300 group hover:shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl font-bold text-orange-500 group-hover:text-orange-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 tracking-wide">
                    {area.title}
                  </h3>
                  <p className="text-white/90 group-hover:text-gray-700 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}