
import { Sector, RiskProfile, PlanConfig, EducationPath, EconomicZone } from './types';

export const GLOBAL_CONSTANTS = {
  START_AGE: 18,
  RETIREMENT_AGE: 65,
  INFLATION_RATE: 0.025,
};

// --- DATA INTELLIGENCE ---
// Realistic market data based on current economic stats (2024 estimates)
// Format: [Sector][Zone] = { start: GrossAnnual, growth: YearlyMultiplier }

interface MarketStats {
  start: number;
  growth: number;
}

export const MARKET_DATA: Record<Sector, Record<EconomicZone, MarketStats>> = {
  [Sector.IT]: {
    [EconomicZone.ITALY]: { start: 24000, growth: 1.045 }, // Junior dev Italy, slow but steady
    [EconomicZone.NORTH_EU]: { start: 48000, growth: 1.05 }, // Amsterdam/Berlin junior
    [EconomicZone.HIGH_WAGE]: { start: 85000, growth: 1.06 }, // US/Swiss/Aus entry level
  },
  [Sector.FINANCE]: {
    [EconomicZone.ITALY]: { start: 26000, growth: 1.05 },
    [EconomicZone.NORTH_EU]: { start: 52000, growth: 1.055 },
    [EconomicZone.HIGH_WAGE]: { start: 90000, growth: 1.07 },
  },
  [Sector.MEDICINE]: {
    [EconomicZone.ITALY]: { start: 25000, growth: 1.04 }, // Residency is low paid
    [EconomicZone.NORTH_EU]: { start: 60000, growth: 1.03 },
    [EconomicZone.HIGH_WAGE]: { start: 100000, growth: 1.04 },
  },
  [Sector.TRADES]: {
    [EconomicZone.ITALY]: { start: 20000, growth: 1.025 },
    [EconomicZone.NORTH_EU]: { start: 40000, growth: 1.025 },
    [EconomicZone.HIGH_WAGE]: { start: 65000, growth: 1.03 },
  },
  [Sector.SERVICE]: {
    [EconomicZone.ITALY]: { start: 18000, growth: 1.015 }, // Waiter/Pizza
    [EconomicZone.NORTH_EU]: { start: 35000, growth: 1.02 },
    [EconomicZone.HIGH_WAGE]: { start: 55000, growth: 1.02 },
  },
  [Sector.ARTS]: {
    [EconomicZone.ITALY]: { start: 15000, growth: 1.03 },
    [EconomicZone.NORTH_EU]: { start: 30000, growth: 1.035 },
    [EconomicZone.HIGH_WAGE]: { start: 45000, growth: 1.04 },
  },
};

export const ZONE_DEFAULTS: Record<EconomicZone, { tax: number, livingCost: number }> = {
  [EconomicZone.ITALY]: { tax: 0.30, livingCost: 1000 },
  [EconomicZone.NORTH_EU]: { tax: 0.38, livingCost: 2000 },
  [EconomicZone.HIGH_WAGE]: { tax: 0.32, livingCost: 2800 }, // US tax lower, cost higher. Swiss tax low, cost very high.
};

export const RISK_PRESETS: Record<RiskProfile, number> = {
  [RiskProfile.CONSERVATIVE]: 0.03,
  [RiskProfile.BALANCED]: 0.07,
  [RiskProfile.AGGRESSIVE]: 0.10,
  [RiskProfile.DEGEN]: 0.15,
};

// Initial States
export const DEFAULT_PLAN_A: PlanConfig = {
  id: 'A',
  name: 'Piano A: Italia',
  color: '#3b82f6', 
  sector: Sector.IT,
  economicZone: EconomicZone.ITALY,
  baseSalary: MARKET_DATA[Sector.IT][EconomicZone.ITALY].start,
  salaryGrowth: MARKET_DATA[Sector.IT][EconomicZone.ITALY].growth,
  education: EducationPath.DEGREE,
  educationCostPerYear: 1500,
  educationYears: 5,
  movesAbroadAge: null,
  targetZoneAfterMove: EconomicZone.NORTH_EU,
  taxRate: 0.28,
  monthlyCostOfLiving: 800, // Low cost living with parents or student housing
  hasSideHustle: false,
  sideHustleIncome: 5000,
  riskProfile: RiskProfile.BALANCED,
  investmentReturnRate: 0.07,
  savingsRate: 0.20
};

export const DEFAULT_PLAN_B: PlanConfig = {
  id: 'B',
  name: 'Piano B: Estero Subito',
  color: '#f59e0b',
  sector: Sector.SERVICE,
  economicZone: EconomicZone.NORTH_EU,
  baseSalary: MARKET_DATA[Sector.SERVICE][EconomicZone.NORTH_EU].start,
  salaryGrowth: MARKET_DATA[Sector.SERVICE][EconomicZone.NORTH_EU].growth,
  education: EducationPath.NONE,
  educationCostPerYear: 0,
  educationYears: 0,
  movesAbroadAge: null, // Already there
  targetZoneAfterMove: EconomicZone.NORTH_EU,
  taxRate: 0.35,
  monthlyCostOfLiving: 1800,
  hasSideHustle: false,
  sideHustleIncome: 5000,
  riskProfile: RiskProfile.AGGRESSIVE,
  investmentReturnRate: 0.10,
  savingsRate: 0.30
};
