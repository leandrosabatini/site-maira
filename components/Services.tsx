import React from 'react';
import { FileText, Home, Briefcase, Scale, FileSignature, Users } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="w-12 h-12 bg-navy-50 text-navy-900 flex items-center justify-center rounded-sm mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="font-serif text-2xl text-navy-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <FileSignature className="w-6 h-6" />,
      title: "Testamentos & Planejamento Sucessório",
      description: "Garanta que seu patrimônio seja distribuído conforme sua vontade. Elaboração de testamentos públicos e particulares, codicilos e planejamento para evitar conflitos familiares."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Contratos de Compra e Venda",
      description: "Análise minuciosa e elaboração de contratos para transações imobiliárias ou de bens móveis. Segurança jurídica para vendedor e comprador, verificando certidões e cláusulas de proteção."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Direito Imobiliário & Aluguel",
      description: "Assessoria completa em locações residenciais e comerciais. Elaboração de contratos de locação robustos, ações de despejo e revisional de aluguel."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Abertura de Empresas (CNPJ)",
      description: "Consultoria para escolha do melhor tipo societário, elaboração do Contrato Social, registro na Junta Comercial e obtenção de CNPJ. Comece seu negócio do jeito certo."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Consultivo Cível",
      description: "Pareceres jurídicos e orientações sobre responsabilidade civil, direitos do consumidor e obrigações. Atuação extrajudicial para resolução amigável de conflitos."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Consultoria para Freelancers",
      description: "Formalização de prestadores de serviços, contratos de prestação de serviços e proteção de propriedade intelectual para profissionais autônomos."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-2">Áreas de Atuação</h4>
          <h2 className="font-serif text-4xl text-navy-900 mb-6">Soluções Jurídicas Especializadas</h2>
          <p className="text-gray-600">
            Ofereço um leque de serviços focado na segurança contratual e patrimonial, tanto para pessoas físicas quanto para quem está empreendendo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;