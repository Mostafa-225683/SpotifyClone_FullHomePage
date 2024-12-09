import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      const user = { email };
      localStorage.setItem('user', JSON.stringify(user));

      // Trigger a storage event to notify other components
      window.dispatchEvent(new Event('storage'));

      alert('Login successful!');
      navigate('/');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="auth-page">
      <h2>Login</h2>
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
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="auth-submit-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
