import { useState } from 'react'


export const useFiltersState = (initialItems) => {
	const [checkedItems, setCheckedItems] = useState(initialItems)
	const handleChange = (event) => {
		const { name } = event.target;
	
		setCheckedItems((prevState) => {
			const newState = prevState.map((item) =>
				item.name === name ? { ...item, isChecked: !item.isChecked } : item
			)
			return newState
		})
	}

	const handleReset = () => {
		setCheckedItems(initialItems)
	}

	return {checkedItems, handleChange, handleReset}
}


