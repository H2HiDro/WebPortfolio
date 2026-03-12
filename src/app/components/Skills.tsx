import { Progress } from './ui/progress';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js / Express', level: 88 },
        { name: 'GraphQL', level: 82 },
        { name: 'PostgreSQL / MongoDB', level: 85 },
        { name: 'REST APIs', level: 93 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Docker', level: 78 },
        { name: 'AWS / Cloud Services', level: 80 },
        { name: 'Figma / Design', level: 87 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
            and continuous learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
