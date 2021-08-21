import { combineReducers } from 'redux'
import actionTypes from './types'

const itemReducer = (state = [], { type, payload }) => {
	switch (type) {
		case actionTypes.ADD:
			return [...state, { ...payload }]

		case actionTypes.DELETE:
			return state.filter(({ id }) => id !== payload)

		default:
			return state
	}
}
const filterReducer = (state = '', { type, payload }) => {
	switch (type) {
		case actionTypes.FILTER:
			return payload

		default:
			return state
	}
}

export default combineReducers({
	items: itemReducer,
	filter: filterReducer,
})
