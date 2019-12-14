import React from 'react'

import './search-box.css'

export const SearchBox = props => {
	return (
		<input
			className='search'
			type='search'
			placeholder='search monsters'
			onChange={props.handleInputField}
		/>
	)
}
