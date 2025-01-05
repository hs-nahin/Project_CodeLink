import { ToastWrapper } from 'keep-react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <ToastWrapper
        richColors={true}
        toastOptions={{
        classNames: {
          title: 'text-body-3 font-medium',
          toast: 'rounded-xl shadow-large',
          description: 'text-body-4 font-normal',
        },
      }}
    />
  </BrowserRouter>
)
