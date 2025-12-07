
import React, { useState, useMemo } from 'react';
import { Layout } from './components/Layout';
import { ChartSection } from './components/ChartSection';
import { ComparisonTable } from './components/ComparisonTable';
import { AnalysisPanel } from './components/AnalysisPanel';
import { PlanConfigurator } from './components/PlanConfigurator';
import { runSimulation } from './services/simulationEngine';
import { DEFAULT_PLAN_A, DEFAULT_PLAN_B } from './constants';
import { PlanConfig } from './types';
import { ArrowRightLeft } from 'lucide-react';

const App: React.FC = () => {
  const [planA, setPlanA] = useState<PlanConfig>(DEFAULT_PLAN_A);
  const [planB, setPlanB] = useState<PlanConfig>(DEFAULT_PLAN_B);

  // Run simulations when plans change
  const resultA = useMemo(() => runSimulation(planA), [planA]);
  const resultB = useMemo(() => runSimulation(planB), [planB]);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 sm:text-5xl tracking-tight">
          Life Simulator
        </h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Progetta due vite parallele. Scegli carriera e zona economica; noi calcoliamo il resto con dati reali.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-10 relative">
        <PlanConfigurator plan={planA} onChange={setPlanA} />
        
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-900 border border-slate-700 rounded-full p-2">
            <ArrowRightLeft className="text-slate-400" />
        </div>
        
        <PlanConfigurator plan={planB} onChange={setPlanB} />
      </div>
      
      <ChartSection results={[resultA, resultB]} plans={[planA, planB]} />
      
      <AnalysisPanel resultA={resultA} planA={planA} resultB={resultB} planB={planB} />
      
      <ComparisonTable results={[resultA, resultB]} plans={[planA, planB]} />

      <footer className="text-center text-slate-600 text-xs py-10">
        <p>Disclaimer: Dati salariali basati su medie di mercato 2024. Le tasse sono stimate. Non costituisce consulenza finanziaria.</p>
      </footer>
    </Layout>
  );
};

export default App;
