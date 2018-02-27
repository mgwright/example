import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'

import { Container, Button } from 'semantic-ui-react'

class Home extends Component {
  state = {
    value: 'hello'
  }

  link = () => {
    this.props.history.push('/comp2')
  }

  render() {

    let button = (
      <Button
        onClick={this.link}
      >Go to Comp2</Button>
    )


    return (
      <Container className='fancy' style={{textAlign: 'center', color: 'green'}}>
        <div>This is the Home Page</div>
        <div><Link to='/comp1'>Go to Comp1</Link></div>
        <div>{button}</div>
      </Container>
    );
  }
}

export default withRouter(Home);
