import { DetailFilter } from './components/DetailFilter/DetailFilter'
import {detailFiltersDataList} from './hooks/detailFiltersDataList'
import * as SC from "./DetailFilters.styled"


export const DetailFilters = () => {

	return (
		<>
			{detailFiltersDataList.map((filter, index) => (
                <DetailFilter
					key={index} 
					icon={filter.icon} 
					text={filter.text} />
            ))}
		</>
	)
}
