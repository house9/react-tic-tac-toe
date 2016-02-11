import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

class Start extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <div>
          Start a new Game:
        </div>
        <Grid>
          <Row className='show-grid'>
            <Col xs={6} md={6} lg={6}>
              <Link to={`/game/x`}>X</Link>
            </Col>
            <Col xs={6} md={6} lg={6}>
              <Link to={`/game/o`}>O</Link>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Start
