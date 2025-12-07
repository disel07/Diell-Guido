
import React from 'react';
import { TrendingUp, AlertCircle } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white pb-24">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              CareerPath Proiezioni
            </h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Persistent Disclaimer Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-950/90 border-t border-slate-800 backdrop-blur-lg z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={20} />
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            <strong className="text-slate-200">Disclaimer Importante:</strong> Questa è soltanto una simulazione per analizzare dati teorici. Nella vita reale ci sono imprevisti, problemi di salute, situazioni personali complesse, competenze individuali e anche un po' di fortuna. I risultati mostrati sono indicativi e non garantiti. Tutti possono sbagliare.
          </p>
        </div>
      </div>
    </div>
  );
};
