import React from 'react';
import { SimulationParams } from '../types';

interface Props {
  params: SimulationParams;
  setParams: (p: SimulationParams) => void;
}

export const Controls: React.FC<Props> = ({ params, setParams }) => {
  const handleChange = (key: keyof SimulationParams, value: number) => {
    setParams({ ...params, [key]: value });
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-8">
      <h3 className="text-white font-bold mb-4">Parametri Simulazione</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <label className="block text-xs text-slate-400 mb-1">Rendimento Investimenti (Reale)</label>
          <input 
            type="range" min="0.02" max="0.10" step="0.01"
            value={params.investmentReturnRate}
            onChange={(e) => handleChange('investmentReturnRate', parseFloat(e.target.value))}
            className="w-full accent-blue-500"
          />
          <span className="text-white font-mono">{(params.investmentReturnRate * 100).toFixed(0)}%</span>
        </div>
        
        <div>
          <label className="block text-xs text-slate-400 mb-1">Scenario B: Anni prima dell'espatrio</label>
          <input 
            type="range" min="20" max="35" step="1"
            value={params.scenarioBMoveAge}
            onChange={(e) => handleChange('scenarioBMoveAge', parseInt(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <span className="text-white font-mono">A {params.scenarioBMoveAge} anni</span>
        </div>

         <div>
          <label className="block text-xs text-slate-400 mb-1">Scenario C: Età Cambio Carriera</label>
          <input 
            type="range" min="20" max="40" step="1"
            value={params.scenarioCTransitionAge}
            onChange={(e) => handleChange('scenarioCTransitionAge', parseInt(e.target.value))}
            className="w-full accent-amber-500"
          />
          <span className="text-white font-mono">A {params.scenarioCTransitionAge} anni</span>
        </div>

        <div>
          <label className="block text-xs text-slate-400 mb-1">Inflazione Stimata</label>
          <div className="text-white font-mono p-2 bg-slate-900 rounded border border-slate-700">
            {(params.inflationRate * 100).toFixed(1)}% (Fissa)
          </div>
        </div>
      </div>
    </div>
  );
};