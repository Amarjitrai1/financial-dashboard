import React from 'react';
import { Search, Filter, Calendar } from 'lucide-react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { CATEGORIES } from '../../utils/constants';

interface TransactionFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  dateRange: string;
  onDateRangeChange: (range: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const TransactionFilters: React.FC<TransactionFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  dateRange,
  onDateRangeChange,
  sortBy,
  onSortChange,
}) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    ...CATEGORIES.map(cat => ({ value: cat, label: cat }))
  ];

  const dateOptions = [
    { value: 'all', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'quarter', label: 'This Quarter' },
  ];

  const sortOptions = [
    { value: 'date-desc', label: 'Newest First' },
    { value: 'date-asc', label: 'Oldest First' },
    { value: 'amount-desc', label: 'Highest Amount' },
    { value: 'amount-asc', label: 'Lowest Amount' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex items-center mb-4">
        <Filter className="h-5 w-5 text-gray-400 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          icon={<Search className="h-4 w-4 text-gray-400" />}
        />
        
        <Select
          options={categoryOptions}
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        />
        
        <Select
          options={dateOptions}
          value={dateRange}
          onChange={(e) => onDateRangeChange(e.target.value)}
        />
        
        <Select
          options={sortOptions}
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        />
      </div>
    </div>
  );
};