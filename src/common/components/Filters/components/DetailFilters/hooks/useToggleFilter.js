import { useState } from 'react'


export const useToggleFilter = () => {
	const [showFilter, setShowFilter] = useState(false) 
	const toggleShow = () => {
		setShowFilter(!showFilter)
	}	

	return {showFilter, toggleShow}
}


