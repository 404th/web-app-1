import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//COMPONENTS
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import JumbotronJum from './components/JumbotronJum'

function App() {
  return (
    <Router>
      <Navbar />
      <JumbotronJum title={'Welcome'} subtitle={'You can build your future here...'} />
      <div className='container'>
        <Route path='/' component={ Home } />
      </div>
      <Footer />
    </Router>
  );
}

export default App