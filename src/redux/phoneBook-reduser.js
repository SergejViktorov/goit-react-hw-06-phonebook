import { combineReducers } from 'redux'
import types from './phoneBook-type'

// const initialState = []

const items = (state = [], { type, payload }) => {
	switch (type) {
		case types.ADD_CONTACT:
			return [...state, payload]

		case types.CHECK:
			return !!payload.find((contact) => contact.name === state)

		default:
			return state
	}
}
const filter = (state = '', action) => {
	return state
}

export default combineReducers({
	items,
	filter,
})
