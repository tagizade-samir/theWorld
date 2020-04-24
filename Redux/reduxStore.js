import {userReducer} from './userReducer'
import {createStore} from 'redux'

export const store = createStore(userReducer)