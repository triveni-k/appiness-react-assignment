import actionTypes from './actionTypes'

export function login(user) {
  return {
    type: actionTypes.log_in,
    user: user
  }
}
 export function resetUser() {
   return {
     type: actionTypes.reset
   }
 } 
