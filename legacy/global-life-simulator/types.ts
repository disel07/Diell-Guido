
export enum Sector {
  IT = 'IT & Tech',
  FINANCE = 'Finance & Law',
  MEDICINE = 'Medicine & Health',
  TRADES = 'Artigianato / Trades',
  SERVICE = 'Ristorazione / Service',
  ARTS = 'Arte & Creatività'
}

export enum RiskProfile {
  CONSERVATIVE = 'Prudente (Bonds/Cash)',
  BALANCED = 'Bilanciato (ETF World)',
  AGGRESSIVE = 'Aggressivo (Azioni/Tech)',
  DEGEN = 'Speculativo (Crypto/VC)'
}

export enum EducationPath {
  NONE = 'Lavoro Subito',
  DEGREE = 'Università'
}

export enum EconomicZone {
  ITALY = 'Italia / Sud Europa',
  NORTH_EU = 'Nord Europa (NL, DK, DE)',
  HIGH_WAGE = 'USA / CH / Australia'
}

export interface PlanConfig {
  id: string;
  name: string;
  color: string;
  
  // Core Drivers
  sector: Sector;
  economicZone: EconomicZone; // Determines base salary and growth
  
  // Computed/Hidden Values (Driven by Sector + Zone)
  baseSalary: number; // Gross Annual
  salaryGrowth: number; // Percentage
  
  education: EducationPath;
  educationCostPerYear: number;
  educationYears: number;
  
  // Location Strategy
  // If user starts in Italy but moves later, we transition the EconomicZone in the engine
  movesAbroadAge: number | null; 
  targetZoneAfterMove: EconomicZone; // Where do they move to?
  
  // Finance
  taxRate: number; 
  monthlyCostOfLiving: number;
  
  // Income Modifiers
  hasSideHustle: boolean;
  sideHustleIncome: number;
  
  // Investment
  riskProfile: RiskProfile;
  investmentReturnRate: number;
  savingsRate: number;
}

export interface YearlyDataPoint {
  age: number;
  grossIncome: number;
  netIncome: number;
  expenses: number;
  savings: number;
  investedAmount: number;
  totalNetWorth: number;
  role: string;
  location: string;
}

export interface SimulationResult {
  planId: string;
  data: YearlyDataPoint[];
  finalNetWorth: number;
}

export interface SimulationParams {
  inflationRate: number;
  investmentReturnRate: number;
  scenarioBMoveAge: number;
  scenarioCTransitionAge: number;
}
