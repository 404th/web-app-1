import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//COMPONENTS
import Home from './pages/Home'
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Route path='/' component={ Home } />
      </div>
    </Router>
  );
}

export default App