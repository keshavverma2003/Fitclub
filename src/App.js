import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Heropage from './pages/heropage';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>  
    <Route path='/' element={<Heropage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;