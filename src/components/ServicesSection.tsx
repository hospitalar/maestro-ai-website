
const ServicesSection = () => {
  const agents = [
    {
      title: 'Agente Imobiliário',
      description: 'Apresentação de imóveis e agendamentos',
    },
    {
      title: 'Agente de Concessionária',
      description: 'Gestão de leads, agendamento de test-drives, acompanhamento de vendas',
    },
    {
      title: 'Agente de Cobrança',
      description: 'Automatização de cobranças e negociações',
    },
    {
      title: 'Agente Vendedor Joalheria',
      description: 'Atendimento personalizado, gestão de estoque, sugestão de produtos',
    },
    {
      title: 'Agente de Web Scraping',
      description: 'Coleta de dados, monitoramento de preços, análise de concorrência',
    },
    {
      title: 'Millis AI',
      description: 'Agente de IA de ligação telefônica',
    },
    {
      title: 'Agente SDR',
      description: 'Qualificação automática de leads',
    },
    {
      title: 'Agente Social Media',
      description: 'Geração de conteúdo e gestão de DMs',
    },
    {
      title: 'Automação de Documentos',
      description: 'Preenchimento automático de contratos',
    },
    {
      title: 'Dashboards',
      description: 'Frontend personalizado para os projetos',
    },
  ];

  const commonFeatures = [
    'CRM', 'Agenda', 'Disparos de Mensagens', 'Banco de Dados', 'Estoque',
    'Orçamento', 'Cobrança', 'Qualificação', 'Vendas', 'Personalização'
  ];

  return (
    <section id="servicos" className="py-20 maestro-bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nossos <span className="text-maestro-cyan">Agentes de IA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções especializadas para cada necessidade do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 card-hover"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {agent.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {agent.description}
              </p>
            </div>
          ))}
        </div>

        {/* Common Features */}
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Funcionalidades Comuns aos Agentes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {commonFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-maestro-cyan/10 text-maestro-cyan px-4 py-2 rounded-lg text-center font-medium"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
