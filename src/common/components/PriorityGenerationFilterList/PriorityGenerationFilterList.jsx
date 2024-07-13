import { ModelGenerationElement } from '../Filters/components/PriorityGenerationFilter/components/ModelGenerations/components/ModelGenerationElement/ModelGenerationElement'
import { useGenerationFilter } from './hooks/useGenerationFilter'
import { RxCross1 } from "react-icons/rx";
import * as SC from "./PriorityGenerationFilterList.styled"


export const PriorityGenerationFilterList = ({
				list,
				filteredList,
			}) => {

	const { filter, handleInputChange, renderGenerationsList, handleClearInput } = useGenerationFilter(list, filteredList)

	return (
		<SC.Wrapper>
			<SC.InputWrapper>
				<SC.Input 
					type="text" 
					value={filter} 
					onChange={handleInputChange} 
					className='PriorityFilters'
				/>
				<SC.ClearSearchInputButton
					type='button'
					onClick={handleClearInput}
				>
					<RxCross1/>
				</SC.ClearSearchInputButton>
			</SC.InputWrapper>
			<SC.ModelGenerationsFilterList>
				<SC.InnerWrapper>
					<SC.PopupGenerationsList>
						{renderGenerationsList.map(({ id, years, generation, IMG }) => (
							<ModelGenerationElement
								key={id}
								id={id}
								years={years}
								generation={generation}
								IMG={IMG}
								filteredList={filteredList}
							/>
						))}
					</SC.PopupGenerationsList>
				</SC.InnerWrapper>
			</SC.ModelGenerationsFilterList>)
		</SC.Wrapper>
	)
};
