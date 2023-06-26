import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './routes';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='lg:flex flex-row md:flex sm:grid grid-cols-1'>
    <RoutesApp />
    </div>
  </React.StrictMode>
);


