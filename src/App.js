//import { BrowserRouter as Router , Link, Routes, Route } from "react-router-dom";
import React from 'react';
 import { createStore } from 'redux';
 import { load, reset, add } from './component/duck/actions';
 import { configureStore } from '@reduxjs/toolkit';
// import Home from "./component/Home";
// import Users from "./component/Users";
// import CounterContainer from "./component/CounterContainer";
// import reducer from './component/redux';
// import { Provider } from 'react-redux';
// import rootReducer from "./rootReducer";
//import Apptut from './tutorial/Apptut';
import reducer from './component/duck/reducers';
import ApiLoad from './component/api';
// const store = createStore(rootReducer);
import types from './component/duck/types';
import { composeWithDevTools } from 'redux-devtools-extension';
function App() {
  const store = configureStore({reducer},{ composeWithDevTools });
  console.log(store.getState())

  store.dispatch(load());

  console.log(store.getState());
  store.dispatch(reset());

  console.log(store.getState());
  store.dispatch({type: "ADD", user: 'Jan NaJ'})
  console.log(store.getState())
  return (
    <div>
      <p>Hello world</p>
      <ApiLoad />
      {/* <Provider store={store}>
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
      </Provider> */}
    </div>
  );
}

export default App;
