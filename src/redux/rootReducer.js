import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { voting } from './voting/reducers'
import { rsvpList } from './rsvp/reducers'

const rootReducer = (history) => combineReducers({ 
    voting, 
    rsvpList,
    router: connectRouter(history)
})

export default rootReducer
