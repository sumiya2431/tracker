import React, { useState } from 'react';

const GroupMembers = ({ members, addMember }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      addMember(name.trim());
      setName('');
    }
  };

  return (
    <div className="card">
      <h2>Group Members</h2>
      <input
        type="text"
        value={name}
        placeholder="Enter member name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembers;