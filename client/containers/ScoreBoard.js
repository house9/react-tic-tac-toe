import { connect } from 'react-redux'
// import { evolve } from 'ramda'
import ScoreBoard from 'components/ScoreBoard'

const mapStateToProps = state => {
  return { scores: state.app.scores }
}

// TODO: get help with this ...
// const mapStateToProps = evolve(state.app.scores, { scores })

export default connect(mapStateToProps)(ScoreBoard)
