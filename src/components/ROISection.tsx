
import { TrendingUp, Clock, Users, Target } from "lucide-react";
import { ROICalculator } from "./ROICalculator";

export const ROISection = () => {
  const stats = [
    {
      icon: Clock,
      title: "Qualificação 7× maior em até 1 hora",
      description: "Responder um lead em até 60 minutos torna 7 vezes mais provável que ele seja qualificado.",
      source: "Estudo Velocify/ICE"
    },
    {
      icon: Users,
      title: "78% dos clientes compram de quem responde primeiro",
      description: "78% dos consumidores escolhem comprar da empresa que primeiro responde suas dúvidas.",
      source: "Relatório HubSpot"
    },
    {
      icon: Target,
      title: "Conversão até 21× maior em 5 minutos",
      description: "Respostas feitas em 5 minutos resultam em uma taxa de conversão até 21 vezes maior do que as feitas após 30 minutos.",
      source: "Estudo InsideSales/XANT"
    }
  ];

  return (
    <section className="animate-fade-in">
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl" style={{ backgroundColor: '#E8EDFE' }}>
            <TrendingUp className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#1946e9' }} />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#0F1215' }}>
            Retorno do Investimento
          </h2>
        </div>
        
        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group relative">
                <div className="flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl md:rounded-2xl border hover:shadow-lg transition-all duration-300" 
                     style={{ 
                       border: '1px solid #E0E7FF',
                       background: 'linear-gradient(to bottom right, white, #F0F4FF)'
                     }}>
                  <div className="p-3 md:p-4 rounded-xl" style={{ backgroundColor: '#E8EDFE' }}>
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#1946e9' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors" style={{ color: '#0F1215' }}>
                      {stat.title}
                    </h3>
                    <p className="leading-relaxed text-sm md:text-base mb-2" style={{ color: '#615E83' }}>
                      {stat.description}
                    </p>
                    <p className="text-xs md:text-sm font-medium" style={{ color: '#807E9A' }}>
                      Fonte: {stat.source}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Calculadora de ROI personalizada */}
        <div className="border-2 rounded-xl md:rounded-2xl p-6 md:p-8"
             style={{ 
               border: '1px solid #E0E7FF',
               background: 'linear-gradient(to bottom right, white, #F0F4FF)'
             }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl" style={{ backgroundColor: '#E8EDFE' }}>
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#1946e9' }} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#0F1215' }}>
              Calcule seu ROI Personalizado
            </h3>
          </div>
          
          <ROICalculator />
        </div>
      </div>
    </section>
  );
};
