import { FilterOptions } from './components/FilterOptions/FilterOptions'
import { PriorityFilters } from './components/PriorityFilters/PriorityFilters'
import { InputFilters } from './components/InputFilters/InputFilters'
import { trimList } from './components/PriorityFilters/hooks/trimList'
import { generationList } from './components/PriorityGenerationFilter/hooks/generationList'
import { makeList } from './components/PriorityFilters/hooks/makeList'
import { modelList } from './components/PriorityFilters/hooks/modelList'
import { InputOption } from './components/InputOption/InputOption'
import { inputFiltersList } from './hooks/inputFiltersList'
import { DetailFilters } from './components/DetailFilters/DetailFilters'
import { getToggleFilterMake, getToggleFilterModel, getToggleFilterTrim, toggleFilterMake, setIsOpenFilterMake, toggleFilterModel, setIsOpenFilterModel, toggleFilterTrim, setIsOpenFilterTrim, toggleFilterGeneration, setIsOpenFilterGeneration, getToggleFilterGeneration } from '../../../redux/filters/toggleFilters'
import { useSelector } from 'react-redux'
import { PriorityGenerationFilter } from './components/PriorityGenerationFilter/PriorityGenerationFilter'
import * as SC from './Filters.styled'


export const Filters = () => {

	const isOpenFilterMake = useSelector(getToggleFilterMake)
	const isOpenFilterModel = useSelector(getToggleFilterModel)
	const isOpenFilterTrim = useSelector(getToggleFilterTrim)
	const isOpenFilterGeneration = useSelector(getToggleFilterGeneration)

	return 	<SC.Wrapper>
				<FilterOptions/>
				<PriorityFilters
					type='Make'
					list={makeList}
					isOpenFilter={isOpenFilterMake}
					toggleFilter={toggleFilterMake}
					setIsOpenFilter={setIsOpenFilterMake}
				/>
				<PriorityFilters
					type='Model'
					list={modelList}
					isOpenFilter={isOpenFilterModel}
					toggleFilter={toggleFilterModel}
					setIsOpenFilter={setIsOpenFilterModel}
				/>
				<PriorityGenerationFilter
					type='Generation'
					list={generationList}
					isOpenFilter={isOpenFilterGeneration}
					toggleFilter={toggleFilterGeneration}
					setIsOpenFilter={setIsOpenFilterGeneration}
				/>
				<PriorityFilters
					type='Trim'
					list={trimList}
					isOpenFilter={isOpenFilterTrim}
					toggleFilter={toggleFilterTrim}
					setIsOpenFilter={setIsOpenFilterTrim}
				/>
				<InputOption/>
				{inputFiltersList.map(({id, title, Icon, min, max, step}) => 
					<InputFilters 
						key={id}
						title={title}
						Icon={Icon}
						min={min}
						max={max}
						step={step}
					/>)}
				{/* <SingleInputFilters/> */}
				<DetailFilters/>
			</SC.Wrapper>
}