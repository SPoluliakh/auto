import { IoIosList } from "react-icons/io";
import { LuLayoutList } from "react-icons/lu";
import { CiGrid41 } from "react-icons/ci";
import { useEffect, useState } from 'react'
import { ResultsButton } from '../../../../common/components/ResultsButton/ResultsButton'
import { SortingElement } from './components/SortingElement/SortingElement'
import * as SC from './ListingFilterPanel.styled'

// TODO: optimize this code

export const ListingFilterPanel = () => {

	const [leftButtonColor, setLeftButtonColor] = useState('#ffffff');
	const [middleButtonColor, setMiddleButtonColor] = useState('#ffffff');
	const [rightButtonColor, setRightButtonColor] = useState('#ffffff');
	const handleClick = (button) => {
		switch (button) {
			case 'left':
			setLeftButtonColor((prevColor) => (prevColor === '#ffffff' ? '#F7E5A0' : '#ffffff'));
			break;
			case 'middle':
			setMiddleButtonColor((prevColor) => (prevColor === '#ffffff' ? '#F7E5A0' : '#ffffff'));
			break;
			case 'right':
			setRightButtonColor((prevColor) => (prevColor === '#ffffff' ? '#F7E5A0' : '#ffffff'));
			break;
			default:
			break;
		}
	}

	return 	<SC.Wrapper>
				<SC.ListingFilterPanelLeft>
					<SortingElement/>
					<ResultsButton
						text="Add filter"
					/>
				</SC.ListingFilterPanelLeft>
				<SC.ListingFilterPanelRight>
					<SC.LeftButton 
						onClick={() => handleClick('left')} 
						bgColor={leftButtonColor}
					>
						<IoIosList size={"22px"}/>
					</SC.LeftButton>
					<SC.MiddleButton 
						onClick={() => handleClick('middle')} 
						bgColor={middleButtonColor}
					>
						<CiGrid41 size={"22px"}/>
					</SC.MiddleButton>
					<SC.RightButton 
						onClick={() => handleClick('right')} 
						bgColor={rightButtonColor}
					>
						<LuLayoutList size={"22px"}/>
					</SC.RightButton>
				</SC.ListingFilterPanelRight>
			</SC.Wrapper>
}