
const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico Gratuito',
      description: 'Mapeamento de processos e definição de ROI',
    },
    {
      number: '02',
      title: 'Proposta Técnica & Comercial',
      description: 'Entrega em até 48 horas',
    },
    {
      number: '03',
      title: 'Kick-off e Implementação',
      description: 'Acesso a APIs, credenciais e cronograma',
    },
  ];

  return (
    <section className="py-20 maestro-bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Como <span className="text-maestro-cyan">Funciona</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Processo simples e transparente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-maestro-cyan/30 transform translate-x-1/2"></div>
              )}
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-maestro-cyan rounded-full text-white text-xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
