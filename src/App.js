import React from 'react';
import './App.css';
import Layout from './components/layout';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';

function App() {
  const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
