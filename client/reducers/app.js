import ActionTypes from 'constants/ActionTypes'
import createReducer from 'utils/createReducer'
import { findIndex, propEq, adjust } from 'ramda'

const initialState = {
  scores: [
    { token: 'X', score: 0 },
    { token: 'O', score: 0 },
    { token: 'CAT', score: 0 }
  ]
}

const handlers = {
  [ActionTypes.GAME_OVER]: gameOver
}

export default createReducer(initialState, handlers)

// Define action functions here
function gameOver(state, action) {
  // const score = find(propEq('token', action.winner))(state.scores)
  // const newScore = Object.assign({}, score, { score: score.score + 1 })

  const index = findIndex(propEq('token', action.winner), state.scores)

  const increment = (score) => {
    score.score++
    return score
  }

  // TODO: {...} instead of Object.assign

  return {
    ...state,
    scores: adjust(increment, index, state.scores)
  }
}
