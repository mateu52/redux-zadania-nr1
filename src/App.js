import { BrowserRouter as Router , Link, Routes, Route } from "react-router-dom";
import React from 'react';
import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import Home from "./component/Home";
import Users from "./component/Users";
import CounterContainer from "./component/CounterContainer";
import reducer from './component/redux';
import { Provider } from 'react-redux';
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

function App() {
  return (
    <div>
      <Provider store={store}>
      <Router>
        <nav>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/Users">Users</Link>
          </p>
          <p>
            <Link to="/Counter">Counter</Link>
          </p>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Counter" element={<CounterContainer />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
