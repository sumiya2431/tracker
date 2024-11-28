import React from 'react';

const SummaryReport = ({ members, expenses }) => {
  const calculateBalances = () => {
    const balances = {};
    members.forEach((member) => {
      balances[member] = 0;
    });

    expenses.forEach(({ amount, payer }) => {
      const splitAmount = amount / members.length;
      members.forEach((member) => {
        if (member === payer) {
          balances[member] += amount - splitAmount;
        } else {
          balances[member] -= splitAmount;
        }
      });
    });

    return balances;
  };

  const balances = calculateBalances();

  return (
    <div className="card">
      <h2>Summary Report</h2>
      <ul>
        {Object.entries(balances).map(([member, balance], index) => (
          <li key={index}>
            {member}: {balance >= 0 ? `is owed $${balance.toFixed(2)} `: `owes $${Math.abs(balance).toFixed(2)}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryReport;