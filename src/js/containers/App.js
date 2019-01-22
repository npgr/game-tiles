import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import AppNotifications from './AppNotifications'
import Header from '../components/Header'
import Welcome from './Welcome'
import Game from './Game'
import Stats from './Stats'

const End = () => <h4 style={{margin:'30px'}}>End Game, have a nice day !!!</h4>
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
