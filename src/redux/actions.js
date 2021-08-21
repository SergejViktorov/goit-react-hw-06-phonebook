import actionTypes from './types'

export const addContact = (data) => ({
	type: actionTypes.ADD,
	payload: data,
})

export const deleteContact = (id) => ({
	type: actionTypes.DELETE,
	payload: id,
})

export const filter = (value) => ({
	type: actionTypes.FILTER,
	payload: value,
})
