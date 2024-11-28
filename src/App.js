import React, { useState } from 'react';
import GroupMembers from './components/GroupMembers';
import AddExpense from './components/AddExpense';
import SummaryReport from './components/SummaryReport';
import './styles.css';

const App = () => {
  const [members, setMembers] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addMember = (name) => {
    setMembers((prev) => [...new Set([...prev, name])]);
  };

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <div className="container">
      <h1>Expense Splitter</h1>
      <div className="panel">
        <GroupMembers members={members} addMember={addMember} />
        <AddExpense members={members} addExpense={addExpense} />
        <SummaryReport members={members} expenses={expenses} />
      </div>
    </div>
  );
};

export default App;
