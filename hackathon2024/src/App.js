import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/pages/Home'
import Information from './Components/pages/Information'
import Games from './Components/pages/Games'
import SignUp from './Components/pages/SignUp'

import React from 'react'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/information' exact Component={Information} />
          <Route path='/Games' exact Component={Games} />
          <Route path='/sign-up' exact Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
