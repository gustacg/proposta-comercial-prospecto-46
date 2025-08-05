
import { Package, Bot, CreditCard, BarChart, Gift } from "lucide-react";
import { useState } from "react";

export const InvestmentSection = () => {
  const [showBonus, setShowBonus] = useState(false);

  const investments = [
    {
      icon: Bot,
      title: "Multi-Agente SDR Qualificador",
      price: "R$ 8.500",
      description: "Sistema com 3 agentes especializados: consórcio, estética automotiva e equipamentos. Qualificação + agendamento automático",
      isHighlight: true
    },
    {
      icon: CreditCard,
      title: "Integração AutoConf + APIs",
      price: "R$ 3.200",
      description: "Conexão com sistema atual, consulta estoque/financiamento, integração ChatWoot e APIs WhatsApp",
      isHighlight: false
    },
    {
      icon: BarChart,
      title: "Dashboard + Grupos IA",
      price: "R$ 1.800",
      description: "Painel com métricas exclusivas, grupos WhatsApp com IA para equipe e gestão de estoque automática",
      isHighlight: false
    }
  ];

  return (
    <section className="animate-fade-in">
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl" style={{ backgroundColor: '#E8EDFE' }}>
            <Package className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#1946e9' }} />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#0F1215' }}>
            Bora pro seu pacote! 🚀
          </h2>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {investments.map((investment, index) => {
            const IconComponent = investment.icon;
            
            return (
              <div key={index} className={`${investment.isHighlight ? 'border-2 border-green-500' : 'border'} rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 ${investment.isHighlight ? 'hover:scale-105 hover:-translate-y-1' : ''}`}
                   style={{ 
                     border: investment.isHighlight ? '2px solid #22c55e' : '1px solid #E0E7FF',
                     background: investment.isHighlight ? 'linear-gradient(to bottom right, white, #e8f5e8)' : 'linear-gradient(to bottom right, white, #F0F4FF)'
                   }}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-8">
                  <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl flex-shrink-0 ${investment.isHighlight ? 'bg-gradient-to-r from-green-500 to-green-600' : ''}`} 
                       style={!investment.isHighlight ? { background: 'linear-gradient(to right, #1946e9, #2953eb)' } : {}}>
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 ${investment.isHighlight ? 'text-black' : ''}`} style={{ color: investment.isHighlight ? '#000000' : '#0F1215' }}>
                      {investment.title}
                    </h3>
                    <p className="text-base md:text-lg" style={{ color: '#615E83' }}>{investment.description}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className={`text-2xl md:text-3xl font-bold ${investment.isHighlight ? 'text-green-700' : ''}`} style={{ color: investment.isHighlight ? '#22c55e' : '#1946e9' }}>
                      {investment.price}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">de implementação</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bônus oculto */}
        <div className="mt-8">
          {!showBonus ? (
            <div className="text-center">
              <button
                onClick={() => setShowBonus(true)}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-shine"
                style={{
                  animation: 'gentle-bounce 3s ease-in-out infinite, glow-shadow 3s ease-in-out infinite'
                }}
              >
                <Gift className="w-8 h-8 md:w-6 md:h-6" />
                <span>Clique para ganhar uma recompensa!</span>
              </button>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6 md:p-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-8">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex-shrink-0">
                  <Gift className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#0F1215' }}>
                    Suporte e Treinamento
                  </h3>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium w-fit">
                      BÔNUS
                    </span>
                  </div>
                  <p className="text-base md:text-lg" style={{ color: '#615E83' }}>
                    Treinamento da equipe + suporte técnico por 30 dias + backup automático
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600">
                    GRÁTIS
                  </div>
                  <div className="text-sm text-gray-500 mt-1">de investimento</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
