import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import AppNotifications from './AppNotifications'
import Welcome from './Welcome'
import Game from './Game'
import Stats from './Stats'

const Header = () => <h3>Tile Game</h3>
const End = () => <h4>End Game !!!, See you later</h4>
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
            <Route exact path="/stats" component={Stats} />
            <Route exact path="/end" component={End} />
            <Route component={notFoundPage} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}


export default withRouter(App);
