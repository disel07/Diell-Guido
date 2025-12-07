import React from 'react';
import { Trophy, TrendingUp, AlertTriangle } from 'lucide-react';
import { SimulationResult, PlanConfig } from '../types';

interface Props {
  resultA: SimulationResult;
  planA: PlanConfig;
  resultB: SimulationResult;
  planB: PlanConfig;
}

export const AnalysisPanel: React.FC<Props> = ({ resultA, planA, resultB, planB }) => {
  const winner = resultA.finalNetWorth > resultB.finalNetWorth ? planA : planB;
  const difference = Math.abs(resultA.finalNetWorth - resultB.finalNetWorth);
  
  const formatMoney = (val: number) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-xl mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-yellow-500/20 p-2 rounded-full">
            <Trophy className="text-yellow-500 w-6 h-6" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-white">Analisi del Vincitore: <span style={{ color: winner.color }}>{winner.name}</span></h3>
            <p className="text-slate-400 text-sm">Differenza a 65 anni: <span className="text-white font-mono">{formatMoney(difference)}</span></p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
        <div>
            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <TrendingUp size={16} className="text-blue-400"/> Punti di Forza
            </h4>
            <ul className="space-y-2 list-disc pl-4">
                {winner.riskProfile.includes('Crypto') && <li>L'elevato rischio (Crypto/VC) ha generato rendimenti esponenziali, ma ricorda che la varianza reale potrebbe azzerarli.</li>}
                {winner.startsAbroad || winner.movesAbroadAge ? <li>Il fattore <strong>Geografico</strong> è decisivo: stipendi esteri (2x-3x) battono quasi sempre il risparmio domestico.</li> : <li>Rimanere in patria ha mantenuto bassi i costi, ma il tetto salariale ha limitato la crescita esponenziale.</li>}
                {winner.education.includes('Università') ? <li>La <strong>Laurea</strong> ha ritardato l'ingresso, ma la curva salariale più ripida (Seniority) ha recuperato il gap dopo i 35 anni.</li> : <li>Lavorare <strong>Subito</strong> ha creato un vantaggio enorme di capitale iniziale che l'interesse composto ha fatto esplodere.</li>}
            </ul>
        </div>
        <div>
             <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <AlertTriangle size={16} className="text-amber-400"/> Fattori di Rischio
            </h4>
            <p className="mb-2">
                Stai confrontando <strong>{planA.riskProfile.split(' ')[0]}</strong> con <strong>{planB.riskProfile.split(' ')[0]}</strong>.
            </p>
            <p>
                Il piano vincente richiede costanza per <strong>47 anni</strong>. {winner.hasSideHustle ? "Mantenere un secondo lavoro per decenni è estenuante e rischia il burnout." : ""}
                {winner.sector.includes('Arts') ? "Il settore artistico ha una varianza enorme: potresti guadagnare molto meno della media stimata." : ""}
            </p>
        </div>
      </div>
    </div>
  );
};