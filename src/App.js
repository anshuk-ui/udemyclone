import React from 'react';

import { Routes, Route } from "react-router-dom";
//import logo from './logo.svg';
import "./css/uifont.css";
import "./css/props.css";
import "./css/App.css";
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import Login from "./screens/login";
import Navbar  from './screens/navbar';
import Content from './screens/Content';
import Cart from './screens/Cart';
//import Signup from './screens/signup';
//import Main from './CRUD/Main';

function App() {
  return (
    

    
    <>
    <div className="new">
    
    </div><Navbar /><div className="App flex">
      <Sidebar />
      <div className="app-content">
        <HomePage />
        
        <Content />
      </div>
    </div></>
  );
}

export default App;
