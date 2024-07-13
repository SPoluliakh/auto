import { useState } from 'react'


const useClickedButtons = () => {
    const [clickedButtons, setClickedButtons] = useState({})

    const handleClick = name => {
        setClickedButtons(prev => ({
            ...prev,
            [name]: !prev[name],
        }))
    }

    const handleCheckBoxReset = () => {
        setClickedButtons({})
    }

    return { clickedButtons, handleClick, handleCheckBoxReset }
}

export default useClickedButtons
