import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import phoneBookReduser from './phoneBook-reduser'

const rootReducer = combineReducers({
	contacts: phoneBookReduser,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
