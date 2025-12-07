import React from 'react';
import { SimulationResult, PlanConfig } from '../types';

interface Props {
  results: SimulationResult[];
  plans: PlanConfig[];
}

export const ComparisonTable: React.FC<Props> = ({ results, plans }) => {
  const milestones = [20, 25, 30, 40, 50, 60, 65];

  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
      <div className="p-6 border-b border-slate-700">
        <h3 className="text-xl font-bold text-white">Dettaglio Numerico per Età</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-900/50 text-slate-400 uppercase">
            <tr>
              <th className="px-6 py-4">Età</th>
              {plans.map(p => (
                <th key={p.id} className="px-6 py-4" style={{ color: p.color }}>{p.name}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {milestones.map(age => (
              <tr key={age} className="hover:bg-slate-700/30 transition-colors">
                <td className="px-6 py-4 font-bold text-white">{age} anni</td>
                {results.map((res, idx) => {
                  const dataPoint = res.data.find(d => d.age === age);
                  return (
                    <td key={`${res.planId}-${age}`} className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-base font-semibold text-white">
                          {dataPoint ? formatCurrency(dataPoint.totalNetWorth) : '-'}
                        </span>
                        <div className="flex gap-2 text-xs text-slate-500 mt-1">
                          <span className="px-1.5 py-0.5 bg-slate-700 rounded text-slate-300">{dataPoint?.role}</span>
                          <span className="px-1.5 py-0.5 bg-slate-700 rounded text-slate-300">{dataPoint?.location}</span>
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};