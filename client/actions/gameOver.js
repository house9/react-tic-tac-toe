import ActionTypes from 'constants/ActionTypes'

export default function gameOver(winner) {
  return {
    type: ActionTypes.GAME_OVER,
    winner
  }
}
