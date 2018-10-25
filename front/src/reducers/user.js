import { EDIT_USER } from '../constants/ActionTypes'

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: ''
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case EDIT_USER:
      console.log(state)
      console.log(action)
      return Object.assign({}, state, {
        email: action.email,
        password: action.password
      })
    default:
      return state
  }
}
