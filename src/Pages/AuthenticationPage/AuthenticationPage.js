import React from 'react'
import { Grid, Container, Button } from 'semantic-ui-react'
import axios from 'axios'
const { REACT_APP_UBER_CLIENT_ID, REACT_APP_UBER_REDIRECT_URI } = process.env

class AuthenticationPage extends React.Component {
  constructor (props) {
    super(props)
    this.handleAuth = this.handleAuth.bind(this)
  }
  async handleAuth () {
    const urlAuth = `https://login.uber.com/oauth/v2/authorize?client_id=${REACT_APP_UBER_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_UBER_REDIRECT_URI}`
    const response = await axios.get(urlAuth)
    console.log(response)
  }
  render () {
    return (
      <Container>
        <Grid>
          <Grid.Row centered>
          <Grid.Column width={16} textAlign='center'>
              <h1>Uber expensives</h1>
            </Grid.Column>
            <Grid.Column width={8}>
                <Button fluid color='blue' onClick={this.handleAuth} >Autenticar</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default AuthenticationPage