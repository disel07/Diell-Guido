import { PlanConfig, SimulationResult, YearlyDataPoint, EducationPath } from '../types';
import { GLOBAL_CONSTANTS, MARKET_DATA, ZONE_DEFAULTS } from '../constants';

export const runSimulation = (plan: PlanConfig): SimulationResult => {
  const data: YearlyDataPoint[] = [];
  let currentNetWorth = 0;
  let investedAmount = 0;

  for (let age = GLOBAL_CONSTANTS.START_AGE; age <= GLOBAL_CONSTANTS.RETIREMENT_AGE; age++) {
    let grossIncome = 0;
    let annualExpenses = 0;
    let roleLabel: string = plan.sector;
    let locationLabel = plan.economicZone.split('(')[0]; // Simplified label
    
    // 1. Determine Current Zone & Economic Data
    let currentZone = plan.economicZone;
    let hasMoved = false;

    if (plan.movesAbroadAge && age >= plan.movesAbroadAge) {
        currentZone = plan.targetZoneAfterMove;
        hasMoved = true;
        locationLabel = currentZone.split('(')[0];
    }

    // 2. Fetch Market Data for Current Zone
    // If user moved, we need to fetch the salary for the NEW zone.
    // If user hasn't moved, we use the Base Salary from config (which came from market data initially)
    // PROBLEM: 'plan.baseSalary' is just the starting point. We need to calculate growth.
    
    // Let's calculate the theoretical salary for this age in the current zone.
    const yearsOfExperience = Math.max(0, age - (plan.education === EducationPath.DEGREE ? (18 + plan.educationYears) : 18));
    
    // Base stats for the current zone
    const zoneStats = MARKET_DATA[plan.sector][currentZone];
    
    // If I just moved this year, my experience counts, but I jump to the new zone's pay scale.
    // However, usually you don't get Senior pay immediately if you come from a weaker market, but for simplicity, let's assume skills transfer.
    
    const growthRate = zoneStats.growth;
    const meritFactor = Math.pow(growthRate, Math.min(yearsOfExperience, 35));
    const inflationFactor = Math.pow(1 + GLOBAL_CONSTANTS.INFLATION_RATE, age - GLOBAL_CONSTANTS.START_AGE);

    // 3. Education Check
    const endOfEducationAge = 18 + plan.educationYears;
    const isStudying = plan.education === EducationPath.DEGREE && age <= endOfEducationAge;

    if (isStudying) {
      grossIncome = 0;
      roleLabel = 'Studente';
      annualExpenses = (plan.monthlyCostOfLiving * 12 + plan.educationCostPerYear) * inflationFactor;
      
      if (plan.hasSideHustle) {
        grossIncome += plan.sideHustleIncome * inflationFactor;
        roleLabel += ' + Lavoro';
      }

    } else {
      // Working
      // Calculate Salary based on Zone Data directly to ensure consistency
      // We use zoneStats.start as the base. 
      grossIncome = zoneStats.start * meritFactor * inflationFactor;
      
      if (hasMoved && age === plan.movesAbroadAge) {
         roleLabel = "Trasferimento ✈️";
      }

      if (plan.hasSideHustle) {
         grossIncome += plan.sideHustleIncome * inflationFactor;
      }

      // Expenses
      // If moved, use default living cost for that zone, otherwise use user input
      let baseMonthlyCost = plan.monthlyCostOfLiving;
      if (hasMoved) {
          // If moved, we switch to the target zone's default living cost
          baseMonthlyCost = ZONE_DEFAULTS[currentZone].livingCost;
      }
      
      annualExpenses = (baseMonthlyCost * 12) * inflationFactor;

      // Lifestyle Creep
      if (age > 30) annualExpenses *= 1.1;
      if (age > 45) annualExpenses *= 1.1; 
    }

    // 4. Taxes
    // If moved, use target zone tax rate, else user config
    const currentTaxRate = hasMoved ? ZONE_DEFAULTS[currentZone].tax : plan.taxRate;
    const netIncome = Math.max(0, grossIncome * (1 - currentTaxRate));

    // 5. Savings
    let savings = 0;
    const disposable = netIncome - annualExpenses;

    if (disposable > 0) {
        // Savings priority
        const targetSavings = netIncome * plan.savingsRate;
        if (disposable >= targetSavings) {
            savings = targetSavings;
            // Save 50% of the overflow too
            savings += (disposable - targetSavings) * 0.5;
        } else {
            savings = disposable;
        }
    } else {
        savings = disposable; // Negative savings = Debt
    }

    // 6. Investment
    const investmentGrowth = currentNetWorth * plan.investmentReturnRate;
    currentNetWorth += savings + investmentGrowth;
    investedAmount += savings;

    data.push({
      age,
      grossIncome,
      netIncome,
      expenses: annualExpenses,
      savings,
      investedAmount,
      totalNetWorth: currentNetWorth,
      role: roleLabel,
      location: locationLabel
    });
  }

  return {
    planId: plan.id,
    data,
    finalNetWorth: currentNetWorth
  };
};