import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//COMPONENTS
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Route path='/' component={ Home } />
      </div>
      <Footer />
    </Router>
  );
}

export default App