import React, { useState } from 'react';
import { MessageSquare, Send, Sparkles, Loader2, Info } from 'lucide-react';
import { getLegalAssistantResponse } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer(null);

    try {
      const result = await getLegalAssistantResponse(question);
      setAnswer(result);
    } catch (error) {
      setAnswer("Ocorreu um erro ao processar sua pergunta. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="lg:w-1/3 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-600/20 text-gold-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3 h-3" />
              Inteligência Artificial
            </div>
            <h2 className="font-serif text-4xl mb-6">Tire dúvidas preliminares</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Utilize nosso assistente virtual inteligente para entender conceitos básicos sobre testamentos, contratos ou abertura de empresas.
            </p>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <p className="text-xs text-gray-400">
                  <strong>Aviso Importante:</strong> As respostas são geradas por IA e servem apenas como orientação inicial. Elas não substituem uma consulta jurídica formal com a Dra. Maíra.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
              {!answer ? (
                <div className="min-h-[200px] flex flex-col justify-center">
                  <h3 className="text-navy-900 font-serif text-xl mb-4">O que você gostaria de saber?</h3>
                  <form onSubmit={handleSubmit} className="relative">
                    <textarea
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Ex: Quais documentos preciso para abrir um CNPJ? ou Como funciona um testamento particular?"
                      className="w-full p-4 pr-12 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none resize-none h-32 text-gray-700"
                    />
                    <button 
                      type="submit"
                      disabled={isLoading || !question.trim()}
                      className="absolute bottom-4 right-4 p-2 bg-navy-900 text-white rounded-full hover:bg-gold-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                    <MessageSquare className="w-6 h-6 text-gold-600" />
                    <h3 className="text-navy-900 font-bold">Resposta do Assistente</h3>
                  </div>
                  <div className="prose prose-slate text-gray-600 mb-6 whitespace-pre-line">
                    {answer}
                  </div>
                  <button 
                    onClick={() => setAnswer(null)}
                    className="text-sm text-gold-600 hover:text-gold-700 font-medium underline"
                  >
                    Fazer outra pergunta
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIChat;