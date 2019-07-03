import { all, fork } from 'redux-saga/effects'

import { watchIncrementAsync } from './voting/saga'
import { watchListAsync } from './rsvp/saga'

export default function * rootSaga () {
  yield all([
    fork(watchIncrementAsync),
    fork(watchListAsync),
  ])
}
