import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './roor-reducer'

//set up middleware
const middlewares = [logger]

const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store