import { FETCH_RSVP_LIST, FETCH_RSVP_SUCCESS, FETCH_RSVP_FAIL } from './actionTypes'

export function getList (status) {
  return {
    type: FETCH_RSVP_LIST,
    status
  }
}

export function receiveList (data) {
  return {
    type: FETCH_RSVP_SUCCESS,
    payload: data
  }
}

export function receiveFailure (error) {
  return {
    type: FETCH_RSVP_FAIL,
    error
  }
}
