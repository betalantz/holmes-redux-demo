import React from 'react'

import { 
    BrowserRouter as Router,
    Link,
    Route, 
    Switch,
    useRouteMatch
  } from 'react-router-dom'
  
import Sherlock from '../components/Sherlock'

export default function Informants(props) {

    const {path, url} = useRouteMatch()

    
    return (
       <Router>

       <div>
       <Link to={`${url}/sherlock`}>Sherlock</Link><br/>
        </div>
        <Switch>
            <Route path={`${path}/sherlock`}>
                 <Sherlock/>
            </Route>
        </Switch>

       </Router>
       
    )
}
