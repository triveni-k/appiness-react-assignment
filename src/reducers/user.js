import actionTypes from '../actions/actionTypes';
export default function User(
  state = {
    username: 'hruday@gmail.com',
    password: 'hruday@123',
    error: false,
    success: false
  }, action) {
  switch (action.type) {
    case actionTypes.log_in: {
      const { user } = action;
      if ((user || {}).username === state.username && (user || {}).password === state.password) {
        state = { ...state, success: true, error: false }
      } else
        state = { ...state, error: true, success: false }
        break;
    }
    case actionTypes.reset: {
      state = { ...state, success: false, error: false }
    }
    default:
  }
  return state;
}