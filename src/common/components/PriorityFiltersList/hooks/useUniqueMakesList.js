import { useSelector, useDispatch } from 'react-redux'
import { getMakesList, getFilteredMakesList, filteredMakesList } from '../../../../redux/filters/makes' 


const useUniqueMakesList = () => {
    const makesList = useSelector(getMakesList)
    const filteredList = useSelector(getFilteredMakesList)
    const dispatch = useDispatch()

    const uniqueMakesList = (item) => {
        const value = filteredList.includes(item)
        console.log(value)
        if (!value) {
            dispatch(filteredMakesList(item))
        }
    }

    return { makesList, filteredList, uniqueMakesList }
}

export default useUniqueMakesList
