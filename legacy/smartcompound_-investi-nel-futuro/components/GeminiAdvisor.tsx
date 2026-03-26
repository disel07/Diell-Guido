import React, { useState, useEffect } from 'react';
import { SimulationResult, SimulationParams, Language } from '../types';
import { Sparkles, Bot } from 'lucide-react';
import { translations } from '../utils/translations';

interface GeminiAdvisorProps {
  result: SimulationResult;
  params: SimulationParams;
  language: Language;
}

const GeminiAdvisor: React.FC<GeminiAdvisorProps> = ({ result, params, language }) => {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string | null>(null);

  useEffect(() => {
    setAdvice(null);
  }, [language]);

  const t = translations[language].advisor;

  const generateAdvice = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/gemini-advice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          result,
          params,
          language
        })
      });
      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }
      const data = await response.json();

      setAdvice(data?.advice || "No response generated.");
    } catch (error) {
      console.error(error);
      setAdvice(t.errorGen + " (Backend endpoint /api/gemini-advice not available)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-slate-800/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-700 shadow-xl">
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20">
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100">
                {t.title}
              </h3>
              <p className="text-xs text-slate-400">{t.subtitle}</p>
            </div>
          </div>
          
          {!advice && (
            <button
              onClick={generateAdvice}
              disabled={loading}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all transform active:scale-95 ${
                loading 
                  ? 'bg-slate-700 cursor-not-allowed text-slate-400' 
                  : 'bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-900/20'
              }`}
            >
              {loading ? (
                <>
                  <Bot className="w-4 h-4 animate-spin" /> {t.buttonLoading}
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" /> {t.buttonIdle}
                </>
              )}
            </button>
          )}
        </div>

        {advice ? (
          <div className="animate-fadeIn">
             <div className="prose prose-invert prose-sm max-w-none text-slate-300 bg-indigo-950/30 p-5 rounded-xl border border-indigo-500/20">
                <div style={{ whiteSpace: 'pre-line' }} className="leading-relaxed font-medium">
                  {advice.replace(/\*\*/g, '')}
                </div>
             </div>
             <p className="text-xs text-slate-500 mt-3 text-center flex items-center justify-center gap-1">
               {t.disclaimer}
             </p>
          </div>
        ) : (
          !loading && (
            <div className="bg-slate-900/50 rounded-xl p-6 text-center border border-dashed border-slate-700">
              <p className="text-slate-400 text-sm mb-2">
                {t.placeholderTitle}
              </p>
              <p className="text-indigo-400 text-sm font-medium">
                {t.placeholderText}
              </p>
              <p className="text-[10px] text-slate-500 mt-3">
                AI requests are handled only via secure backend endpoint <code>/api/gemini-advice</code>.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default GeminiAdvisor;
