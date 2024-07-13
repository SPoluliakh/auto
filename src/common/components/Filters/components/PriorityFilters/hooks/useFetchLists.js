import { useSelector } from 'react-redux'
import { getMakesList } from '../../../../../../redux/filters/makes'
import { getModelsList } from '../../../../../../redux/filters/models'
import { getTrimsList } from '../../../../../../redux/filters/trims'
import { getGenerationsList } from '../../../../../../redux/filters/generations'


export const useFetchLists = () => {
    const makesList = useSelector(getMakesList)
    const modelsList = useSelector(getModelsList)
    const trimsList = useSelector(getTrimsList)
    const generationsList = useSelector(getGenerationsList)

    return { makesList, modelsList, trimsList, generationsList }
}
