import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      const user = { email };
      localStorage.setItem('user', JSON.stringify(user));

      // Trigger a storage event to notify other components
      window.dispatchEvent(new Event('storage'));

      alert('Signup successful!');
      navigate('/');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="auth-page">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="auth-submit-btn">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
