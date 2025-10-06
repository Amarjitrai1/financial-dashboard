import { useState, useMemo } from 'react';
import { Transaction } from '../types/transaction';

interface FilterState {
  searchTerm: string;
  selectedCategory: string;
  dateRange: string;
  sortBy: string;
}

export const useTransactionFilters = (transactions: Transaction[]) => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    selectedCategory: 'all',
    dateRange: 'all',
    sortBy: 'date-desc',
  });

  const filteredTransactions = useMemo(() => {
    let filtered = transactions.filter(transaction => {
      // Search filter
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const matchesSearch = 
          transaction.description.toLowerCase().includes(searchLower) ||
          transaction.category.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.selectedCategory !== 'all' && transaction.category !== filters.selectedCategory) {
        return false;
      }

      // Date range filter
      if (filters.dateRange !== 'all') {
        const transactionDate = new Date(transaction.date);
        const now = new Date();
        
        switch (filters.dateRange) {
          case 'today':
            if (transactionDate.toDateString() !== now.toDateString()) return false;
            break;
          case 'week':
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            if (transactionDate < weekAgo) return false;
            break;
          case 'month':
            if (transactionDate.getMonth() !== now.getMonth() || 
                transactionDate.getFullYear() !== now.getFullYear()) return false;
            break;
          case 'quarter':
            const quarterStart = new Date(now.getFullYear(), Math.floor(now.getMonth() / 3) * 3, 1);
            if (transactionDate < quarterStart) return false;
            break;
        }
      }

      return true;
    });

    // Sort transactions
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'date-asc':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'date-desc':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'amount-asc':
          return a.amount - b.amount;
        case 'amount-desc':
          return b.amount - a.amount;
        default:
          return 0;
      }
    });

    return filtered;
  }, [transactions, filters]);

  return {
    ...filters,
    filteredTransactions,
    setSearchTerm: (searchTerm: string) => 
      setFilters(prev => ({ ...prev, searchTerm })),
    setSelectedCategory: (selectedCategory: string) => 
      setFilters(prev => ({ ...prev, selectedCategory })),
    setDateRange: (dateRange: string) => 
      setFilters(prev => ({ ...prev, dateRange })),
    setSortBy: (sortBy: string) => 
      setFilters(prev => ({ ...prev, sortBy })),
  };
};