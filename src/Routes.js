import React from "react"
import { Router, Switch, Route } from "react-router-dom"
import { createBrowserHistory } from "history"
import GameListing from "./components/GameListing/GameListing"
import Header from "./components/Header/Header"

const history = createBrowserHistory()
const Routes = () => {
  return (
    <Router history={history}>
      <Header history={history} />
      <section className="mainWrapper">
        <Switch>
          <Route exact path="/" component={GameListing} />
        </Switch>
      </section>
    </Router>
  )
}
export default Routes
