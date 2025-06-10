
const AboutSection = () => {
  const faqs = [
    {
      question: 'O que são agentes de IA?',
      answer: 'Agentes autônomos de IA que automatizam processos de negócios, aceleram a geração de receita e liberam tempo das equipes para atividades estratégicas.',
    },
    {
      question: 'Quanto tempo leva para implementar?',
      answer: 'Nossas implantações ocorrem entre 10 a 30 dias úteis, garantindo um rápido time-to-value.',
    },
    {
      question: 'Quais garantias vocês oferecem?',
      answer: 'Oferecemos governança e segurança robustas, incluindo criptografia, log de auditoria e total conformidade com a LGPD.',
    },
    {
      question: 'Como funciona o suporte pós-implementação?',
      answer: 'Disponibilizamos Operação Assistida com suporte dedicado nos primeiros 30 a 90 dias após a implantação para garantir o sucesso contínuo.',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sobre a <span className="text-maestro-cyan">Maestro AI</span>
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              A Maestro AI (antiga Trilha) é especializada em desenvolver e implantar agentes autônomos de IA 
              que automatizam processos de negócios, aceleram a geração de receita e liberam tempo das equipes 
              para atividades estratégicas. Com expertise em n8n, Make, OpenAI e tecnologias de nuvem, 
              entregamos soluções sob medida em até 30 dias.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Perguntas Frequentes
            </h3>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
