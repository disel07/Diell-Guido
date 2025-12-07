
import React, { useState, useEffect } from 'react';
import { PlanConfig, Sector, EducationPath, RiskProfile, EconomicZone } from '../types';
import { MARKET_DATA, ZONE_DEFAULTS, RISK_PRESETS } from '../constants';
import { Briefcase, MapPin, DollarSign, GraduationCap, Plane, Database } from 'lucide-react';

interface Props {
  plan: PlanConfig;
  onChange: (newPlan: PlanConfig) => void;
}

export const PlanConfigurator: React.FC<Props> = ({ plan, onChange }) => {
  const [activeTab, setActiveTab] = useState<'career' | 'finance'>('career');

  const handleChange = (key: keyof PlanConfig, value: any) => {
    onChange({ ...plan, [key]: value });
  };

  // Smart Update: When Sector or Zone changes, pull new market data
  const updateMarketData = (newSector: Sector, newZone: EconomicZone) => {
    const data = MARKET_DATA[newSector][newZone];
    // We only update salary/growth. We preserve user's custom tax/living if they modified it? 
    // For simplicity, let's also suggest defaults but allow override.
    const defaults = ZONE_DEFAULTS[newZone];
    
    onChange({
      ...plan,
      sector: newSector,
      economicZone: newZone,
      baseSalary: data.start,
      salaryGrowth: data.growth,
      // Reset defaults on zone change
      taxRate: defaults.tax,
      monthlyCostOfLiving: defaults.livingCost
    });
  };

  const handleRiskChange = (risk: RiskProfile) => {
    onChange({
        ...plan,
        riskProfile: risk,
        investmentReturnRate: RISK_PRESETS[risk]
    });
  };

  const formatMoney = (val: number) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  const formatPercent = (val: number) => (val * 100).toFixed(1) + '%';

  return (
    <div className="bg-slate-800 rounded-2xl border-l-4 shadow-xl overflow-hidden flex flex-col h-full" style={{ borderColor: plan.color }}>
      {/* Header */}
      <div className="p-5 border-b border-slate-700 bg-slate-900/50">
        <input 
            type="text" 
            value={plan.name} 
            onChange={(e) => handleChange('name', e.target.value)}
            className="bg-transparent text-xl font-bold text-white focus:outline-none focus:border-b border-blue-500 w-full placeholder-slate-500"
            placeholder="Nome del Piano"
        />
        <div className="flex flex-wrap gap-2 mt-2 text-xs text-slate-400">
             <span className="px-2 py-0.5 rounded bg-slate-700 text-slate-200">{plan.sector}</span>
             <span className="px-2 py-0.5 rounded bg-slate-700 text-slate-200">{plan.economicZone.split('(')[0]}</span>
             <span className="px-2 py-0.5 rounded bg-green-900/50 text-green-400 border border-green-800">
                Data: {formatMoney(plan.baseSalary)}/yr
             </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-700">
        <button 
            onClick={() => setActiveTab('career')}
            className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'career' ? 'text-white bg-slate-700/50 border-b-2 border-blue-500' : 'text-slate-500 hover:text-slate-300'}`}
        >
            <Briefcase size={16}/> Carriera & Luogo
        </button>
        <button 
            onClick={() => setActiveTab('finance')}
            className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'finance' ? 'text-white bg-slate-700/50 border-b-2 border-blue-500' : 'text-slate-500 hover:text-slate-300'}`}
        >
            <DollarSign size={16}/> Soldi & Rischio
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 overflow-y-auto space-y-6">
        
        {activeTab === 'career' && (
            <>
                {/* MACRO CHOICES */}
                <div className="space-y-4">
                    <div>
                        <label className="text-xs text-slate-400 uppercase font-bold block mb-2">1. In che settore lavori?</label>
                        <select 
                            value={plan.sector} 
                            onChange={(e) => updateMarketData(e.target.value as Sector, plan.economicZone)}
                            className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            {Object.values(Sector).map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="text-xs text-slate-400 uppercase font-bold block mb-2">2. Dove inizi la tua carriera?</label>
                        <select 
                            value={plan.economicZone} 
                            onChange={(e) => updateMarketData(plan.sector, e.target.value as EconomicZone)}
                            className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            {Object.values(EconomicZone).map(z => <option key={z} value={z}>{z}</option>)}
                        </select>
                    </div>

                    {/* MARKET DATA CARD */}
                    <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-3 flex items-start gap-3">
                        <Database className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                        <div>
                            <p className="text-xs text-blue-300 font-bold mb-1">Dati di Mercato Applicati</p>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Basato su dati reali 2024, un <strong>{plan.sector}</strong> in <strong>{plan.economicZone}</strong> parte da circa <span className="text-white font-mono">{formatMoney(plan.baseSalary)}</span> con una crescita annua del <span className="text-white font-mono">{((plan.salaryGrowth - 1) * 100).toFixed(1)}%</span>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-700">
                    <label className="text-xs text-slate-400 uppercase font-bold flex items-center gap-2"><GraduationCap size={14}/> Istruzione</label>
                    <div className="flex gap-2 bg-slate-900 p-1 rounded-lg">
                        <button 
                            onClick={() => handleChange('education', EducationPath.NONE)}
                            className={`flex-1 text-xs py-2 rounded-md transition-colors ${plan.education === EducationPath.NONE ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                            Lavoro Subito
                        </button>
                        <button 
                            onClick={() => handleChange('education', EducationPath.DEGREE)}
                            className={`flex-1 text-xs py-2 rounded-md transition-colors ${plan.education === EducationPath.DEGREE ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                            Università
                        </button>
                    </div>
                    {plan.education === EducationPath.DEGREE && (
                         <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
                            <div>
                                <label className="text-xs text-slate-500 block mb-1">Anni studio</label>
                                <input 
                                    type="number" 
                                    value={plan.educationYears}
                                    onChange={(e) => handleChange('educationYears', parseInt(e.target.value))}
                                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-slate-200"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-slate-500 block mb-1">Costo Annuo (€)</label>
                                <input 
                                    type="number" 
                                    value={plan.educationCostPerYear}
                                    onChange={(e) => handleChange('educationCostPerYear', parseInt(e.target.value))}
                                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-sm text-slate-200"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* FUTURE MOVE LOGIC */}
                <div className="space-y-3 pt-4 border-t border-slate-700">
                     <label className="text-xs text-slate-400 uppercase font-bold flex items-center gap-2"><Plane size={14}/> Futuro</label>
                     <div className="flex items-center gap-2">
                        <input 
                            type="checkbox" 
                            checked={!!plan.movesAbroadAge}
                            onChange={(e) => {
                                if (e.target.checked) handleChange('movesAbroadAge', 26);
                                else handleChange('movesAbroadAge', null);
                            }}
                            className="w-4 h-4 rounded bg-slate-700 border-slate-600 accent-blue-500"
                        />
                        <span className="text-sm text-slate-300">Pianifico di trasferirmi più avanti</span>
                     </div>
                     
                     {plan.movesAbroadAge && (
                        <div className="bg-slate-900/50 p-3 rounded-lg space-y-3 animate-in fade-in">
                            <div>
                                <label className="text-xs text-slate-500 block mb-1">A che età?</label>
                                <input 
                                    type="range" min="20" max="50"
                                    value={plan.movesAbroadAge}
                                    onChange={(e) => handleChange('movesAbroadAge', parseInt(e.target.value))}
                                    className="w-full accent-blue-500"
                                />
                                <div className="text-right text-xs text-white">{plan.movesAbroadAge} anni</div>
                            </div>
                            <div>
                                <label className="text-xs text-slate-500 block mb-1">Verso quale zona?</label>
                                <select 
                                    value={plan.targetZoneAfterMove} 
                                    onChange={(e) => handleChange('targetZoneAfterMove', e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded p-2 text-xs"
                                >
                                    {Object.values(EconomicZone).filter(z => z !== plan.economicZone).map(z => <option key={z} value={z}>{z}</option>)}
                                </select>
                            </div>
                        </div>
                     )}
                </div>
            </>
        )}

        {activeTab === 'finance' && (
            <div className="space-y-6">
                <div className="space-y-3">
                    <label className="text-xs text-slate-400 uppercase font-bold block mb-2">Profilo Rischio</label>
                    <select 
                        value={plan.riskProfile} 
                        onChange={(e) => handleRiskChange(e.target.value as RiskProfile)}
                        className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-lg p-2.5 text-sm"
                    >
                        {Object.values(RiskProfile).map(r => <option key={r} value={r}>{r}</option>)}
                    </select>

                     <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                            <span>Rendimento Annuo Stimato</span>
                            <span className="text-white">{formatPercent(plan.investmentReturnRate)}</span>
                        </div>
                        <input 
                            type="range" min="0.01" max="0.15" step="0.005"
                            value={plan.investmentReturnRate}
                            onChange={(e) => handleChange('investmentReturnRate', parseFloat(e.target.value))}
                            className="w-full accent-amber-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                </div>

                 <div className="pt-4 border-t border-slate-700 space-y-4">
                     <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                            <span>Quanto riesci a risparmiare? (% Stipendio)</span>
                            <span className="text-white">{formatPercent(plan.savingsRate)}</span>
                        </div>
                        <input 
                            type="range" min="0.05" max="0.70" step="0.05"
                            value={plan.savingsRate}
                            onChange={(e) => handleChange('savingsRate', parseFloat(e.target.value))}
                            className="w-full accent-emerald-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                        />
                        <p className="text-xs text-slate-500 mt-1">
                           Il costo della vita e le tasse sono già calcolati automaticamente in base alla zona scelta.
                        </p>
                    </div>
                </div>
                 
                 <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-700 mt-4">
                     <input 
                        type="checkbox" 
                        checked={plan.hasSideHustle}
                        onChange={(e) => handleChange('hasSideHustle', e.target.checked)}
                        className="w-5 h-5 rounded bg-slate-700 border-slate-600 accent-amber-500"
                    />
                    <div className="flex-1">
                        <label className="text-sm font-bold text-white block">Side Hustle</label>
                        <p className="text-xs text-slate-500">Hai un secondo lavoro o entrata extra?</p>
                        {plan.hasSideHustle && (
                             <input 
                                type="number" 
                                value={plan.sideHustleIncome}
                                onChange={(e) => handleChange('sideHustleIncome', parseInt(e.target.value))}
                                className="mt-2 w-full bg-slate-900 border border-slate-700 rounded p-1 text-sm text-slate-200"
                                placeholder="Extra annuale €"
                            />
                        )}
                    </div>
                </div>

            </div>
        )}

      </div>
    </div>
  );
};
