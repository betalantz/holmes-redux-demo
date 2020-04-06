import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'

import Mycroft from './components/Mycroft'
import Informants from './containers/Informants'


function App() {
  return (
   <Router>
     <div className="App">
     <Link to={'/mycroft'}>Mycroft</Link><br/>
     <Link to={'/informants'}>Informants</Link><br/>
    <hr/>
    <Switch>
      <Route path={'/informants'}>
        <Informants/>
      </Route>
      <Route path={'/mycroft'}>
        <Mycroft/>
      </Route>
      
    </Switch>
    </div>
   </Router>
  );
}

export default App;
