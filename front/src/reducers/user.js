import { EDIT_EMAIL, EDIT_PASSWORD } from '../constants/ActionTypes'

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: ''
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case EDIT_EMAIL:
      return Object.assign({}, state, {
        email: action.payload
      })
    case EDIT_PASSWORD:
      return Object.assign({}, state, {
        email: action.payload
      })
    default:
      return state
  }
}
