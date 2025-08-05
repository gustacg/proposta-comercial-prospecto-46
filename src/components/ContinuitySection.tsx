
import { TrendingUp, Calculator } from "lucide-react";

export const ContinuitySection = () => {
  const services = [
    { name: "VPS Principal (MPCs)", value: "R$ 120" },
    { name: "VPS Workers (N8N)", value: "R$ 120" },
    { name: "VPS Manager", value: "R$ 120" },
    { name: "Supabase Pro", value: "R$ 158" },
    { name: "API WhatsApp Premium", value: "R$ 100" },
    { name: "OpenAI + Claude (LLMs)", value: "R$ 350" },
    { name: "Lovable (Plataforma)", value: "R$ 150" },
    { name: "Suporte técnico + Mão de obra", value: "R$ 500" }
  ];

  const totalValue = "1.618";

  return (
    <section className="animate-fade-in">
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl" style={{ backgroundColor: '#E8EDFE' }}>
            <TrendingUp className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#1946e9' }} />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#0F1215' }}>
            Plano de Continuidade
          </h2>
        </div>
        
        <div className="border rounded-xl md:rounded-2xl p-6 md:p-8"
             style={{ 
               border: '1px solid #E0E7FF',
               background: 'linear-gradient(to bottom right, white, #F0F4FF)'
             }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2" style={{ borderColor: '#E5E5EF' }}>
                  <th className="text-left py-3 md:py-4 px-2 text-lg md:text-xl font-semibold" style={{ color: '#0F1215' }}>
                    Serviço
                  </th>
                  <th className="text-right py-3 md:py-4 px-2 text-lg md:text-xl font-semibold" style={{ color: '#0F1215' }}>
                    Valor Mensal
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-white/50 transition-colors">
                    <td className="py-3 md:py-4 px-2 font-medium text-sm md:text-base" style={{ color: '#615E83' }}>
                      {service.name}
                    </td>
                    <td className="text-right py-3 md:py-4 px-2 text-base md:text-lg font-semibold" style={{ color: '#1946e9' }}>
                      {service.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Total destacado */}
          <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-xl md:rounded-2xl border-2 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300" 
               style={{ 
                 backgroundColor: '#FFFFFF', 
                 borderColor: '#1946e9',
                 background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F8FF 100%)'
               }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl" style={{ backgroundColor: '#E8EDFE' }}>
                  <Calculator className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#1946e9' }} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#0F1215' }}>
                    Total Mensal
                  </h3>
                  <p className="text-xs md:text-sm" style={{ color: '#615E83' }}>
                    Investimento para manutenção completa
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl md:text-4xl font-bold" style={{ color: '#1946e9' }}>
                  R$ {totalValue} <span className="text-xs md:text-sm font-medium" style={{ color: '#807E9A' }}>por mês</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
