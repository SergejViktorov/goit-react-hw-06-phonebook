import types from './phoneBook-type'
import { v4 as uuid } from 'uuid'

const addContact = (name, number) => ({
	types: types.ADD_CONTACT,
	payload: { id: uuid(), name, number },
})

const checkName = (name) => ({
	types: types.CHECK,
	payload: { name },
})

console.log(addContact())
console.log(types)

export default { addContact, checkName }
