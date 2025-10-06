import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Transaction } from '../../types/transaction';
import { CATEGORIES } from '../../utils/constants';

interface AddTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (transaction: Omit<Transaction, 'id'>) => void;
  editingTransaction?: Transaction | null;
}

export const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  editingTransaction,
}) => {
  const [formData, setFormData] = useState({
    description: editingTransaction?.description || '',
    amount: editingTransaction?.amount?.toString() || '',
    category: editingTransaction?.category || CATEGORIES[0],
    date: editingTransaction?.date || new Date().toISOString().split('T')[0],
    type: editingTransaction?.type || 'expense' as 'income' | 'expense',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const transaction: Omit<Transaction, 'id'> = {
      description: formData.description.trim(),
      amount: parseFloat(formData.amount),
      category: formData.category,
      date: formData.date,
      type: formData.type,
    };

    onAdd(transaction);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      description: '',
      amount: '',
      category: CATEGORIES[0],
      date: new Date().toISOString().split('T')[0],
      type: 'expense',
    });
    setErrors({});
    onClose();
  };

  const categoryOptions = CATEGORIES.map(cat => ({ value: cat, label: cat }));
  const typeOptions = [
    { value: 'expense', label: 'Expense' },
    { value: 'income', label: 'Income' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={editingTransaction ? 'Edit Transaction' : 'Add New Transaction'}
      size="md"
    >
      <div className="space-y-4">
        <Input
          label="Description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          error={errors.description}
          placeholder="Enter transaction description"
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Amount"
            type="number"
            step="0.01"
            min="0"
            value={formData.amount}
            onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
            error={errors.amount}
            placeholder="0.00"
          />

          <Select
            label="Type"
            options={typeOptions}
            value={formData.type}
            onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as 'income' | 'expense' }))}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Select
            label="Category"
            options={categoryOptions}
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
          />

          <Input
            label="Date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
            error={errors.date}
          />
        </div>

        <div className="flex space-x-3 pt-4">
          <Button
            variant="primary"
            onClick={handleSubmit}
            className="flex-1"
          >
            {editingTransaction ? 'Update Transaction' : 'Add Transaction'}
          </Button>
          <Button
            variant="outline"
            onClick={handleClose}
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};