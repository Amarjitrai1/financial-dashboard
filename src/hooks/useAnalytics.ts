import { useMemo } from 'react';
import { Transaction } from '../types/transaction';
import { Analytics } from '../types/analytics';

export const useAnalytics = (transactions: Transaction[]): Analytics => {
  return useMemo(() => {
    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const totalExpenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const netIncome = totalIncome - totalExpenses;
    
    const categorySpending = transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {} as Record<string, number>);
    
    return {
      totalIncome,
      totalExpenses,
      netIncome,
      categorySpending,
      transactionCount: transactions.length,
    };
  }, [transactions]);
};