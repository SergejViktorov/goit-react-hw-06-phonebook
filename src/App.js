import { useState, useEffect } from 'react'

import ContactForm from './Components/ContactForm/ContactForm'
import ContactList from './Components/ContactList/ContactList'
import Filter from './Components/Filter/Filter'
// import { connect } from 'react-redux'
// import * as actions from './redux/actions'

function App() {
	// function App({ contacts, henlerAddContact }) {
	// const [contacts, setContacts] = useState(() => {
	// 	return JSON.parse(localStorage.getItem('contacts')) ?? []
	// })

	// useEffect(() => {
	// 	window.localStorage.setItem('contacts', JSON.stringify(contacts))
	// }, [contacts])

	// const [filter, setFilter] = useState('')

	// const hendleCheck = (name) => {
	// 	const isExistContact = !!contacts.find((contact) => contact.name === name)
	// 	isExistContact && alert('Contact is already exist')
	// 	return !isExistContact
	// }

	// const filterChange = (filter) => setFilter(filter)

	// const getVisibleContacts = () => {
	// 	if (contacts !== '')
	// 		return contacts.filter((contact) =>
	// 			contact.name.toLowerCase().includes(filter.toLowerCase())
	// 		)
	// }

	return (
		<div>
			<h2>Phonebook</h2>
			<ContactForm
			// onCheckUnique={hendleCheck}
			/>

			<h2>Contacts</h2>
			<Filter />
			<ContactList />
		</div>
	)
}
// const mapStateToProps = (state) => {
// 	return {
// 		contacts: state.contacts,
// 	}
// }
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		henlerAddContact: (contacts) => dispatch(actions.addContact(contacts)),
// 		// hendleCheck: ()=> dispatch(actions.addContact())
// 	}
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App
