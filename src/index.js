import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Spin} from "antd";
import { Provider } from 'react-redux';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { BrowserRouter } from 'react-router-dom';
import { createReduxStore } from 'redux/store/store';
export const store = createReduxStore({
  users: {}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Suspense fallback={<Spin />}>
      <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <App />
        </QueryParamProvider>
      </BrowserRouter>
    </Suspense>
  </Provider>,
);


