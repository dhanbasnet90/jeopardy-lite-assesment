import React from 'react';
import {Route,Switch} from "react-router-dom"
import './App.css';

import Jeopardy from "./components/jeopardy/Jeopardy";
import Welcome from './components/welcome/Welcome'
import Clock from './components/clock/Clock';
import Navigation from "./components/navigation/Navigation"
import Contact from "./components/contact/Contact"
import Error from "./components/error/Error"

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path="/" render={(props)=><Welcome {...props}name="Dhan"/>}/>
        <Route exact path="/clock" component={Clock}/>
        <Route exact path="/contact" component={Contact}/>
        <Route  path="/Welcome/:name" component={Welcome}/>
        <Route  component={Error}/>
        <Route  exact path='/jeopardy' component={Jeopardy} />
        <Route> 
          <NoMatch />
        </Route>
        
      </Switch>
    </div>
  );
}
        
  

export default App;