import { useState } from 'react'


const useFilter = (items, filteredItems) => {
    const [filter, setFilter] = useState('')

    const handleInputChange = (event) => {
        const { value } = event.target;
        setFilter(value);
    }
    const renderList = [...filteredItems, ...items] 
    const renderMakesList = renderList.filter((item) =>
        item.toLowerCase().includes(filter.toLowerCase())
    )

    return { filter, handleInputChange, renderMakesList }
}

export default useFilter