import { useState, useMemo } from 'react';
import { Transaction } from '../types/transaction';

const sampleTransactions: Transaction[] = [
  { 
    id: '1', 
    amount: 1250.00, 
    description: 'Salary', 
    category: 'Income', 
    date: '2024-09-15', 
    type: 'income' 
  },
  { 
    id: '2', 
    amount: 45.67, 
    description: 'Groceries', 
    category: 'Food', 
    date: '2024-09-14', 
    type: 'expense' 
  },
  // Add more sample data...
];
export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(sampleTransactions);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
    };
    setTransactions(prev => [newTransaction, ...prev]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const updateTransaction = (id: string, updates: Partial<Transaction>) => {
    setTransactions(prev => 
      prev.map(t => t.id === id ? { ...t, ...updates } : t)
    );
  };

  return {
    transactions,
    addTransaction,
    deleteTransaction,
    updateTransaction,
  };
};