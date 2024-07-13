import { useDispatch } from 'react-redux'
import { resetFilteredMakesList } from '../../../../../../redux/filters/makes'
import { resetFilteredModelsList } from '../../../../../../redux/filters/models'
import { resetFilteredTrimsList } from '../../../../../../redux/filters/trims'
import { resetFilteredGenerationsList } from '../../../../../../redux/filters/generations'


export const useResetLists = () => {

    const dispatch = useDispatch()

    const resetFilteredMakeList = () => {
        dispatch(resetFilteredMakesList())
        dispatch(resetFilteredModelsList())
        dispatch(resetFilteredTrimsList())
        dispatch(resetFilteredGenerationsList())
        dispatch(setIsOpenFilter(true))
    }

    const resetFilteredModelList = () => {
        dispatch(resetFilteredModelsList())
        dispatch(resetFilteredTrimsList())
        dispatch(resetFilteredGenerationsList())
        dispatch(setIsOpenFilter(true))
    }

    const resetFilteredGenerationList = () => {
        dispatch(resetFilteredGenerationsList())
        dispatch(setIsOpenFilter(true))
    }

    const resetFilteredTrimList = () => {
        dispatch(resetFilteredTrimsList())
        dispatch(setIsOpenFilter(true))
    }

    return { resetFilteredMakeList, resetFilteredModelList, resetFilteredTrimList, resetFilteredGenerationList}
}

