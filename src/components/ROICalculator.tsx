
import { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

interface ROIData {
  leadsPerMonth: number;
  clientsPerMonth: number;
  averageTicket: number;
}

export const ROICalculator = () => {
  const [formData, setFormData] = useState<ROIData>({
    leadsPerMonth: 0,
    clientsPerMonth: 0,
    averageTicket: 0
  });
  
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: keyof ROIData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const calculateROI = () => {
    setShowResults(true);
  };

  // Custo mensal da IA (baseado nos valores da seção de pagamento)
  const iaCostMonthly = 2450; // Custo da IA por mês

  // Cálculos baseados nos dados do formulário
  const currentConversionRate = formData.leadsPerMonth > 0 ? (formData.clientsPerMonth / formData.leadsPerMonth) * 100 : 0;
  const improvedConversionRate = currentConversionRate * 1.5; // 50% de melhoria
  const currentRevenue = formData.clientsPerMonth * formData.averageTicket;
  const improvedRevenue = (formData.leadsPerMonth * (improvedConversionRate / 100)) * formData.averageTicket;
  
  // Lucro atual e com IA (sem custos fixos)
  const currentProfit = currentRevenue;
  const improvedProfit = improvedRevenue - iaCostMonthly;
  
  // Diferença de lucro mensal
  const monthlyProfitIncrease = improvedProfit - currentProfit;
  
  // ROI da IA (retorno sobre investimento)
  const roiPercentage = iaCostMonthly > 0 ? (monthlyProfitIncrease / iaCostMonthly) * 100 : 0;

  // Dados para o gráfico (12 meses)
  const chartData = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    const currentValue = currentProfit;
    const improvedValue = improvedProfit * (1 + (month * 0.02)); // Crescimento mais conservador
    const difference = improvedValue - currentValue;
    
    return {
      month: `Mês ${month}`,
      atual: currentValue,
      comIA: improvedValue,
      diferenca: difference
    };
  });

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 md:p-4 rounded-lg shadow-lg border text-xs md:text-sm">
          <p className="font-semibold text-gray-800">{label}</p>
          <p className="text-blue-600">
            <span className="font-medium">Lucro Atual:</span> R$ {data.atual.toLocaleString('pt-BR')}
          </p>
          <p className="text-green-600">
            <span className="font-medium">Lucro com IA:</span> R$ {data.comIA.toLocaleString('pt-BR')}
          </p>
          <p className="text-orange-600 font-bold">
            <span className="font-medium">Diferença:</span> +R$ {data.diferenca.toLocaleString('pt-BR')}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Formulário */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="leads">Leads por mês</Label>
          <Input
            id="leads"
            type="number"
            placeholder="Ex: 100"
            value={formData.leadsPerMonth || ""}
            onChange={(e) => handleInputChange("leadsPerMonth", e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="clients">Clientes fechados por mês</Label>
          <Input
            id="clients"
            type="number"
            placeholder="Ex: 10"
            value={formData.clientsPerMonth || ""}
            onChange={(e) => handleInputChange("clientsPerMonth", e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="ticket">Ticket médio (R$)</Label>
          <Input
            id="ticket"
            type="number"
            placeholder="Ex: 1000"
            value={formData.averageTicket || ""}
            onChange={(e) => handleInputChange("averageTicket", e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={calculateROI}
          className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-shine"
          style={{
            background: 'linear-gradient(to right, #1e40af, #2563eb)',
            animation: 'gentle-bounce 3s ease-in-out infinite'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(to right, #3b82f6, #60a5fa)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(to right, #1e40af, #2563eb)';
          }}
        >
          <Calculator className="w-6 h-6 md:w-4 md:h-4 mr-2" />
          Calcular ROI Personalizado
        </button>
      </div>

      {/* Resultados */}
      {showResults && (
        <div className="space-y-6">
          {/* ROI da IA em destaque */}
          <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">ROI do Investimento em IA</h4>
              <p className="text-4xl font-bold text-blue-600 mb-2">
                {roiPercentage.toFixed(0)}%
              </p>
              <p className="text-blue-700">
                Para cada R$ 1,00 investido na IA, você tem R$ {(roiPercentage/100 + 1).toFixed(2)} de retorno
              </p>
            </div>
          </div>

          {/* Métricas principais em caixa verde */}
          <div className="bg-green-100 border-2 border-green-300 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Taxa de Conversão Atual</h4>
                <p className="text-2xl font-bold text-gray-800">{currentConversionRate.toFixed(1)}%</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Taxa com IA</h4>
                <p className="text-2xl font-bold text-green-600">{improvedConversionRate.toFixed(1)}%</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Aumento Mensal no Lucro</h4>
                <p className="text-2xl font-bold text-green-600">+R$ {monthlyProfitIncrease.toLocaleString('pt-BR')}</p>
              </div>
            </div>
          </div>

          {/* Gráfico de linhas */}
          <div className="bg-white rounded-xl p-3 md:p-6">
            <h4 className="text-base md:text-lg font-semibold mb-4 text-gray-800">Projeção de Lucro - 12 Meses</h4>
            <div className="h-64 md:h-80 overflow-x-auto">
              <div className="min-w-[600px] h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="month" 
                      tick={{ fontSize: 10 }}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                      interval={0}
                    />
                    <YAxis 
                      tickFormatter={(value) => `R$ ${(value/1000).toFixed(0)}k`}
                      tick={{ fontSize: 10 }}
                      width={60}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                      type="monotone" 
                      dataKey="atual" 
                      stroke="#94a3b8" 
                      strokeWidth={2}
                      dot={{ fill: '#94a3b8', strokeWidth: 1, r: 3 }}
                      activeDot={{ r: 4, stroke: '#94a3b8', strokeWidth: 2 }}
                      name="Lucro Atual"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="comIA" 
                      stroke="#1946e9" 
                      strokeWidth={2}
                      dot={{ fill: '#1946e9', strokeWidth: 1, r: 3 }}
                      activeDot={{ r: 4, stroke: '#1946e9', strokeWidth: 2 }}
                      name="Lucro com IA"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Projeção de longo prazo - diferença de lucro */}
          <div className="bg-green-100 rounded-xl p-6 text-center">
            <h4 className="text-lg font-semibold text-green-800 mb-2">Aumento no Lucro em 12 meses</h4>
            <p className="text-3xl font-bold text-green-600">
              +R$ {(monthlyProfitIncrease * 12).toLocaleString('pt-BR')}
            </p>
            <p className="text-green-700 mt-2">
              Diferença total no lucro anual
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
