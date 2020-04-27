import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Main from './Main'
import Code from './Code'
import Fiber from './Fiber'
import About from './About'
import Contact from './Contact'


function Routes(){

  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
      <Route exact path="/fiber" component={Fiber} />
      <Route exact path="/code" component={Code} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/linkedin" component={() => {
        window.location.href = 'https://www.linkedin.com/in/mary-b-paul/';
        return null
      }}/>
    </Switch>
  )
}

export default Routes
