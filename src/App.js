import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About'; // 仮定: About コンポーネントも存在
import Users from './Users'; // 仮定: Users コンポーネントも存在

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
