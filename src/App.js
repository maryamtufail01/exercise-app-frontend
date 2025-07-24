import React, { useState } from 'react';
import api from './api';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

function Auth() {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignup ? '/signup' : '/login';
    const payload = isSignup ? { name, email, password } : { email, password };

    try {
      const response = await api.post(endpoint, payload);
      const userName = response.data.user.name;
      setWelcomeMessage(`Welcome ${isSignup ? '' : 'back, '}${userName} 🎉`);
      setTimeout(() => navigate('/home'), 1000); // delay just for fun UI feel
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
      alert("Something went wrong!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Move Mate</h1>
        {welcomeMessage && <h2 style={styles.welcome}>{welcomeMessage}</h2>}

        <form onSubmit={handleSubmit} style={styles.form}>
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <button onClick={() => setIsSignup(!isSignup)} style={styles.toggle}>
          {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '350px',
  },
  title: {
    marginBottom: '1rem',
    color: '#333',
  },
  welcome: {
    color: '#4caf50',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
  },
  button: {
    background: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.75rem',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  toggle: {
    marginTop: '1rem',
    background: 'none',
    border: 'none',
    color: '#764ba2',
    cursor: 'pointer',
    fontSize: '0.9rem',
    textDecoration: 'underline',
  },
};

export default App;
