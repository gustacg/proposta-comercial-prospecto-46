
import { Map, Settings, Bot, Code, RotateCcw, Shield, BarChart, Clock } from "lucide-react";

export const StepsSection = () => {
  const steps = [
    {
      icon: Settings,
      title: "Configuração e Infraestrutura",
      description: "Setup de 3 VPS (MPCs, Workers N8N, Manager) + APIs WhatsApp e Supabase"
    },
    {
      icon: Bot,
      title: "Multi-Agente SDR + Automações",
      description: "3 agentes especializados + coleta de feedback, envio de imagens dos carros, remarketing e tratamento de leads Instagram"
    },
    {
      icon: Code,
      title: "Integração AutoConf",
      description: "Conexão com sistema atual, consulta estoque, financiamento e CRM"
    },
    {
      icon: RotateCcw,
      title: "Grupos WhatsApp + IA",
      description: "Criação de grupos para equipe com assistentes virtuais especializados"
    },
    {
      icon: Shield,
      title: "ChatWoot + Follow-Up",
      description: "Integração organizacional e automação de follow-up inteligente"
    },
    {
      icon: BarChart,
      title: "Dashboard + Catálogo",
      description: "Painel com métricas exclusivas e catálogo HTML automático"
    }
  ];

  return (
    <section className="animate-fade-in">
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl" style={{ backgroundColor: '#E8EDFE' }}>
            <Map className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#1946e9' }} />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#0F1215' }}>
            Processo de Desenvolvimento
          </h2>
        </div>
        
        <div className="relative">
          {/* Linha de degradê vertical */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30"></div>
          
          <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <div key={index} className="relative flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl md:rounded-2xl border hover:shadow-lg transition-all duration-300" 
                     style={{ 
                       border: '1px solid #E0E7FF',
                       background: 'linear-gradient(to bottom right, white, #F0F4FF)'
                     }}>
                  <div className="relative z-10 p-2 rounded-lg" style={{ backgroundColor: '#E8EDFE' }}>
                    <IconComponent className="w-5 h-5" style={{ color: '#1946e9' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: '#0F1215' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base" style={{ color: '#615E83' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card de prazo de entrega com novo estilo */}
        <div className="border-2 border-green-500 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
             style={{ background: 'linear-gradient(to bottom right, white, #e8f5e8)' }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="p-2 md:p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-black">
                Prazo de entrega:
              </h3>
            </div>
            <div className="text-xl md:text-2xl font-bold text-left md:text-right" style={{ color: '#22c55e' }}>
              45 dias úteis (MVP em 20 dias)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
