import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Agreement from './models/Agreement/agreement';
import Main from './models/Main/main';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/main" element={<Main />} />
                    <Route path="/" element={<Agreement />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
