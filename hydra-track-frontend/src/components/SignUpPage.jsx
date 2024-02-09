import React, { useState } from 'react';

const SignUpPage = ({ onSignUp }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the user data to the backend for registration
    // For simplicity, I'll just pass the user object to the parent component
    const newUser = { name, username, email, gender, age, weight };
    
    onSignUp(newUser);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Gender:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Weight:
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
