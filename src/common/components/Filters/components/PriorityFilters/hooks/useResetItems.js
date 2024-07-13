import { useDispatch, useSelector } from 'react-redux'
import { resetFilteredMake, getFilteredMakesList } from '../../../../../../redux/filters/makes'
import { resetFilteredModel, getFilteredModelsList, resetFilteredModelsList } from '../../../../../../redux/filters/models'
import { resetFilteredTrim, getFilteredTrimsList, resetFilteredTrimsList} from '../../../../../../redux/filters/trims'
import { resetFilteredGeneration, getFilteredGenerationsList, resetFilteredGenerationsList } from '../../../../../../redux/filters/generations'


export const useResetItems = () => {
    const dispatch = useDispatch()
    const filteredMakesList = useSelector(getFilteredMakesList)
    const filteredModelsList = useSelector(getFilteredModelsList)
    const filteredTrimsList = useSelector(getFilteredTrimsList)
    const filteredGenerationsList = useSelector(getFilteredGenerationsList)

    const resetMake = (item) => {
        dispatch(resetFilteredMake(item))
        if(filteredMakesList.length >= 1) {
            dispatch(resetFilteredModelsList())
        }
    }

    const resetModel = (item) => {
        dispatch(resetFilteredModel(item))
        if(filteredMakesList.length >= 1 || filteredModelsList.length >= 1) {
            dispatch(resetFilteredGenerationsList())
        }
    }

    const resetGeneration = (item) => {
        dispatch(resetFilteredGeneration(item))
        if(filteredMakesList.length >= 1 || filteredModelsList.length >= 1 || filteredGenerationsList.length >= 1) {
            dispatch(resetFilteredTrimsList())
        }
    }

    const resetTrim = (item) => {
        dispatch(resetFilteredTrim(item))
    }

    return { resetMake, resetModel, resetTrim, resetGeneration }
}