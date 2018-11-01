import { EDIT_EMAIL, EDIT_PASSWORD, SIGN_IN } from '../constants/ActionTypes'

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
    case SIGN_IN:
      return state
    default:
      return state
  }
}
