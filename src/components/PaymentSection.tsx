
import { CreditCard, Wallet, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const PaymentSection = () => {
  const totalValue = 13500; // R$ 8.500 + R$ 3.200 + R$ 1.800
  const cashValue = totalValue * 0.95; // 5% de desconto
  const cashDiscount = totalValue * 0.05;
  const installmentValue = totalValue / 2;

  // Estado para controlar o número de parcelas do crédito - alterado para 5 como padrão
  const [installments, setInstallments] = useState(5);
  
  // Nova lógica de juros (taxa simples)
  const getInterestRate = (installments: number) => {
    if (installments === 1) return 0.0299; // 2,99% à vista
    if (installments >= 2 && installments <= 6) return 0.0349; // 3,49% de 2 a 6 parcelas
    if (installments >= 7 && installments <= 12) return 0.0399; // 3,99% de 7 a 12 parcelas
    return 0.0429; // 4,29% de 13 a 21 parcelas
  };

  const interestRate = getInterestRate(installments);
  const creditTotal = totalValue * (1 + interestRate * installments); // Juros simples
  const creditInstallment = creditTotal / installments;

  const handleInstallmentChange = (increment: boolean) => {
    if (increment && installments < 21) {
      setInstallments(installments + 1);
    } else if (!increment && installments > 1) {
      setInstallments(installments - 1);
    }
  };

  return (
    <section className="animate-fade-in">
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl" style={{ backgroundColor: '#E8EDFE' }}>
            <CreditCard className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#1946e9' }} />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#0F1215' }}>
            Formas de Pagamento
          </h2>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {/* À vista - Com novo estilo */}
          <div className="border-2 border-green-500 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300" 
               style={{ background: 'linear-gradient(to bottom right, white, #e8f5e8)' }}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-8">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex-shrink-0">
                <Wallet className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">
                  À vista
                </h3>
                <p className="text-base md:text-lg text-green-600">
                  <strong>Economia de R$ {cashDiscount.toFixed(2).replace('.', ',')}</strong>
                </p>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: '#22c55e' }}>
                  R$ {cashValue.toFixed(2).replace('.', ',')}
                </div>
                 <div 
                   className="text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg mt-2 text-center w-fit sm:ml-auto overflow-hidden relative animate-shine"
                   style={{
                     background: 'linear-gradient(to right, #16a34a, #22c55e)',
                     animation: 'gentle-bounce 3s ease-in-out infinite'
                   }}
                 >
                   5% desconto
                 </div>
              </div>
            </div>
          </div>

          {/* Crédito - Dinâmico */}
          <div className="border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300"
               style={{ 
                 border: '1px solid #E0E7FF',
                 background: 'linear-gradient(to bottom right, white, #F0F4FF)'
               }}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-8">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl flex-shrink-0" style={{ background: 'linear-gradient(to right, #1946e9, #2953eb)' }}>
                <CreditCard className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#0F1215' }}>
                  Crédito
                </h3>
                <p className="text-base md:text-lg" style={{ color: '#615E83' }}>
                  Total: R$ {creditTotal.toFixed(2).replace('.', ',')}
                </p>
              </div>
              <div className="text-left sm:text-right">
                {/* Controle de parcelas */}
                <div className="flex items-center sm:justify-end gap-2 mb-2">
                  <button 
                    onClick={() => handleInstallmentChange(false)}
                    className="p-1 rounded-md hover:bg-blue-100 transition-colors"
                    disabled={installments <= 1}
                  >
                    <ChevronLeft className="w-4 h-4" style={{ color: installments <= 1 ? '#ccc' : '#1946e9' }} />
                  </button>
                  <span className="text-lg font-semibold px-3" style={{ color: '#1946e9' }}>
                    {installments}x
                  </span>
                   <button 
                     onClick={() => handleInstallmentChange(true)}
                     className="p-1 rounded-md hover:bg-blue-100 transition-colors"
                     disabled={installments >= 21}
                   >
                     <ChevronRight className="w-4 h-4" style={{ color: installments >= 21 ? '#ccc' : '#1946e9' }} />
                   </button>
                </div>
                {/* Valor da parcela */}
                <div className="text-xl md:text-2xl font-bold" style={{ color: '#1946e9' }}>
                  R$ {creditInstallment.toFixed(2).replace('.', ',')}
                </div>
              </div>
            </div>
          </div>

          {/* Duas parcelas */}
          <div className="border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300"
               style={{ 
                 border: '1px solid #E0E7FF',
                 background: 'linear-gradient(to bottom right, white, #F0F4FF)'
               }}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-8">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl flex-shrink-0" style={{ background: 'linear-gradient(to right, #1946e9, #2953eb)' }}>
                <Calendar className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#0F1215' }}>
                  Duas parcelas
                </h3>
                 <p className="text-base md:text-lg" style={{ color: '#615E83' }}>
                   40% na assinatura R$ {(totalValue * 0.4).toFixed(2).replace('.', ',')} + 60% na entrega R$ {(totalValue * 0.6).toFixed(2).replace('.', ',')}
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
