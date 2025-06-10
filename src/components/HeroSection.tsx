
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden maestro-bg-dark">
      {/* Parallax Background */}
      <div className="parallax-bg"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme Seu Negócio com{' '}
            <span className="text-maestro-cyan">Agentes de IA</span>{' '}
            Inteligentes
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Especialistas em automação e implantação de agentes de IA que aceleram receita 
            e liberam tempo para o que realmente importa
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://cal.com/carlos-ribeiro-i9yp7d/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="cta-button text-lg px-8 py-4">
                Diagnóstico Gratuito - 30min
              </Button>
            </a>
            <a href="#servicos">
              <Button 
                variant="outline" 
                className="border-maestro-cyan text-maestro-cyan hover:bg-maestro-cyan hover:text-white text-lg px-8 py-4 transition-all duration-300"
              >
                Ver Nossos Agentes
              </Button>
            </a>
          </div>

          {/* Stats or Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-maestro-cyan mb-2">10-30</div>
              <div className="text-gray-400">Dias para implementação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maestro-cyan mb-2">90 dias</div>
              <div className="text-gray-400">Suporte dedicado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maestro-cyan mb-2">100%</div>
              <div className="text-gray-400">Conformidade LGPD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
