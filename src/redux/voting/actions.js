import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from './actionTypes'
import { createAction } from 'redux-actions';

export const increment = count => ({
  type: INCREMENT,
  payload: count
})

export const incrementAsync = count => ({
  type: INCREMENT_ASYNC,
  payload: count
})

export const decrement = count => ({
  type: DECREMENT,
  payload: count
})
