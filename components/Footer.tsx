import React from 'react';
import { Scale, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-navy-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Scale className="h-6 w-6 text-gold-500" />
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wider font-semibold">MAÍRA COELHO CASCAIS</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Serviços jurídicos de excelência com foco em prevenção de conflitos e segurança contratual. Atendimento humanizado e estratégico.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1 md:pl-12">
            <h5 className="font-serif text-xl mb-6 text-gold-500">Menu Rápido</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre a Dra. Maíra</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Legal Info */}
          <div className="col-span-1">
            <h5 className="font-serif text-xl mb-6 text-gold-500">Informações Legais</h5>
            <p className="text-gray-400 text-sm mb-2">
              <strong className="text-white">Maíra Coelho Cascais</strong><br/>
              Advogada inscrita na OAB/SP sob o nº 540936
            </p>
            <p className="text-gray-500 text-xs mt-4 leading-relaxed">
              Este site tem caráter meramente informativo e não constitui consultoria jurídica. O conteúdo aqui exposto respeita o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </div>

        <div className="border-t border-navy-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Maíra Coelho Cascais. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com tecnologia de ponta.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;