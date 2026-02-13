import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Image / Visual */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-gold-500 z-0 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Dra. Maíra Coelho Cascais" 
              className="w-full h-auto relative z-10 shadow-xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h4 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-2">Sobre a Profissional</h4>
            <h2 className="font-serif text-4xl text-navy-900 mb-6">Maíra Coelho Cascais</h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Advogada inscrita na OAB/SP sob o nº 540936, atuo de forma independente oferecendo soluções jurídicas modernas e descomplicadas. 
              Meu foco é preventivo e consultivo, ajudando pessoas físicas e empresas a evitarem litígios futuros através de contratos bem estruturados e planejamento estratégico.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Acredito em uma advocacia acessível, onde o cliente fala diretamente com quem resolve o seu problema, garantindo agilidade e confiança mútua.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-navy-900">Atendimento Personalizado</h5>
                  <p className="text-sm text-gray-500">Cada caso é tratado com exclusividade e atenção aos detalhes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-navy-900">Agilidade e Transparência</h5>
                  <p className="text-sm text-gray-500">Comunicação clara e resolutiva, sem "juridiquês" desnecessário.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-navy-900">Consultoria Preventiva</h5>
                  <p className="text-sm text-gray-500">Foco em blindar o cliente de problemas futuros.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;