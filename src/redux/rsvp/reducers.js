import { FETCH_RSVP_SUCCESS, FETCH_RSVP_LIST } from './actionTypes'

const RSVP_STATUS = {
  published: 'published',
  draft: 'draft',
  finished: 'finished'
}

export const rsvpState = {
  status: RSVP_STATUS.published,
  list: []
}

export function rsvpList (state = rsvpState, action) {
  switch (action.type) {
    case FETCH_RSVP_LIST: state.status = action.status; return state
    case FETCH_RSVP_SUCCESS: state.list = action.data; return state
    default: return state
  }
}
