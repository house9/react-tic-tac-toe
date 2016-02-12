// Uncomment this when you have some actionTypes to import
// import ActionTypes from 'constants/ActionTypes'
import createReducer from 'utils/createReducer'

const initialState = {
  scores: [
    { token: 'X', score: 0 },
    { token: 'O', score: 0 },
    { token: 'CAT', score: 0 }
  ]
}

const handlers = {
  // Pattern:
  // [ActionTypes.ACTION_NAME]: actionFunction
}

export default createReducer(initialState, handlers)

// Define action functions here
