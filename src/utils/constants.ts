// src/utils/constants.ts

// Transaction categories
export const CATEGORIES = [
  'Food',
  'Housing', 
  'Transportation',
  'Business',
  'Entertainment',
  'Healthcare',
  'Income',
  'Shopping',
  'Utilities',
  'Insurance',
  'Education',
  'Travel',
  'Personal Care',
  'Gifts & Donations',
  'Investment',
  'Taxes',
  'Other'
] as const;

// Transaction types
export const TRANSACTION_TYPES = ['income', 'expense'] as const;

// Date filter ranges
export const DATE_RANGES = {
  ALL: 'all',
  TODAY: 'today',
  WEEK: 'week',
  MONTH: 'month',
  QUARTER: 'quarter',
  YEAR: 'year'
} as const;

// Sort options
export const SORT_OPTIONS = {
  DATE_DESC: 'date-desc',
  DATE_ASC: 'date-asc',
  AMOUNT_DESC: 'amount-desc',
  AMOUNT_ASC: 'amount-asc',
  DESCRIPTION_ASC: 'description-asc',
  CATEGORY_ASC: 'category-asc'
} as const;

// Currency configuration
export const CURRENCY_CONFIG = {
  LOCALE: 'en-US',
  CURRENCY: 'USD',
  FRACTION_DIGITS: 2
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  TRANSACTIONS: 'financial-dashboard-transactions',
  USER_PREFERENCES: 'financial-dashboard-preferences',
  FILTERS: 'financial-dashboard-filters'
} as const;

// Performance thresholds (in milliseconds)
export const PERFORMANCE_THRESHOLDS = {
  RENDER_WARNING: 100,
  RENDER_CRITICAL: 300,
  SEARCH_DEBOUNCE: 300,
  ANIMATION_DURATION: 200
} as const;

// UI Configuration
export const UI_CONFIG = {
  TRANSACTIONS_PER_PAGE: 50,
  MAX_CATEGORY_DISPLAY: 5,
  CHART_COLORS: [
    '#3B82F6', // Blue
    '#10B981', // Green
    '#F59E0B', // Yellow
    '#EF4444', // Red
    '#8B5CF6', // Purple
    '#F97316', // Orange
    '#06B6D4', // Cyan
    '#84CC16', // Lime
    '#EC4899', // Pink
    '#6B7280'  // Gray
  ],
  MODAL_SIZES: {
    SM: 'max-w-md',
    MD: 'max-w-lg',
    LG: 'max-w-2xl',
    XL: 'max-w-4xl'
  }
} as const;

// Validation rules
export const VALIDATION_RULES = {
  TRANSACTION: {
    DESCRIPTION_MIN_LENGTH: 1,
    DESCRIPTION_MAX_LENGTH: 100,
    AMOUNT_MIN: 0.01,
    AMOUNT_MAX: 1000000,
    DATE_FORMAT: 'YYYY-MM-DD'
  }
} as const;

// Export formats
export const EXPORT_FORMATS = {
  CSV: 'csv',
  JSON: 'json',
  PDF: 'pdf'
} as const;

// Analytics periods
export const ANALYTICS_PERIODS = {
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  QUARTERLY: 'quarterly',
  YEARLY: 'yearly'
} as const;

// Category icons mapping (for future enhancement)
export const CATEGORY_ICONS = {
  Food: 'UtensilsCrossed',
  Housing: 'Home',
  Transportation: 'Car',
  Business: 'Briefcase',
  Entertainment: 'Gamepad2',
  Healthcare: 'Heart',
  Income: 'TrendingUp',
  Shopping: 'ShoppingBag',
  Utilities: 'Zap',
  Insurance: 'Shield',
  Education: 'GraduationCap',
  Travel: 'Plane',
  'Personal Care': 'User',
  'Gifts & Donations': 'Gift',
  Investment: 'PiggyBank',
  Taxes: 'Receipt',
  Other: 'MoreHorizontal'
} as const;

// Budget limits (for future budget feature)
export const DEFAULT_BUDGET_LIMITS = {
  Food: 600,
  Housing: 1200,
  Transportation: 300,
  Business: 500,
  Entertainment: 200,
  Healthcare: 400,
  Shopping: 300,
  Utilities: 250,
  'Personal Care': 150,
  Travel: 400,
  Other: 200
} as const;

// Color themes for different transaction types
export const TRANSACTION_COLORS = {
  INCOME: {
    PRIMARY: 'text-green-600',
    BACKGROUND: 'bg-green-50',
    BORDER: 'border-green-200',
    BADGE: 'bg-green-100 text-green-800'
  },
  EXPENSE: {
    PRIMARY: 'text-red-600',
    BACKGROUND: 'bg-red-50',
    BORDER: 'border-red-200',
    BADGE: 'bg-red-100 text-red-800'
  }
} as const;

// Error messages
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_AMOUNT: 'Please enter a valid amount',
  INVALID_DATE: 'Please enter a valid date',
  DESCRIPTION_TOO_LONG: 'Description must be less than 100 characters',
  AMOUNT_TOO_LOW: 'Amount must be at least $0.01',
  AMOUNT_TOO_HIGH: 'Amount cannot exceed $1,000,000',
  STORAGE_ERROR: 'Failed to save data to local storage',
  EXPORT_ERROR: 'Failed to export data'
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  TRANSACTION_ADDED: 'Transaction added successfully',
  TRANSACTION_UPDATED: 'Transaction updated successfully',
  TRANSACTION_DELETED: 'Transaction deleted successfully',
  DATA_EXPORTED: 'Data exported successfully',
  DATA_IMPORTED: 'Data imported successfully'
} as const;

// Feature flags (for gradual feature rollout)
export const FEATURE_FLAGS = {
  ENABLE_BUDGET_TRACKING: false,
  ENABLE_GOALS: false,
  ENABLE_RECEIPT_SCANNING: false,
  ENABLE_BANK_INTEGRATION: false,
  ENABLE_INVESTMENT_TRACKING: false,
  ENABLE_BILL_REMINDERS: false
} as const;

// API endpoints (for future backend integration)
export const API_ENDPOINTS = {
  TRANSACTIONS: '/api/transactions',
  ANALYTICS: '/api/analytics',
  EXPORT: '/api/export',
  IMPORT: '/api/import',
  USER: '/api/user'
} as const;

// Responsive breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px'
} as const;

// Animation durations (in milliseconds)
export const ANIMATIONS = {
  FAST: 150,
  NORMAL: 200,
  SLOW: 300,
  EXTRA_SLOW: 500
} as const;