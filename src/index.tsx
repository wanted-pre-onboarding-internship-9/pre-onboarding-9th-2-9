import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from './shared/Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={Router} />);
