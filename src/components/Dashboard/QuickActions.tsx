import React from 'react';
import { BarChart3, Calendar, Download, Filter, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface QuickActionsProps {
  onViewReports: () => void;
  onViewAnalytics: () => void;
  onExportData: () => void;
  onSetupBudget: () => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  onViewReports,
  onViewAnalytics,
  onExportData,
  onSetupBudget,
}) => {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={onViewAnalytics}
        >
          <BarChart3 className="h-4 w-4 mr-3" />
          View Analytics
        </Button>
        
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={onViewReports}
        >
          <Calendar className="h-4 w-4 mr-3" />
          Generate Report
        </Button>
        
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={onSetupBudget}
        >
          <TrendingUp className="h-4 w-4 mr-3" />
          Setup Budget
        </Button>
        
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={onExportData}
        >
          <Download className="h-4 w-4 mr-3" />
          Export Data
        </Button>
      </div>
    </Card>
  );
};