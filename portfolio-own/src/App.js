import React from 'react';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import Home from './components/Home';
import Contacts  from './components/Contacts';
import About from './components/About';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contacts} />
      </Routes>
    </Router>
  );
};


export default App;