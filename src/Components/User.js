import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

import { Container } from 'semantic-ui-react'

class User extends Component {
  state = {
    value: 'hello'
  }



  render() {

    console.log(this.props)

    return (
      <Container className='fancy' style={{textAlign: 'center', color: 'red'}}>
      User Page {this.props.match.params.id}

      </Container>
    );
  }
}

export default withRouter(User);
