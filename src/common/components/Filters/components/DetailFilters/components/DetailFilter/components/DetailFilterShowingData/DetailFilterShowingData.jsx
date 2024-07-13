import React, { useState } from 'react'
import { IoIosCheckmark } from 'react-icons/io'
import { RxCross1 } from "react-icons/rx";
import * as SC from './DetailFilterShowingData.styled'


export const DetailFilterShowingData = ({
										filterSearch,
										handleFilterChange,
										filteredItems,
										clickedButtons,
										handleClick,
										text,
										searchInputResetButton
									}) => {
	const [selectedOptions, setSelectedOptions] = useState([])

	const uniqueMakesList = item => {
		handleClick(item)
		// const result = selectedOptions.includes(item)
		// if (!result) {
		// 	setSelectedOptions([...selectedOptions, item])
		// }
	}

	return (
		<div>
			<SC.InputWrapper>
				<SC.Input
					type='text'
					placeholder='Search...'
					value={filterSearch}
					onChange={handleFilterChange}
				/>
				<SC.InputResetButtonWrapper
					type='button'
					onClick={searchInputResetButton}
				>
					<RxCross1/>
				</SC.InputResetButtonWrapper>
			</SC.InputWrapper>
			{filteredItems.map(({ name }) => (
				<SC.Label key={name}>
					<SC.LabelInnerWrapper>
						<SC.ColorButton
							type='checkbox'
							name={name}
							checked={clickedButtons[name] || false}
							onClick={() => uniqueMakesList(name)}
							clicked={clickedButtons[name] || false}
						/>
						{(text === 'Exterior Color' || text === 'Interior Color') && (
							<SC.ColorId name={name} />
						)}
						{clickedButtons[name] && (
							<SC.CheckMarkIconWrapper>
								<IoIosCheckmark size={'22px'} />
							</SC.CheckMarkIconWrapper>
						)}
						{name}
					</SC.LabelInnerWrapper>
				</SC.Label>
			))}
		</div>
	)
}
