import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import store from './redux/store'
// import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { addContact, deleteContact } from './redux/actions'
// store.dispatch(addContact())
// store.dispatch(deleteContact())

console.log('store', store)

ReactDOM.render(
	<React.StrictMode>
		{/* <BrowserRouter> */}
		<Provider store={store}>
			<App />
		</Provider>
		{/* </BrowserRouter> */}
	</React.StrictMode>,
	document.getElementById('root')
)
