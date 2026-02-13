import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-900">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Office Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border border-gold-500/30 rounded-full bg-navy-800/50 backdrop-blur-sm">
            <span className="text-gold-500 text-xs uppercase tracking-[0.2em] font-bold">OAB/SP 540936</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            Segurança jurídica para <br/>
            <span className="italic text-gold-500">seu patrimônio</span> e negócios.
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-10 font-light leading-relaxed max-w-2xl">
            Atuação especializada em contratos, planejamento sucessório e consultoria empresarial. 
            Atendimento personalizado e direto, sem a burocracia dos grandes escritórios.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white font-semibold rounded-sm transition-all shadow-lg hover:shadow-gold-500/20 flex items-center justify-center gap-2 group"
            >
              Agendar Consultoria
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-sm transition-all flex items-center justify-center"
            >
              Conhecer Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;