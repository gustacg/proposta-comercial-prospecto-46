
import { Lightbulb } from "lucide-react";

export const MethodologyIllustrationSection = () => {
  return (
    <section className="animate-fade-in">
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl" style={{ backgroundColor: '#E8EDFE' }}>
            <Lightbulb className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#1946e9' }} />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#0F1215' }}>
            Metodologia Duplo Diamante
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300" 
                 style={{ background: 'linear-gradient(135deg, #F7F7FB 0%, #F2F1FF 100%)' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#0F1215' }}>
                Descobrir & Definir
              </h3>
              <p className="leading-relaxed text-sm md:text-base" style={{ color: '#615E83' }}>
                Exploramos amplamente o problema e definimos com precisão as necessidades do seu negócio
              </p>
            </div>
            
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300" 
                 style={{ background: 'linear-gradient(135deg, #F7F7FB 0%, #F2F1FF 100%)' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#0F1215' }}>
                Desenvolver & Entregar
              </h3>
              <p className="leading-relaxed text-sm md:text-base" style={{ color: '#615E83' }}>
                Criamos múltiplas soluções e refinamos até entregar a solução ideal para seu projeto
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <svg viewBox="0 0 400 200" className="w-full max-w-md h-auto">
                <defs>
                  <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#1946e9', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#2953eb', stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>
                
                {/* Primeiro Diamante - Descobrir */}
                <path d="M50 100 L100 50 L150 100 L100 150 Z" 
                      fill="url(#diamondGradient)" 
                      stroke="#1946e9" 
                      strokeWidth="2" />
                
                {/* Segundo Diamante - Desenvolver */}
                <path d="M250 100 L300 50 L350 100 L300 150 Z" 
                      fill="url(#diamondGradient)" 
                      stroke="#1946e9" 
                      strokeWidth="2" />
                
                {/* Linha conectora */}
                <line x1="150" y1="100" x2="250" y2="100" 
                      stroke="#1946e9" 
                      strokeWidth="3" 
                      strokeDasharray="5,5" />
                
                {/* Labels */}
                <text x="100" y="170" textAnchor="middle" className="text-sm font-semibold fill-current" style={{ color: '#0F1215' }}>
                  Descobrir
                </text>
                <text x="300" y="170" textAnchor="middle" className="text-sm font-semibold fill-current" style={{ color: '#0F1215' }}>
                  Entregar
                </text>
                
                {/* Pontos de destaque */}
                <circle cx="100" cy="100" r="4" fill="#1946e9" />
                <circle cx="300" cy="100" r="4" fill="#1946e9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
