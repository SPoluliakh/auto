import { useState } from 'react'


export const useGenerationFilter = (items, filteredItems) => {
    const [filter, setFilter] = useState('')

    const handleInputChange = (event) => {
        const { value } = event.target
        setFilter(value)}

    const renderList = [...filteredItems, ...items] 
    const renderGenerationsList = renderList.filter((item) => 
    item.id.toLowerCase().includes(filter.toLowerCase()))

    const handleClearInput = () => {
        setFilter('')
        clearButton.current.focus()}

    return { filter, handleInputChange, renderGenerationsList, handleClearInput }
}

