import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';

const navyBlue = '#001f4d';

function Home() {
  return <h2 style={{color: navyBlue, textAlign: 'center', marginTop: '50px'}}>Welcome Home!</h2>;
}

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  };

  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        {!isLoggedIn && <Link to="/login" style={linkStyle}>Login</Link>}
        {isLoggedIn && (
          <button onClick={handleLogout} style={logoutButtonStyle}>
            Logout
          </button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

const navStyle = {
  padding: '15px 30px',
  backgroundColor: navyBlue,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const linkStyle = {
  color: '#fff',
  marginRight: '15px',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '1rem',
};

const logoutButtonStyle = {
  backgroundColor: '#fff',
  border: 'none',
  padding: '8px 15px',
  fontWeight: '600',
  cursor: 'pointer',
  borderRadius: '5px',
  color: navyBlue,
};

export default App;
