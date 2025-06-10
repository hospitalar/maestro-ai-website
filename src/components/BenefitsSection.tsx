
import { Clock, Headset, Blocks, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Time-to-Value Rápido',
      description: 'Implantações entre 10-30 dias úteis',
    },
    {
      icon: Headset,
      title: 'Operação Assistida',
      description: 'Suporte dedicado nos primeiros 30 a 90 dias',
    },
    {
      icon: Blocks,
      title: 'Abordagem Modular',
      description: 'Agentes independentes conectados via APIs',
    },
    {
      icon: Shield,
      title: 'Governança & Segurança',
      description: 'Criptografia, auditoria e conformidade LGPD',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Por Que Escolher a <span className="text-maestro-cyan">Maestro AI</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg card-hover"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-maestro-cyan/10 rounded-full mb-6">
                <benefit.icon className="w-8 h-8 text-maestro-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
