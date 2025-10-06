export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

// src/utils/constants.ts
export const CATEGORIES = [
  'Food',
  'Housing',
  'Transportation',
  'Business',
  'Entertainment',
  'Healthcare',
  'Income'
];

export const TRANSACTION_TYPES = ['income', 'expense'] as const;
