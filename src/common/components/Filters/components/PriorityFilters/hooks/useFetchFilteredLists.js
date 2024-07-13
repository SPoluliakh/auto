import { useSelector } from 'react-redux'
import { getFilteredMakesList } from '../../../../../../redux/filters/makes'
import { getFilteredModelsList } from '../../../../../../redux/filters/models'
import { getFilteredTrimsList } from '../../../../../../redux/filters/trims'
import { getFilteredGenerationsList } from '../../../../../../redux/filters/generations'
        

export const useFetchFilteredLists = () => {
    const renderedFilteredMakesList = useSelector(getFilteredMakesList)
    const renderedFilteredModelsList = useSelector(getFilteredModelsList)
    const renderedFilteredTrimsList = useSelector(getFilteredTrimsList)
    const renderedFilteredGenerationsList = useSelector(getFilteredGenerationsList)

    return { renderedFilteredMakesList, renderedFilteredModelsList, renderedFilteredTrimsList, renderedFilteredGenerationsList }
}
