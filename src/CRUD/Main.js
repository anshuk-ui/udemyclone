import React from 'react'
import { BrowserRouter as Router, Route, Routes }
    from 'react-router-dom';
import './App.css';
import Create from './CRUD/Create';
import Edit from './CRUD/Edit';
import Home from './CRUD/Home';
  
function Main() {
    return (
        <div className='App'>
  
            <Router>
                <Routes>
                    <Route path='/' 
                        element={<Home />} />
                    <Route path='/create' 
                        element={<Create />} />
                    <Route path='/edit' 
                        element={<Edit />} />
                </Routes>
            </Router>
        </div>
    );
}
  
export default Main;