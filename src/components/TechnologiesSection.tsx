
const TechnologiesSection = () => {
  const technologies = [
    { name: 'OpenAI GPT-4', category: 'AI Models' },
    { name: 'n8n', category: 'Automation' },
    { name: 'Make', category: 'Integration' },
    { name: 'Supabase', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Lovable', category: 'Frontend' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-maestro-cyan">Tecnologias</span> de Ponta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizamos as melhores ferramentas do mercado
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg card-hover"
            >
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {tech.name}
              </div>
              <div className="text-sm text-maestro-cyan font-medium">
                {tech.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
