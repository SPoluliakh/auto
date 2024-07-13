import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useToggleFilter } from '../../hooks/useToggleFilter'
import { useFiltersState } from '../../hooks/useFiltersState'
import useClickedButtons from '../hooks/useClickedButtons'
import useFilterSearch from '../hooks/useFilterSearch'
import { ExteriorColorsList } from './hooks/exteriorColorsList'
import { InteriorColorsList } from './hooks/interiorColorsList'
import { TransmissionTypesList } from './hooks/transmissionTypesList'
import { BodyStyleTypesList } from './hooks/bodyStyleTypesList'
import { FuelTypesList } from './hooks/fuelTypesList'
import { EngineTypesList } from './hooks/engineTypesList'
import { NewUsedCPOList } from './hooks/newUsedCPOList'
import { VehicleHistoryList } from './hooks/vehicleHistoryList'
import { DrivetrainTypesList } from './hooks/drivetrainTypesList'
import { IconWrapper } from '../../../../../IconWrapper/IconWrapper'
import { ResetButton } from '../../../../../ResetButton/ResetButton'
import { DetailFilterShowingData } from './components/DetailFilterShowingData/DetailFilterShowingData'
import * as SC from "./DetailFilter.styled"


export const DetailFilter = ({ icon: Icon, text }) => {
    const { showFilter, toggleShow } = useToggleFilter()
    const { checkedItems, handleReset } = useFiltersState(() => {
		switch (text) {
			case 'Exterior Color':
				return ExteriorColorsList
			case 'Interior Color':
				return InteriorColorsList
			case 'Transmission':
				return TransmissionTypesList
			case 'Body style':
				return BodyStyleTypesList
			case 'Fuel type':
				return FuelTypesList
			case 'Engine':
				return EngineTypesList
			case 'New/Used/CPO':
				return NewUsedCPOList
			case 'Vehicle history':
				return VehicleHistoryList
			case 'Drivetrain':
				return DrivetrainTypesList
			default: return ExteriorColorsList
		}
	})
    const { filterSearch, handleFilterChange, filteredItems, searchInputResetButton } = useFilterSearch(checkedItems)
    const { clickedButtons, handleClick, handleCheckBoxReset } = useClickedButtons()	
	const filterLength = Object.values(clickedButtons).filter((item) => item !== false)

    return (
		<SC.Wrapper>
			<SC.InnerWrapper 
				onClick={toggleShow}
			>
				<SC.HeaderWrapper>
					<IconWrapper>
						<Icon size={'16px'} />
					</IconWrapper>
					<SC.Title 
						onClick={toggleShow}
					>
						{text}
					</SC.Title>
				</SC.HeaderWrapper>
				<SC.ElementWrapper>
					{filterLength.length > 0 && 
					<>
						{filterLength.length}
						<ResetButton 
							onClick={handleCheckBoxReset} 
						/>
					</>}
					<button 
						onClick={toggleShow}
					>
						<IconWrapper>
							{!showFilter ? (
								<MdKeyboardArrowDown size={'16px'} />
							) : (
								<MdKeyboardArrowUp size={'16px'} />
							)}
						</IconWrapper>
					</button>
				</SC.ElementWrapper>
			</SC.InnerWrapper>
			{showFilter && (
				<DetailFilterShowingData
					filterSearch={filterSearch}
					handleFilterChange={handleFilterChange}
					filteredItems={filteredItems}
					clickedButtons={clickedButtons}
					handleClick={handleClick}
					text={text}
					searchInputResetButton={searchInputResetButton}
				/>)}
		</SC.Wrapper>)}