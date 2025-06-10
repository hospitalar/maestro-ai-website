
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="contato" className="py-20 maestro-bg-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para <span className="text-maestro-cyan">Transformar</span> Seu Negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Agende uma consultoria gratuita e descubra como nossos agentes de IA 
            podem acelerar seus resultados
          </p>
          
          <a
            href="https://cal.com/carlos-ribeiro-i9yp7d/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="cta-button text-xl px-12 py-6">
              Agendar Consultoria Gratuita
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
