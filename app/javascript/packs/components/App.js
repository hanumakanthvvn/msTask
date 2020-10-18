import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Recipes from './Recipes'
import Recipe from './Recipe/Recipe'


class App extends Component {
  render(){
    return(
        <Switch>
          <Route exact path="/" component={Recipes} />
          <Route exact path="/recipes/:id" component={Recipe} />
        </Switch>
    )
  }
}

export default App