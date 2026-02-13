import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const getLegalAssistantResponse = async (userQuestion: string): Promise<string> => {
  if (!apiKey) {
    return "O serviço de assistente virtual está temporariamente indisponível (Chave de API não configurada). Por favor, entre em contato diretamente pelo WhatsApp.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuestion,
      config: {
        systemInstruction: `
          Você é um assistente virtual inteligente no site da advogada Dra. Maíra Coelho Cascais (OAB/SP 540936).
          O usuário fará perguntas sobre direito civil, contratos, testamentos ou abertura de empresas no Brasil.
          
          Regras:
          1. Responda de forma polida, profissional e breve (máximo 3 parágrafos).
          2. Use português do Brasil formal, mas acessível.
          3. Forneça apenas informações genéricas baseadas na lei brasileira.
          4. NÃO dê conselhos jurídicos específicos para o caso concreto.
          5. OBRIGATÓRIO: Termine TODA resposta com a seguinte frase exata: "Esta é uma informação preliminar gerada por inteligência artificial e não substitui uma consulta jurídica. Para analisar seu caso concreto com segurança, agende uma consulta com a Dra. Maíra."
        `,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não consegui processar sua pergunta no momento.";
  } catch (error) {
    console.error("Erro ao consultar Gemini:", error);
    return "Ocorreu um erro momentâneo. Por favor, tente novamente ou entre em contato diretamente.";
  }
};