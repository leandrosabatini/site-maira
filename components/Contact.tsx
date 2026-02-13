import React from 'react';
import { Mail, Phone, MapPin, Smartphone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h4 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-2">Fale Comigo</h4>
            <h2 className="font-serif text-4xl text-navy-900 mb-8">Agende sua consulta</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Atualmente, o atendimento é realizado de forma online (videoconferência) ou presencial em locais parceiros sob demanda. Entre em contato para verificar a disponibilidade.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-gold-600 shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-navy-900 text-lg">WhatsApp & Celular</h5>
                  <p className="text-gray-500 mb-1">Atendimento ágil e direto.</p>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-gold-600 font-semibold hover:underline">
                    (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-gold-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-navy-900 text-lg">Email</h5>
                  <p className="text-gray-500 mb-1">Para envio de documentos e formalizações.</p>
                  <a href="mailto:contato@mairacoelho.adv.br" className="text-gold-600 font-semibold hover:underline">
                    contato@mairacoelho.adv.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-gold-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-navy-900 text-lg">Atendimento</h5>
                  <p className="text-gray-500">
                    Consultoria Online para todo o Brasil.<br/>
                    Base em São Paulo/SP.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-lg border border-gray-100">
            <h3 className="font-serif text-2xl text-navy-900 mb-6">Envie uma mensagem</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-navy-800 mb-2">Nome Completo</label>
                <input type="text" className="w-full p-3 border border-gray-200 rounded focus:ring-1 focus:ring-gold-500 outline-none transition-all" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-800 mb-2">Email</label>
                <input type="email" className="w-full p-3 border border-gray-200 rounded focus:ring-1 focus:ring-gold-500 outline-none transition-all" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-800 mb-2">Assunto</label>
                <select className="w-full p-3 border border-gray-200 rounded focus:ring-1 focus:ring-gold-500 outline-none transition-all text-gray-600">
                  <option>Selecione um assunto</option>
                  <option>Testamentos / Planejamento Sucessório</option>
                  <option>Contratos (Compra, Venda, Aluguel)</option>
                  <option>Abertura de CNPJ</option>
                  <option>Consultoria Geral</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-800 mb-2">Mensagem</label>
                <textarea className="w-full p-3 border border-gray-200 rounded focus:ring-1 focus:ring-gold-500 outline-none transition-all h-32" placeholder="Descreva brevemente sua necessidade..."></textarea>
              </div>
              <button className="w-full bg-navy-900 text-white font-bold py-4 rounded hover:bg-navy-800 transition-colors uppercase tracking-wider text-sm">
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;