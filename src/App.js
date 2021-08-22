import ContactForm from './Components/ContactForm/ContactForm'
import ContactList from './Components/ContactList/ContactList'
import Filter from './Components/Filter/Filter'

function App() {
	return (
		<div>
			<h2>Phonebook</h2>
			<ContactForm />

			<h2>Contacts</h2>
			<Filter />
			<ContactList />
		</div>
	)
}

export default App
