export interface Transaction {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
  type: 'income' | 'expense';
  receipt?: string;
}

export interface CategoryBudget {
  category: string;
  budget: number;
  spent: number;
}