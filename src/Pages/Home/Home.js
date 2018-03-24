import React from 'react'

import { Container, Grid } from 'semantic-ui-react'

import UberAPI from '../../Services/UberAPI/UberAPI'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.uberAPI = new new UberAPI()
  }
  async componentDidMount() {
    const result = await this.uberAPI.payments()
    console.log(result)
  }
  render () {
    return(
      <Container>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <h2>AEO</h2>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Home