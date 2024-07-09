// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import './components/Login.css';
import './components/Home.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/compean_parcial_2" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
