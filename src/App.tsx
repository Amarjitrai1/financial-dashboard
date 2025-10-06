import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { MetricsCards } from './components/Dashboard/MetricsCards';
import { CategoryChart } from './components/Dashboard/CategoryChart';
import { QuickActions } from './components/Dashboard/QuickActions';
import { TransactionFilters } from './components/Transactions/TransactionFilters';
import { TransactionList } from './components/Transactions/TransactionList';
import { AddTransactionModal } from './components/Transactions/AddTransactionModal';
import { useTransactions } from './hooks/useTransactions';
import { useAnalytics } from './hooks/useAnalytics';
import { useTransactionFilters } from './hooks/useTransactionFilters';
import { Transaction } from './types/transaction';

function App() {
  const { transactions, addTransaction, updateTransaction, deleteTransaction } = useTransactions();
  const analytics = useAnalytics(transactions);
  const {
    searchTerm,
    selectedCategory,
    dateRange,
    sortBy,
    filteredTransactions,
    setSearchTerm,
    setSelectedCategory,
    setDateRange,
    setSortBy,
  } = useTransactionFilters(transactions);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  const handleAddTransaction = (transaction: Omit<Transaction, 'id'>) => {
    if (editingTransaction) {
      updateTransaction(editingTransaction.id, transaction);
      setEditingTransaction(null);
    } else {
      addTransaction(transaction);
    }
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setIsAddModalOpen(true);
  };

  const handleDeleteTransaction = (id: string) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      deleteTransaction(id);
    }
  };

  const handleExportData = () => {
    const csvContent = [
      ['Date', 'Description', 'Category', 'Type', 'Amount'].join(','),
      ...transactions.map(t => 
        [t.date, t.description, t.category, t.type, t.amount].join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'transactions.csv';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setEditingTransaction(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onAddTransaction={() => setIsAddModalOpen(true)}
        onExportData={handleExportData}
      />

      <main className="max-w-7xl mx-auto p-6">
        {/* Key Metrics */}
        <div className="mb-8">
          <MetricsCards analytics={analytics} />
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <CategoryChart 
              categorySpending={analytics.categorySpending}
              totalExpenses={analytics.totalExpenses}
            />
          </div>
          <div>
            <QuickActions
              onViewReports={() => console.log('View Reports')}
              onViewAnalytics={() => console.log('View Analytics')}
              onExportData={handleExportData}
              onSetupBudget={() => console.log('Setup Budget')}
            />
          </div>
        </div>

        {/* Transaction Management */}
        <div className="space-y-6">
          <TransactionFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            dateRange={dateRange}
            onDateRangeChange={setDateRange}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              Transactions ({filteredTransactions.length})
            </h2>
          </div>

          <TransactionList
            transactions={filteredTransactions}
            onEdit={handleEditTransaction}
            onDelete={handleDeleteTransaction}
          />
        </div>
      </main>

      <AddTransactionModal
        isOpen={isAddModalOpen}
        onClose={handleCloseModal}
        onAdd={handleAddTransaction}
        editingTransaction={editingTransaction}
      />
    </div>
  );
}

export default App;