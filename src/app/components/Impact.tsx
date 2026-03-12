import { TrendingUp, DollarSign, Shield, Users, Zap } from 'lucide-react';

export function Impact() {
  const impacts = [
    {
      icon: TrendingUp,
      title: 'Tối ưu hiệu suất vận hành',
      description: 'Nâng cao năng suất và hiệu quả hoạt động doanh nghiệp',
    },
    {
      icon: DollarSign,
      title: 'Giảm chi phí quản lý',
      description: 'Tối ưu hóa nguồn lực và cắt giảm chi phí vận hành',
    },
    {
      icon: Shield,
      title: 'Kiểm soát dữ liệu & quy trình',
      description: 'Tăng khả năng quản lý và minh bạch trong vận hành',
    },
    {
      icon: Users,
      title: 'Nâng cao năng lực lãnh đạo',
      description: 'Phát triển tư duy quản trị hiện đại cho đội ngũ',
    },
    {
      icon: Zap,
      title: 'Ứng dụng công nghệ hiệu quả',
      description: 'Tận dụng tối đa tiềm năng của công nghệ số',
    },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block border-4 border-orange-500 px-12 py-4 mb-8">
            <h2 className="text-4xl font-bold tracking-[0.3em] text-white">
              GIÁ TRỊ MANG LẠI
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Kết quả cụ thể và đo lường được cho doanh nghiệp của bạn
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.slice(0, 3).map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={index}
                className="bg-[#1a56db] p-8 hover:bg-white hover:text-[#1a56db] transition-all duration-300 group shadow-lg"
              >
                <Icon className="h-12 w-12 mb-6 text-orange-500" />
                <h3 className="text-xl font-bold mb-3 tracking-wide text-white group-hover:text-[#1a56db]">
                  {impact.title}
                </h3>
                <p className="text-white/90 group-hover:text-gray-700">
                  {impact.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {impacts.slice(3).map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={index}
                className="bg-[#1a56db] p-8 hover:bg-white hover:text-[#1a56db] transition-all duration-300 group shadow-lg"
              >
                <Icon className="h-12 w-12 mb-6 text-orange-500" />
                <h3 className="text-xl font-bold mb-3 tracking-wide text-white group-hover:text-[#1a56db]">
                  {impact.title}
                </h3>
                <p className="text-white/90 group-hover:text-gray-700">
                  {impact.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}