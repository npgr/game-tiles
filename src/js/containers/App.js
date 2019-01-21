import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import AppNotifications from './AppNotifications'
import Welcome from './Welcome'

const Header = () => <h3>Tile Game</h3>
const Game = () => <div>Game Page</div>
const End = () => <div>End Page</div>
const notFoundPage = () => <div>Not Found Page</div>

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <AppNotifications />
        <main>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/end" component={End} />
            <Route component={notFoundPage} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}


export default withRouter(App);
