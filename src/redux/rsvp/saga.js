import { put, takeLatest, delay, fork, select } from 'redux-saga/effects'
import { FETCH_RSVP_LIST, FETCH_RSVP_SUCCESS, FETCH_RSVP_FAIL } from './actionTypes'
import apiClient from '../../utils/apiClient'

const getStatus = state => state.rsvpList.status

export function * fetchList () {
  try {
    // TODO: filter by status
    const status = yield select(getStatus)
    console.log('-------------> saga fetch list')
    const res = yield apiClient('/event')
    yield delay(1000)
    yield put({ type: FETCH_RSVP_SUCCESS, data: res.data, status })
  } catch (e) {
    console.error(e.stack)
    yield put({ type: FETCH_RSVP_FAIL, error: e })
  }
}
export function * watchListAsync () {
  yield takeLatest(FETCH_RSVP_LIST, fetchList)
}

export default function * root () {
  yield fork(fetchList)
}
