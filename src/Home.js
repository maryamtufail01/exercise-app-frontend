// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ setIsLoggedIn = () => {} }) { // ← add fallback to prevent crash
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    // localStorage.clear(); // Optional
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerText}>Move Mate</h1>
      </header>

      <main style={styles.main}>
        <div style={styles.welcomeBox}>
          <h2 style={styles.welcome}>Welcome to your Exercise Dashboard!</h2>
          <p style={styles.subText}>Track your progress and stay fit</p>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>All rights reserved &copy; 2025 Move Mate</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
  },
  header: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    padding: '1.5rem',
    color: '#fff',
    textAlign: 'center',
  },
  headerText: {
    margin: 0,
    fontSize: '2rem',
  },
  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeBox: {
    textAlign: 'center',
    background: '#fff',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  welcome: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '1rem',
  },
  subText: {
    fontSize: '1.1rem',
    color: '#555',
  },
  logoutButton: {
    background: '#ff4757',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.75rem',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1.5rem',
  },
  footer: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
  },
};

export default Home;
