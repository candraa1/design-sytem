'use client';

import { useState } from 'react';
import InputField from '../../components/InputField';
import Table from '../../components/Table';

export default function MembersPage() {
  const [members, setMembers] = useState([
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  ]);

  const [newMember, setNewMember] = useState({ name: '', age: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const addMember = () => {
    setMembers([...members, { ...newMember, age: parseInt(newMember.age, 10) }]);
    setNewMember({ name: '', age: '', email: '' });
  };

  return (
    <section>
      <h1>Manage Members</h1>
      <InputField
        label="Name"
        name="name"
        placeholder="Enter name"
        value={newMember.name}
        onChange={handleInputChange}
      />
      <InputField
        label="Age"
        name="age"
        placeholder="Enter age"
        type="number"
        value={newMember.age}
        onChange={handleInputChange}
      />
      <InputField
        label="Email"
        name="email"
        placeholder="Enter email"
        type="email"
        value={newMember.email}
        onChange={handleInputChange}
      />
      <button onClick={addMember}>Add Member</button>
      <Table
        data={members}
        columns={['name', 'age', 'email']}
      />
    </section>
  );
}
