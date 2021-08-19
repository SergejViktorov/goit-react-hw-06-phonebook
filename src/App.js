import { useState, useEffect } from 'react'
import ContactForm from './PhoneBook/ContactForm'
import ContactList from './PhoneBook/ContactList'
import Filter from './PhoneBook/Filter'

export default function App() {
	const [contacts, setContacts] = useState(() => {
		return JSON.parse(localStorage.getItem('contacts')) ?? []
	})

	useEffect(() => {
		window.localStorage.setItem('contacts', JSON.stringify(contacts))
	}, [contacts])

	const [filter, setFilter] = useState('')

	// const henlerAddContact = (newContact) => {
	// 	setContacts((prevContacts) => [...prevContacts, newContact])
	// 	console.log('newContact', newContact)
	// 	console.log(contacts)
	// }

	const hendleCheck = (name) => {
		console.log('name', name)
		const isExistContact = !!contacts.find((contact) => contact.name === name)
		isExistContact && alert('Contact is already exist')
		console.log('isExistContact', isExistContact)
		return !isExistContact
	}

	const hendleRemove = (id) => {
		setContacts(contacts.filter((contact) => contact.id !== id))
	}

	const filterChange = (filter) => setFilter(filter)

	const getVisibleContacts = () => {
		if (contacts !== '')
			return contacts.filter((contact) =>
				contact.name.toLowerCase().includes(filter.toLowerCase())
			)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<ContactForm
			// onAdd={henlerAddContact} onCheckUnique={hendleCheck}
			/>

			<h2>Contacts</h2>
			{/* <Filter filter={filter} onChange={filterChange} />
			<ContactList contacts={getVisibleContacts()} onRemove={hendleRemove} /> */}
		</div>
	)
}
