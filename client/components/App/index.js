import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Navigation from 'components/Navigation'
import Start from 'components/Start'
import ScoreBoard from 'containers/ScoreBoard'

const propTypes = {
  children: PropTypes.element
}

import styles from './styles.scss'

export default function App({ children }) {
  return (
    <div>
      <Navigation />
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} md={12} lg={12}>
            <ScoreBoard />
          </Col>
        </Row>
        <Row className='show-grid'>
          <Col xs={12} md={12} lg={12}>
            {children}
          </Col>
        </Row>
        <Row className='show-grid'>
          <Col xs={12} md={12} lg={12}>
            <Start />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

App.propTypes = propTypes
