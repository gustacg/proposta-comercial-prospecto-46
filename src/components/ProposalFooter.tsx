
import { MessageCircle, Instagram } from "lucide-react";

export const ProposalFooter = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1946e9 0%, #2953eb 100%)' }}>
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative container mx-auto px-4 py-12 md:py-16 text-center">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Vamos transformar seu negócio juntos?
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#F2F1FF' }}>
              Estou aqui para tirar suas dúvidas e mostrar como podemos acelerar seus resultados
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/5598985544543" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 rounded-xl px-6 md:px-8 py-3 md:py-4 transition-all duration-300 hover:scale-110 font-semibold text-white text-base md:text-lg shadow-lg w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span>WhatsApp</span>
            </a>
            
            <a 
              href="https://www.instagram.com/prospecto_ia/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-gray-100 rounded-xl px-6 md:px-8 py-3 md:py-4 transition-all duration-300 hover:scale-110 font-semibold text-gray-800 text-base md:text-lg shadow-lg w-full sm:w-auto justify-center hover:shadow-2xl"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              <span>Instagram</span>
            </a>
          </div>
          
          <div className="pt-6 md:pt-8">
            <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
            <p className="text-sm md:text-base" style={{ color: '#D2CEFF' }}>
              © 2025 Gustavo Calixto - Agente SDR Qualificador de Leads com IA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
