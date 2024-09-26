import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from "./router";
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from "./queryClient";
import { TasksProvider } from "./contexts/TasksContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <TasksProvider>
              <Router />
          </TasksProvider>
      </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
