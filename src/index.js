import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import Layout from './components/Layout';
import ErrorBoundary from './helpers/ErrorBoundary';
import TodoApp from './App';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <ErrorBoundary>
        <Provider store={store}>
          <TodoApp/>
        </Provider>
      </ErrorBoundary>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root'),
);
