import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../redux/actions'

const Filter = () => {
	const value = useSelector((state) => state.contacts.filter)
	const dispatch = useDispatch()
	return (
		<input
			type="text"
			name="filter"
			value={value}
			onChange={(e) => dispatch(actions.filter(e.currentTarget.value))}
			placeholder="Enter name for Search"
		/>
	)
}

export default Filter

//  Без хуков

// import React from 'react'
// import { connect } from 'react-redux'
// import actions from '../../redux/actions'

// const Filter = ({ value, onChange }) => {
// 	return (
// 		<input
// 			type="text"
// 			name="filter"
// 			value={value}
// 			onChange={onChange}
// 			placeholder="Enter name for Search"
// 		/>
// 	)
// }

// const mapStateToProps = (state) => ({
// 	value: state.contacts.filter,
// })

// const mapDispatchToProps = (dispatch) => ({
// 	onChange: (e) => dispatch(actions.filter(e.currentTarget.value)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Filter)
