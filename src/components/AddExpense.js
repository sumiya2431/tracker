import React, { useState } from 'react';

const AddExpense = ({ members, addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [payer, setPayer] = useState('');

  const handleAddExpense = () => {
    if (description && amount > 0 && payer) {
      addExpense({
        description,
        amount: parseFloat(amount),
        payer,
      });
      setDescription('');
      setAmount('');
      setPayer('');
    }
  };

  return (
    <div className="card">
      <h2>Add Expense</h2>
      <input
        type="text"
        value={description}
        placeholder="Expense description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        value={amount}
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="">Select payer</option>
        {members.map((member, index) => (
          <option key={index} value={member}>
            {member}
          </option>
        ))}
      </select>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default AddExpense;