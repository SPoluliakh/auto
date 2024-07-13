import { useState } from 'react';


const useFilterSearch = (checkedItems) => {
    const [filterSearch, setFilterSearch] = useState('')

    const handleFilterChange = event => {
        const { value } = event.target
        setFilterSearch(value)
    }

    const filteredItems = checkedItems.filter(({ name }) =>
        name.toLowerCase().includes(filterSearch.toLowerCase())
    )
    const searchInputResetButton = () => {
        setFilterSearch('')
    }

    return { filterSearch, handleFilterChange, filteredItems, searchInputResetButton }
}

export default useFilterSearch
