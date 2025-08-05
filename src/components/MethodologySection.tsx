
import { CheckCircle, Search, Workflow, Code, TestTube, Handshake } from "lucide-react";

export const MethodologySection = () => {
  const methods = [
    {
      icon: Search,
      title: "Mapeamento Inteligente",
      description: "Analisamos com você as necessidades e objetivos do seu negócio para entender o que precisa ser automatizado. Nessa fase, coletamos os dados essenciais e mapeamos os processos manuais, gargalos e oportunidades de automação."
    },
    {
      icon: Workflow,
      title: "Desenho de Fluxo Estratégico",
      description: "Criamos a estrutura lógica da automação: quais gatilhos, integrações, transformações e decisões o fluxo vai executar. É aqui que decidimos como o robô vai pensar e agir dentro da sua operação."
    },
    {
      icon: Code,
      title: "Desenvolvimento Modular",
      description: "Implementamos a automação dentro do n8n com foco em simplicidade, desempenho e escalabilidade. Cada parte do fluxo é pensada para poder ser ajustada ou expandida facilmente."
    },
    {
      icon: TestTube,
      title: "Refinamento Contínuo",
      description: "Executamos vários ciclos de testes reais com seus dados e cenários para garantir que tudo esteja funcionando como esperado. Ajustamos os mínimos detalhes para alcançar o máximo de performance e segurança."
    },
    {
      icon: Handshake,
      title: "Entrega Guiada + Suporte Inicial",
      description: "Apresentamos o fluxo, explicamos como ele funciona e, se necessário, fazemos uma calibração final com base no uso prático. Você sai com um sistema automatizado que realmente resolve seu problema."
    }
  ];

  return (
    <section className="animate-fade-in">
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl" style={{ backgroundColor: '#E8EDFE' }}>
            <CheckCircle className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#1946e9' }} />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#0F1215' }}>
            Nossa Metodologia
          </h2>
        </div>
        
        <div className="relative">
          {/* Linha de degradê vertical */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30"></div>
          
          <div className="space-y-4 md:space-y-6">
            {methods.map((method, index) => {
              const IconComponent = method.icon;
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
                      {method.title}
                    </h3>
                    <p className="text-sm md:text-base" style={{ color: '#615E83' }}>
                      {method.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
