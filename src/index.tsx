import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { setUserStore } from './store/states';
import { Provider } from 'react-redux';
const store = setUserStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

