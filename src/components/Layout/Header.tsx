import React from 'react';
import { PlusCircle, Download, Settings, User } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeaderProps {
  onAddTransaction: () => void;
  onExportData: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAddTransaction, onExportData }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Financial Dashboard</h1>
          <p className="text-sm text-gray-600">Track expenses, monitor budgets, and analyze spending patterns</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={onExportData}
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          
          <Button
            variant="primary"
            size="sm"
            onClick={onAddTransaction}
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Transaction
          </Button>
          
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
            <Settings className="h-5 w-5" />
          </button>
          
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};