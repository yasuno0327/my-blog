import { createAction } from 'redux-actions'
import { EDIT_EMAIL, EDIT_PASSWORD } from '../constants/ActionTypes'

export const editPassword = createAction(EDIT_PASSWORD, password => password)
export const editEmail = createAction(EDIT_EMAIL, email => email)

export function signIn() {
  return (dispatch) => {
    console.log("aaaaaaaaaaaa")
  }
}