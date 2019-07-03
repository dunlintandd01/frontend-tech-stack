import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import rootReducer from '../redux/rootReducer'
import rootSaga from '../redux/rootSaga'

export const history = createBrowserHistory()

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer(history),
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  )
  sagaMiddleware.run(rootSaga)
  return store
}