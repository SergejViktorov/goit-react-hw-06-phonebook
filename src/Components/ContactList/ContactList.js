import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../redux/actions'

const getVisibleContacts = (allContacts, filter) => {
	const normalizedFilter = filter.toLowerCase()

	return allContacts.filter((items) =>
		items.name.toLowerCase().includes(normalizedFilter)
	)
}

const ContactList = () => {
	const contacts = useSelector((state) =>
		getVisibleContacts(state.contacts.items, state.contacts.filter)
	)

	if (contacts === []) return null
	return (
		<ul>
			{contacts.map(({ id, name, number }) => (
				<ContactListItem id={id} name={name} number={number} />
			))}
		</ul>
	)
}

const ContactListItem = ({ id, name, number }) => {
	const dispatch = useDispatch()

	return (
		<li>
			{name}:{number}
			<button onClick={() => dispatch(actions.deleteContact(id))}>
				delete
			</button>
		</li>
	)
}

export default ContactList

// без хуков
// import React from 'react'
// import { connect } from 'react-redux'
// import actions from '../../redux/actions'

// const ContactList = ({ contacts, onRemove }) => {
// 	if (contacts === []) return null
// 	return (
// 		<ul>
// 			{contacts.map(({ id, name, number }) => (
// 				<ContactListItem
// 					key={id}
// 					name={name}
// 					number={number}
// 					onRemove={() => onRemove(id)}
// 				/>
// 			))}
// 		</ul>
// 	)
// }

// const ContactListItem = ({ id, name, number, onRemove }) => {
// 	return (
// 		<li>
// 			{name}:{number} <button onClick={() => onRemove(id)}>delete</button>
// 		</li>
// 	)
// }

// const getVisibleContacts = (allContacts, filter) => {
// 	const normalizedFilter = filter.toLowerCase()

// 	return allContacts.filter((items) =>
// 		items.name.toLowerCase().includes(normalizedFilter)
// 	)
// }
// const mapStateToProps = ({ contacts: { items, filter } }) => ({
// 	contacts: getVisibleContacts(items, filter),
// })

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onRemove: (id) => dispatch(actions.deleteContact(id)),
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
