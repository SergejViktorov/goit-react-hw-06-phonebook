import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import actions from '../../redux/actions'
import s from './ContactForm.module.css'

export default function ContactForm() {
	const [name, setName] = useState('')
	const [number, setNumber] = useState('')
	const contacts = useSelector((state) => state.contacts)
	const dispatch = useDispatch()

	const handleChange = ({ target }) => {
		const { name, value } = target

		switch (name) {
			case 'name':
				setName(value)
				break

			case 'number':
				setNumber(value)
				break

			default:
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const isExistContact = !!contacts.items.find(
			(contact) => contact.name === name
		)
		isExistContact && alert('Contact is already exist')
		return (
			!isExistContact &&
			dispatch(actions.addContact({ id: uuid(), name, number })) &&
			reset()
		)
	}

	const reset = () => {
		setName('')
		setNumber('')
	}

	return (
		<form onSubmit={handleSubmit} className={s.form}>
			<label>
				Name
				<input
					value={name}
					onChange={handleChange}
					type="text"
					name="name"
					placeholder="Enter name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
					required
					className={s.input}
				/>
			</label>

			<label>
				Number
				<input
					value={number}
					onChange={handleChange}
					type="tel"
					name="number"
					placeholder="Enter number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
					required
					className={s.input}
				/>
			</label>
			<button type="submit">Add contact</button>
		</form>
	)
}

//    без хуков

// import { useState } from 'react'
// import { v4 as uuid } from 'uuid'
// import { connect } from 'react-redux'
// import actions from '../../redux/actions'
// import {  } from 'react-redux'

// function ContactForm({ onAdd, contacts }) {
// 	const [name, setName] = useState('')
// 	const [number, setNumber] = useState('')

// 	const handleChange = ({ target }) => {
// 		const { name, value } = target

// 		switch (name) {
// 			case 'name':
// 				setName(value)
// 				break

// 			case 'number':
// 				setNumber(value)
// 				break

// 			default:
// 		}
// 	}

// 	const handleSubmit = (e) => {
// 		e.preventDefault()
// 		const isExistContact = !!contacts.items.find(
// 			(contact) => contact.name === name
// 		)
// 		isExistContact && alert('Contact is already exist')
// 		return !isExistContact && onAdd({ id: uuid(), name, number }) && reset()
// 	}

// 	const reset = () => {
// 		setName('')
// 		setNumber('')
// 	}

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<label>
// 				Name
// 				<input
// 					value={name}
// 					onChange={handleChange}
// 					type="text"
// 					name="name"
// 					placeholder="Enter name"
// 					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// 					title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
// 					required
// 				/>
// 			</label>

// 			<label>
// 				Number
// 				<input
// 					value={number}
// 					onChange={handleChange}
// 					type="tel"
// 					name="number"
// 					placeholder="Enter number"
// 					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// 					title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
// 					required
// 				/>
// 			</label>
// 			<button type="submit">Add contact</button>
// 		</form>
// 	)
// }

// const mapStateToProps = (state) => ({
// 	contacts: state.contacts,
// })

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onAdd: (data) => dispatch(actions.addContact(data)),
// 	}
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
