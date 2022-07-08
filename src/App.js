import { BrowserRouter as Router , Link, Routes, Route } from "react-router-dom";
import React from 'react';
//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import Home from "./component/Home";
import Users from "./component/Users";
import CounterContainer from "./component/CounterContainer";
import reducer, { inc, dec, reset } from './component/redux';
import { Provider } from 'react-redux';

const store = configureStore({reducer});

store.dispatch(inc());
store.dispatch(inc());
store.dispatch(inc());

store.subscribe(() => console.log(store.getState()));
console.log(store.getState());
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
