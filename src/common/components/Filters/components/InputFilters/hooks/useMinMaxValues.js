import { useState } from 'react';


const UseMinMaxValues = (min, max, type) => {
	const [minValue, setMinValue] = useState('')
	const [maxValue, setMaxValue] = useState('')

	const handleMinYearChange = (event) => {
		setMinValue(event.target.value)
	}

	const handleMaxYearChange = (event) => {
		setMaxValue(event.target.value)
	}

	const handleInput = ({ minValue, maxValue }) => {
		setMinValue(minValue)
		setMaxValue(maxValue)}

	return { minValue, maxValue, handleInput, handleMinYearChange, handleMaxYearChange }
}

export default UseMinMaxValues
