// Freelancer Rates

// Get those rates calculated!
const HOURS_PER_DAY = 8;
const RATE_PER_HOUR = 89;
// const RATE_PER_DAY = HOURS_PER_DAY * RATE_PER_HOUR;
const DAYS_IN_MONTH = 22;

// const RATE_PER_MONTH = DAYS_IN_MONTH / RATE_PER_DAY;
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return HOURS_PER_DAY * ratePerHour;
}
dayRate();
/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate (ratePerHour))
}
daysInBudget();

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let daysRemaining = numDays % DAYS_IN_MONTH; 
  let totalMonthAmount = numDays - daysRemaining;
  let rateCount = dayRate(ratePerHour);
  return Math.ceil((totalMonthAmount * (1 - discount) * rateCount) + (daysRemaining * rateCount));
  
 
}
