
import { Target } from "lucide-react";

export const ObjectiveSection = () => {
  return (
    <section className="animate-fade-in">
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl" style={{ backgroundColor: '#E8EDFE' }}>
            <Target className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#1946e9' }} />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#0F1215' }}>
            Qual o objetivo da Prospecto?
          </h2>
        </div>
        
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 md:p-8 border border-blue-100">
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#615E83' }}>
            Na Prospecto, <strong>transformamos processos em resultados</strong> com automação e marketing inteligente. 
            Unimos estratégia, tecnologia e conhecimento do comportamento do cliente para gerar valor e <strong>aumentar suas vendas</strong>.
          </p>
          <br />
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#615E83' }}>
            <strong>Mais do que um projeto, somos parceiros do seu negócio</strong>: identificamos oportunidades, 
            otimizamos o atendimento, automatizamos tarefas do dia a dia e aplicamos estratégias 
            para atrair, nutrir e converter mais clientes. Assumimos toda a estrutura, desde a comunicação até integrações e melhorias contínuas, 
            para que seu negócio <strong>cresça com consistência</strong>.
          </p>
          <br />
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#615E83' }}>
            Com a Prospecto, você tem <strong>automação com inteligência</strong>, <strong>vendas com estratégia</strong> e uma <strong>operação pronta para escalar</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};
