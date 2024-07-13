import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { PriorityGenerationFilterList } from "../../../PriorityGenerationFilterList/PriorityGenerationFilterList";
import { ResetButton } from "../../../ResetButton/ResetButton"
import { filteredGenerationsList } from '../../../../../redux/filters/generations'
import {useFetchLists} from '../PriorityFilters/hooks/useFetchLists'
import {useFetchFilteredLists} from '../PriorityFilters/hooks/useFetchFilteredLists'
import { useResetLists } from '../PriorityFilters/hooks/useResetLists'
import { useResetItems } from '../PriorityFilters/hooks/useResetItems'
import { useHandleToggleFilter } from '../PriorityFilters/hooks/useHandleToggleFilter'
import useClickedButtons from '../DetailFilters/components/hooks/useClickedButtons'
import * as SC from "./PriorityGenerationFilter.styled"


export const PriorityGenerationFilter = ({ list, type,  isOpenFilter, toggleFilter }) => {
    const { generationsList } = useFetchLists()
    const { renderedFilteredMakesList, renderedFilteredModelsList, renderedFilteredGenerationsList} = useFetchFilteredLists()
    const { resetFilteredGenerationList } = useResetLists()
    const { resetGeneration } = useResetItems()
    const { handleToggleFilter } = useHandleToggleFilter(type, toggleFilter)
    const { clickedButtons, handleClick, handleCheckBoxReset } = useClickedButtons()	
	const filterLength = Object.values(clickedButtons).filter((item) => item !== false)

	return (
    <SC.Wrapper>
		{list.map(({ id, title, Icon }) => (
        <SC.Button 
            className='PriorityFilters'
            key={id} 
            isOpenFilter={isOpenFilter} 
            onClick={handleToggleFilter}
            disabled={type==='Model' && renderedFilteredMakesList.length === 0 || type=== 'Generation' && renderedFilteredModelsList.length === 0}
        >
			<SC.TitleWrapper
				className='PriorityFilters'
			>
            <SC.IconWrapper
				className='PriorityFilters'
            >
                {Icon && <Icon size={"16px"} className='PriorityFilters'/>}
            </SC.IconWrapper>
            <SC.Title
                className='PriorityFilters'
            >
                {title}
            </SC.Title>
            {title === "Generation" && renderedFilteredGenerationsList.length > 0 && (
            <SC.SelectedOptionsNumber>
                {renderedFilteredGenerationsList.length}
            </SC.SelectedOptionsNumber>
            )}
            {renderedFilteredGenerationsList.length > 0 && title === "Generation" && (
			<ResetButton onClick={resetFilteredGenerationList} />
            )}
		</SC.TitleWrapper>
        {filterLength.length > 0 && 
            <>
                {filterLength.length}
                <ResetButton
                    type='button'
                    onClick={handleCheckBoxReset}
                />
            </>
        }
		<SC.ButtonIcon
            className='PriorityFilters'
		>
            {!isOpenFilter ? (
				<MdKeyboardArrowDown size={"16px"} className='PriorityFilters'/>
            ) : (
				<MdKeyboardArrowUp size={"16px"} className='PriorityFilters'/>
            )}
		</SC.ButtonIcon>
        </SC.Button>
		))}
		<SC.ListWrapper>
        {isOpenFilter && type === "Generation" && (
            <PriorityGenerationFilterList 
                filteredTypesList={filteredGenerationsList}
                list={generationsList} 
                filteredList={renderedFilteredGenerationsList}
                resetListItem={resetGeneration}
                // clickedButtons={clickedButtons}
                // handleClick={handleClick}
        />)}
	</SC.ListWrapper>
    </SC.Wrapper>
	)
}