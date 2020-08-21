import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//COMPONENTS
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Route exact path='/' component={ Home } />
      <Route exact path='/about' component={ About } />
      <Route exact path='/contact' component={ Contact } />
    </Router>
  );
}

export default App