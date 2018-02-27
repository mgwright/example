import React, { Component } from 'react';
import '../App.css';
import { Container} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router'

import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Home from './Home'
import User from './User'
import PageNotFound from './PageNotFound'

class App extends Component {
  state = {
    comp: true
  }

switchState = () => this.setState({comp: !this.state.comp})

  render() {



    return (
      <Container>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/comp1' component={Comp1}/>
          <Route path='/comp2' component={Comp2}/>
          <Route path='/user/:id' component={User}/>
          <Route path='/' component={PageNotFound}/>
        </Switch>

      </Container>
    );
  }
}



export default withRouter(App);
