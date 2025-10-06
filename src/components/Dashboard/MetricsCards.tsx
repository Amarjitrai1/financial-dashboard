import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Receipt } from 'lucide-react';
import { Card } from '../ui/Card';
import { Analytics } from '../../types/analytics';
import { formatCurrency, formatNumber } from '../../utils/formatters';

interface MetricsCardsProps {
  analytics: Analytics;
}

export const MetricsCards: React.FC<MetricsCardsProps> = ({ analytics }) => {
  const metrics = [
    {
      title: 'Total Income',
      value: formatCurrency(analytics.totalIncome),
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Total Expenses',
      value: formatCurrency(analytics.totalExpenses),
      icon: TrendingDown,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Net Income',
      value: formatCurrency(analytics.netIncome),
      icon: DollarSign,
      color: analytics.netIncome >= 0 ? 'text-green-600' : 'text-red-600',
      bgColor: analytics.netIncome >= 0 ? 'bg-green-50' : 'bg-red-50',
    },
    {
      title: 'Transactions',
      value: formatNumber(analytics.transactionCount),
      icon: Receipt,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className={metric.bgColor}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{metric.title}</p>
              <p className={`text-2xl font-bold ${metric.color}`}>
                {metric.value}
              </p>
            </div>
            <metric.icon className={`h-8 w-8 ${metric.color}`} />
          </div>
        </Card>
      ))}
    </div>
  );
};