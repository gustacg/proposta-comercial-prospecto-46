
import { Clock } from "lucide-react";

export const ProposalHeader = () => {
  return (
    <header className="relative overflow-hidden min-h-[90vh] flex items-center rounded-b-3xl" style={{ background: 'linear-gradient(135deg, #1946e9 0%, #2953eb 100%)' }}>
      {/* Background overlays */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-600/30"></div>
      
      {/* Simple background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-20 z-10">
        <div className="space-y-10 animate-fade-in">
          {/* Logo da Prospecto centralizada */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-blue-300/20 rounded-full blur-2xl animate-glow"></div>
              <img 
                src="/horizontal.svg" 
                alt="Prospecto"
                className="relative h-8 md:h-10 w-auto filter drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                style={{ width: 'auto', maxWidth: '200px' }}
              />
            </div>
          </div>
          
          <div className="space-y-6 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white px-4">
              <span className="inline-block animate-fade-in">AGENTE SDR QUALIFICADOR</span>
              <span className="block text-white animate-fade-in" style={{ animationDelay: '0.3s' }}>
                DE LEADS COM IA
              </span>
            </h1>
            
            {/* Subtítulo com destaque */}
            <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Sistema completo para <strong>AutoMarcas Veículos</strong> - Qualificação inteligente de leads para consórcio, estética automotiva e equipamentos
            </p>
            
            {/* Texto de validade com novo estilo */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Clock className="w-4 h-4 text-white/80" />
              <span className="text-base md:text-lg text-white font-medium">
                Válida apenas por 72 horas
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </header>
  );
};
