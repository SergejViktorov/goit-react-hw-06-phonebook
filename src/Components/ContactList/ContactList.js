import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

const ContactList = ({ contacts, onRemove }) => {
	console.log('contactsmmm', contacts)
	if (contacts === []) return null
	return (
		<ul>
			{contacts.map(({ id, name, number }) => (
				<ContactListItem
					key={id}
					name={name}
					number={number}
					onRemove={() => onRemove(id)}
				/>
			))}
		</ul>
	)
}

const ContactListItem = ({ id, name, number, onRemove }) => {
	return (
		<li>
			{name}:{number} <button onClick={() => onRemove(id)}>delete</button>
		</li>
	)
}

const getVisibleContacts = (allContacts, filter) => {
	const normalizedFilter = filter.toLowerCase()

	return allContacts.filter((items) =>
		items.name.toLowerCase().includes(normalizedFilter)
	)
}
const mapStateToProps = ({ contacts: { items, filter } }) => ({
	contacts: getVisibleContacts(items, filter),
})

// const mapStateToProps = (state) => {
// 	const { filter, items } = state.contacts

// 	const visibleContacts = items.filter((contact) =>
// 		text.toLowerCase().includes(normalizedFilter)
// 	)
// 	return {
// 		contacts: visibleContacts,
// 	}
// }

const mapDispatchToProps = (dispatch) => {
	return {
		onRemove: (id) => dispatch(actions.deleteContact(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
