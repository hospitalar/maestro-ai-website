
const Footer = () => {
  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Maestro <span className="text-maestro-cyan">AI</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialistas em automação e implantação de agentes de IA que aceleram receita 
              e liberam tempo para o que realmente importa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-maestro-cyan transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/company/maestro-tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-maestro-cyan transition-colors duration-300 block"
              >
                LinkedIn
              </a>
              <a
                href="https://cal.com/carlos-ribeiro-i9yp7d/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-maestro-cyan transition-colors duration-300 block"
              >
                Agendar Consultoria
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Maestro AI — Otimizando negócios com Automação & Inteligência Artificial
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
