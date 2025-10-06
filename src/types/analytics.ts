export interface Analytics {
  totalIncome: number;
  totalExpenses: number;
  netIncome: number;
  categorySpending: Record<string, number>;
  transactionCount: number;
}