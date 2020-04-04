import employeeData from './employee.json'
import actionTypes from '../actions/actionTypes';

export default function (state = {
  rows: ['id', 'name', 'age', 'gender', 'email', 'phone'],
  data: employeeData
}, action) {
  return state;
}