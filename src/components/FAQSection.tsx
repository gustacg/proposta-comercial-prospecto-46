
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0, 1, 2]); // All items open by default

  const faqs = [
    {
      question: "Quando posso dar progresso?",
      answer: "Assim que você concordar com a proposta, enviaremos o contrato para formalizar e dar início imediato ao projeto."
    },
    {
      question: "A IA tem algum custo adicional?",
      answer: "Sim, mas ela já está inclusa no pacote de manutenção. Caso você tenha um engenheiro de automação na equipe, ele mesmo poderá realizar as atualizações semanais e o refinamento das estratégias de vendas."
    },
    {
      question: "O valor da manutenção inclui atualizações ou novas funcionalidades?",
      answer: "Não. Nosso plano de manutenção tem como foco a continuidade do sistema, com atualizações preventivas, correções de erros e melhorias na performance da IA e das automações já implementadas. Para novas funcionalidades ou alterações específicas, oferecemos suporte à parte. Mas não se preocupe: deixamos tutoriais gravados e também realizamos aulas práticas com sua equipe para que possam fazer pequenos ajustes com segurança."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="animate-fade-in">
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl" style={{ backgroundColor: '#E8EDFE' }}>
            <HelpCircle className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#1946e9' }} />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#0F1215' }}>
            Observações Finais
          </h2>
        </div>
        
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border rounded-xl md:rounded-2xl overflow-hidden"
              style={{ 
                border: '1px solid #E0E7FF',
                background: 'linear-gradient(to bottom right, white, #F0F4FF)'
              }}
            >
              <button
                className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold" style={{ color: '#2953eb' }}>
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#1946e9' }} />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#1946e9' }} />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <div className="pt-2 border-t" style={{ borderColor: '#E5E5EF' }}>
                    <p className="text-base md:text-lg" style={{ color: '#615E83' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
