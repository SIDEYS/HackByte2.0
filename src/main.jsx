import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import LoginComponent from './components/Login.jsx';
import Register from './components/Register.jsx';
import HomePage from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import GOR from './components/GOR.jsx';
import About from './components/About.jsx';
import History from './components/History.jsx';
import AvailableCar from './components/AvailableCar.jsx';

const router  = createBrowserRouter([
  {
    path:'/',
    element:<LoginComponent/>,
  },
  {
    path:'/register',
    element:<Register/>,
  },
  {
    path:'/home',
    element:<HomePage/>,
  },
  {
    path:'/profile',
    element:<Profile/>,
  },
  {
    path:'/gor',
    element:<GOR/>,
  },
  
  {
    path:'/about',
    element:<About/>,
  },
  {
    path:'/history',
    element:<History/>,
  },
  
  {
    path:'/available-car',
    element:<AvailableCar/>,
  },



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
