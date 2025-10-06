import React from 'react';
import { PieChart } from 'lucide-react';
import { Card } from '../ui/Card';
import { formatCurrency } from '../../utils/formatters';

interface CategoryChartProps {
  categorySpending: Record<string, number>;
  totalExpenses: number;
}

export const CategoryChart: React.FC<CategoryChartProps> = ({
  categorySpending,
  totalExpenses,
}) => {
  const sortedCategories = Object.entries(categorySpending)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5); // Top 5 categories

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <PieChart className="h-5 w-5 mr-2" />
        Spending by Category
      </h3>
      <div className="space-y-3">
        {sortedCategories.map(([category, amount]) => {
          const percentage = totalExpenses > 0 ? (amount / totalExpenses) * 100 : 0;
          return (
            <div key={category} className="flex items-center justify-between">
              <div className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)` }}
                />
                <span className="text-sm font-medium">{category}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">{formatCurrency(amount)}</div>
                <div className="text-xs text-gray-500">{percentage.toFixed(1)}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};