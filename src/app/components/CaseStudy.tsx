import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CaseStudy() {
  const caseStudies = [
    {
      title: 'Tối ưu vận hành doanh nghiệp dịch vụ',
      image: 'https://images.unsplash.com/photo-1589113367450-9a7b2a2177bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwY29uc3VsdGFudHxlbnwxfHx8fDE3NzMxODA5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: [
        'Chuẩn hóa quy trình vận hành',
        'Xây dựng hệ thống quản trị nội bộ',
        'Giảm thời gian xử lý công việc 30%',
      ],
    },
    {
      title: 'Triển khai chuyển đổi số cho doanh nghiệp SME',
      image: 'https://images.unsplash.com/photo-1623578240928-9473b76272ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzI4OTcyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      achievements: [
        'Xây dựng lộ trình chuyển đổi số',
        'Ứng dụng hệ thống quản lý dữ liệu',
        'Tăng hiệu quả quản trị và ra quyết định',
      ],
    },
  ];

  return (
    <section id="case-study" className="py-24 bg-white relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 w-1 h-16 bg-[#1a56db]" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block border-4 border-[#1a56db] px-12 py-4 mb-8">
            <h2 className="text-4xl font-bold text-[#1a56db] tracking-[0.3em]">
              DỰ ÁN TIÊU BIỂU
            </h2>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative overflow-hidden mb-6 border-4 border-[#1a56db]">
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1a56db]/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 tracking-wide text-[#1a56db]">
                {study.title}
              </h3>
              
              <ul className="space-y-4">
                {study.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5 text-orange-500" />
                    <span className="text-lg text-gray-700">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}