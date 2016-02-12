import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'
import Styles from './styles.scss'

const propTypes = {
  token: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

export default function ScoreBoardCell({ token, score }) {
  return (
    <Row>
      <Col xs={2} md={2} lg={2} className={Styles.token}>
        {token}
      </Col>
      <Col xs={3} md={3} lg={3} className={Styles.score}>
        {score}
      </Col>
      <Col xs={7} md={7} lg={7} />
    </Row>
  )
}

ScoreBoardCell.propTypes = propTypes
