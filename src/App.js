import { BrowserRouter as Router , Link, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./component/Home";
import Users from "./component/Users";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/Users">Users</Link>
          </p>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
