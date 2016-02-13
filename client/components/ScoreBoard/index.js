import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ScoreBoardCell from 'components/ScoreBoardCell'
import { find, propEq } from 'ramda'

const propTypes = {
  scores: PropTypes.array.isRequired
}

function findScore(scores, token) {
  return find(propEq('token', token))(scores).score
}

export default function ScoreBoard({ scores }) {
  const x = findScore(scores, 'X')
  const o = findScore(scores, 'O')
  const cat = findScore(scores, 'CAT')

  return (
    <div>
      <Grid>
        <Row className='show-grid'>
          <Col xs={4} md={4} lg={4}>
            <ScoreBoardCell token='X' score={x} />
          </Col>
          <Col xs={4} md={4} lg={4}>
            <ScoreBoardCell token='O' score={o} />
          </Col>
          <Col xs={4} md={4} lg={4}>
            <ScoreBoardCell token='Cat' score={cat} />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

ScoreBoard.propTypes = propTypes
