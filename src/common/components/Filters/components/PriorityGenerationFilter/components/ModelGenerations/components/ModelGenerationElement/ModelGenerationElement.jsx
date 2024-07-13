import { IoIosCheckmark } from 'react-icons/io'
import useClickedButtons from '../../../../../DetailFilters/components/hooks/useClickedButtons'
import { useState } from 'react'
import * as SC from "./ModelGenerationElement.styled"
import { useDispatch, useSelector } from 'react-redux'
import { filteredGenerationsList, getFilteredGenerationsList, resetFilteredGeneration } from '../../../../../../../../../redux/filters/generations'


export const ModelGenerationElement = ({
										id, 
										years, 
										generation, 
										IMG, 
										filteredList,
										}) => {
	
	const dispatch = useDispatch()
	const uniqueMakesList = () => {
		const result = filteredList.map((item) => item.id)
		const value = result.includes(id)
		if (!value) {
			dispatch(filteredGenerationsList({
				id, 
				years, 
				generation, 
				IMG}))
				return 
			}
				dispatch(resetFilteredGeneration({id, years, generation, IMG}))
			}

	return  <SC.Wrapper
				IMG={IMG}
				showCheckMark={filteredList.find((item) => item.id === id)}
				onClick={uniqueMakesList}
			>
				<SC.CheckBoxWrapper>
					<SC.CheckBox
						type='checkbox'
						onClick={uniqueMakesList}
						showCheckMark={filteredList.find((item) => item.id === id)}
					/>
					{filteredList.find((item) => item.id === id) && (
                    <SC.CheckMarkIconWrapper
						// onClick={toggleShowCheckMark}
					>
                        <IoIosCheckmark size={'22px'} />
                    </SC.CheckMarkIconWrapper>
					)} 
				</SC.CheckBoxWrapper>
				<SC.GenerationData>
					<SC.Text>
						{years}
					</SC.Text>
					<SC.Text>
						{generation}
					</SC.Text>
				</SC.GenerationData>
			</SC.Wrapper>
}