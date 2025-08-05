
import { Code, Settings, Bot, FileText, ShoppingCart, RotateCcw, Shield, BarChart, Clock } from "lucide-react";

export const DevelopmentSection = () => {
  const processes = [
    { icon: Settings, title: "Credenciais e arquitetura", description: "Configuração inicial e estrutura do projeto" },
    { icon: Bot, title: "Criação do Agente SDR", description: "Desenvolvimento do assistente virtual inteligente" },
    { icon: Code, title: "Instruções para IA", description: "Treinamento do modelo com suas regras de negócio" },
    { icon: FileText, title: "Emissão de OS's", description: "Automatização do fluxo de ordens de serviço" },
    { icon: ShoppingCart, title: "Integração Nuvemshop", description: "Conexão inteligente com sua plataforma de e-commerce" },
    { icon: RotateCcw, title: "Follow-Up + Remarketing", description: "Automação de contatos e campanhas de retorno" },
    { icon: Shield, title: "Backup diário", description: "Segurança e preservação dos seus dados" },
    { icon: BarChart, title: "Dashboard + Otimização", description: "Monitoramento e melhorias contínuas" }
  ];

  return (
    <section className="animate-fade-in">
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl" style={{ backgroundColor: '#E8EDFE' }}>
            <Code className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#1946e9' }} />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#0F1215' }}>
            Processo de Desenvolvimento
          </h2>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {processes.map((process, index) => {
              const IconComponent = process.icon;
              const isDashboard = process.title === "Dashboard + Otimização";
              
              return (
                <div 
                  key={index}
                  className="group p-4 md:p-6 rounded-xl md:rounded-2xl border hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    border: '1px solid #E0E7FF',
                    background: 'linear-gradient(to bottom right, white, #F0F4FF)'
                  }}
                >
                  <div className="mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" 
                         style={{ background: 'linear-gradient(to right, #1946e9, #2953eb)' }}>
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors" style={{ color: '#0F1215' }}>
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {process.description}
                  </p>
                  
                  {/* Linha conectando Dashboard + Otimização ao prazo */}
                  {isDashboard && (
                    <div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-blue-300 to-green-300"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-center gap-3 mb-3 md:mb-4">
            <Clock className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
            <h3 className="text-xl md:text-2xl font-semibold" style={{ color: '#0F1215' }}>Prazo de entrega</h3>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-green-600">15 dias úteis</p>
          <p className="text-gray-600 mt-2 text-sm md:text-base">para implementação completa</p>
        </div>
      </div>
    </section>
  );
};
