import {combineReducers} from 'redux'
import audioReducer from './audioReducer'
import { routerReducer } from 'react-router-redux'


export default combineReducers({
  audioProfile: audioReducer,
})
