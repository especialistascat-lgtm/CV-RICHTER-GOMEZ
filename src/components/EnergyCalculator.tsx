import React, { useState } from 'react';
import { 
  Calculator, 
  Zap, 
  TrendingDown, 
  Leaf, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const EnergyCalculator: React.FC = () => {
  const [annualConsumptionMWh, setAnnualConsumptionMWh] = useState<number>(1200);
  const [energyTariffUSD, setEnergyTariffUSD] = useState<number>(0.095); // USD/kWh
  const [estimatedEfficiencyGain, setEstimatedEfficiencyGain] = useState<number>(15); // %
  const [currentPowerFactor, setCurrentPowerFactor] = useState<number>(0.86);

  // Calculations
  const totalAnnualCost = annualConsumptionMWh * 1000 * energyTariffUSD;
  const annualSavingsUSD = totalAnnualCost * (estimatedEfficiencyGain / 100);
  // Grid factor Peru ~ 0.38 tCO2e/MWh
  const co2AvoidedTons = (annualConsumptionMWh * (estimatedEfficiencyGain / 100)) * 0.38;
  const reactivePenaltyAvoidedUSD = currentPowerFactor < 0.96 ? totalAnnualCost * 0.045 : 0;
  const totalPotentialBenefitUSD = annualSavingsUSD + reactivePenaltyAvoidedUSD;
  const estimatedPaybackMonths = Math.max(6, Math.round(18 - (estimatedEfficiencyGain * 0.4)));

  return (
    <section id="calculadora" className="py-24 relative bg-slate-950/90 border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>HERRAMIENTA INTERACTIVA PARA CLIENTES & GERENCIAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculadora de Potencial de Eficiencia Energética & CO2
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Estime en segundos el beneficio económico y ambiental que una auditoría técnica especializada y optimización electromecánica puede generar en su planta.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Form (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                Parámetros Operativos
              </span>
              <button
                onClick={() => {
                  setAnnualConsumptionMWh(1200);
                  setEnergyTariffUSD(0.095);
                  setEstimatedEfficiencyGain(15);
                  setCurrentPowerFactor(0.86);
                }}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Restablecer
              </button>
            </div>

            {/* Slider 1: Consumo MWh */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="text-slate-300 font-medium">Consumo Eléctrico Anual:</label>
                <span className="font-mono font-bold text-emerald-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  {annualConsumptionMWh.toLocaleString()} MWh / año
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="50"
                value={annualConsumptionMWh}
                onChange={(e) => setAnnualConsumptionMWh(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>100 MWh (Pyme)</span>
                <span>5,000 MWh</span>
                <span>10,000 MWh (Gran Industria)</span>
              </div>
            </div>

            {/* Slider 2: Tarifa Eléctrica */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="text-slate-300 font-medium">Tarifa Promedio Estimada:</label>
                <span className="font-mono font-bold text-cyan-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  ${energyTariffUSD.toFixed(3)} USD / kWh
                </span>
              </div>
              <input
                type="range"
                min="0.05"
                max="0.20"
                step="0.005"
                value={energyTariffUSD}
                onChange={(e) => setEnergyTariffUSD(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>$0.050 / kWh</span>
                <span>$0.100 / kWh</span>
                <span>$0.200 / kWh</span>
              </div>
            </div>

            {/* Slider 3: Meta de Ahorro */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="text-slate-300 font-medium">Ahorro Estimado por Auditoría:</label>
                <span className="font-mono font-bold text-teal-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  {estimatedEfficiencyGain}% de reducción
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={estimatedEfficiencyGain}
                onChange={(e) => setEstimatedEfficiencyGain(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>5% (Medidas sin costo)</span>
                <span>15% (Auditoría ISO 50001)</span>
                <span>30% (Reingeniería integral)</span>
              </div>
            </div>

            {/* Selector: Factor de Potencia Actual */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="text-slate-300 font-medium">Factor de Potencia Actual (Cos φ):</label>
                <span className="font-mono font-bold text-amber-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  {currentPowerFactor.toFixed(2)} {currentPowerFactor < 0.96 ? '(Bajo - Con penalidad)' : '(Óptimo)'}
                </span>
              </div>
              <input
                type="range"
                min="0.75"
                max="0.99"
                step="0.01"
                value={currentPowerFactor}
                onChange={(e) => setCurrentPowerFactor(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0.75 (Alta penalidad)</span>
                <span>0.96 (Límite OSINERGMIN)</span>
                <span>0.99 (Compensado)</span>
              </div>
            </div>

          </div>

          {/* Results Display (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-emerald-500/40 shadow-2xl relative overflow-hidden">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Impacto Proyectado
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Estimación Modelo ISO 50001
                </span>
              </div>

              {/* Main Savings Big Metric */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/30 text-center space-y-1">
                <div className="text-xs text-slate-400 uppercase font-mono">
                  Ahorro Económico Potencial Anual
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 font-mono">
                  ${Math.round(totalPotentialBenefitUSD).toLocaleString()} USD / año
                </div>
                <div className="text-xs text-emerald-400/90 font-medium pt-1">
                  ~ S/ {Math.round(totalPotentialBenefitUSD * 3.75).toLocaleString()} PEN estimados anuales
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Leaf className="w-3.5 h-3.5 text-teal-400" />
                    <span>Reducción de Huella:</span>
                  </div>
                  <div className="text-lg font-bold text-white font-mono">
                    {Math.round(co2AvoidedTons).toLocaleString()} tCO2e/año
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Equivalente a {Math.round(co2AvoidedTons * 4.2)} árboles
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Retorno Estimado:</span>
                  </div>
                  <div className="text-lg font-bold text-white font-mono">
                    ~ {estimatedPaybackMonths} Meses
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Payback simple proyectado
                  </div>
                </div>
              </div>

              {/* Technical Note */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Diagnóstico in-situ con mediciones reales:</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Para obtener el plan de inversión con curvas de carga y factibilidad técnica certificada por el Ing. Richter Gomez, solicite una visita preliminar.
                </p>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-6 border-t border-slate-800">
              <a
                href="#contacto"
                className="w-full py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <span>Solicitar Auditoría Energética In-Situ</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
