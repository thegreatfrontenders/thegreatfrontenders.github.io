import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
/* 
 * Once you've set up the Provider and client within your App component, you can use all 
 * of the different React hooks that Apollo Client gives you for all the different GraphQL 
 * operations. These include queries, mutations, and subscriptions. You can even use the 
 * created Apollo Client directly using a custom hook called useApolloClient.
 */

import { apolloClient } from './services/graphql/apolloClient';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
