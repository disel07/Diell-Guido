import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { SimulationResult, PlanConfig } from '../types';

interface Props {
  results: SimulationResult[];
  plans: PlanConfig[];
}

export const ChartSection: React.FC<Props> = ({ results, plans }) => {
  // Merge data based on age
  const mergedData = results[0].data.map((point, index) => {
    return {
      age: point.age,
      [plans[0].id]: point.totalNetWorth,
      [plans[1].id]: results[1].data[index]?.totalNetWorth || 0,
    };
  });

  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumSignificantDigits: 3 }).format(value);

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl mb-8">
      <div className="mb-6 flex justify-between items-end">
        <div>
            <h2 className="text-2xl font-bold text-white mb-2">Proiezione Patrimonio</h2>
            <p className="text-slate-400">Confronto accumulo ricchezza nel tempo.</p>
        </div>
      </div>
      
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={mergedData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              {plans.map((p) => (
                <linearGradient key={p.id} id={`color${p.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={p.color} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={p.color} stopOpacity={0}/>
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="age" stroke="#94a3b8" />
            <YAxis tickFormatter={(val) => `€${val/1000}k`} stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f1f5f9' }}
              formatter={(value: number) => formatCurrency(value)}
              labelFormatter={(label) => `Età: ${label}`}
            />
            <Legend />
            {plans.map((p) => (
              <Area 
                key={p.id}
                type="monotone" 
                dataKey={p.id} 
                name={p.name}
                stroke={p.color} 
                fillOpacity={1} 
                fill={`url(#color${p.id})`} 
                strokeWidth={3}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};