import { combineReducers } from 'redux';
import users from './user';
import employee from './employee'

const allreducers = combineReducers({ users, employee });

export default allreducers;