import { useState } from 'react'


export const useIsOpenFilter = () => {
	const [isOpenFilter, setIsOpenFilter] = useState(false)

	const toggleFilter = () => {
		setIsOpenFilter(!isOpenFilter)
	}

	const closeByClick = () => {
		setIsOpenFilter(false)
	}

	return {toggleFilter, isOpenFilter,setIsOpenFilter, closeByClick}
}

