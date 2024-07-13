import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './components/pages/Homepage';
import Aboutus from './components/Layout/Aboutus';
import Blog from './components/Layout/Blog';
import Events from './components/Layout/Events';
import Contactus from './components/pages/Contactus';
import Blogpost from './components/Layout/Blogpost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "about",
    element: <Aboutus />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "blog/:id",
    element: <Blogpost />,
  },
  {
    path: "event",
    element: <Events />,
  },
  {
    path: "contactus",
    element: <Contactus />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /><App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
