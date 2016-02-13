import { connect } from 'react-redux'
import Game from 'components/Game'
import gameOver from 'actions/gameOver'

const mapStateToProps = state => {
  return {
    foo: 'Bar'
  }
}

export default connect(mapStateToProps, { gameOver })(Game)
