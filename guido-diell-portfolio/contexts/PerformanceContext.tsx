/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface NavigatorWithDeviceHints extends Navigator {
  deviceMemory?: number;
  connection?: {
    saveData?: boolean;
  };
}

interface PerformanceContextValue {
  autoPerformanceMode: boolean;
}

const PerformanceContext = createContext<PerformanceContextValue | undefined>(undefined);

function shouldUsePerformanceMode() {
  if (typeof window === 'undefined') return false;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const nav = navigator as NavigatorWithDeviceHints;
  const lowMemory = typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 4;
  const lowConcurrency = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;
  const saveData = Boolean(nav.connection?.saveData);

  return reducedMotion || coarsePointer || lowMemory || lowConcurrency || saveData;
}

export function PerformanceProvider({ children }: { children: React.ReactNode }) {
  const [autoPerformanceMode, setAutoPerformanceMode] = useState(shouldUsePerformanceMode);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointer = window.matchMedia('(pointer: coarse)');
    const updateMode = () => setAutoPerformanceMode(shouldUsePerformanceMode());

    reducedMotion.addEventListener('change', updateMode);
    coarsePointer.addEventListener('change', updateMode);
    return () => {
      reducedMotion.removeEventListener('change', updateMode);
      coarsePointer.removeEventListener('change', updateMode);
    };
  }, []);

  const value = useMemo(() => ({ autoPerformanceMode }), [autoPerformanceMode]);

  return <PerformanceContext.Provider value={value}>{children}</PerformanceContext.Provider>;
}

export function usePerformanceMode() {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error('usePerformanceMode must be used within PerformanceProvider');
  }
  return context;
}
