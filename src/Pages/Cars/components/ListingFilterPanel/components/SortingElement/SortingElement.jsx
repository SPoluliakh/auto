import { useIsOpenFilter } from '../../../../../../common/hooks/useIsOpenFilter'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { SortingOptionsList } from './SortingOptionsList/SortingOptionsList'
import {optionsList} from './hooks/optionsList'
import * as SC from './SortingElement.styled'


export const SortingElement = () => {
	const { toggleFilter, isOpenFilter } = useIsOpenFilter()


	return 	<SC.Wrapper>
				{<SC.Button 
					isOpenFilter={isOpenFilter}
					onClick={toggleFilter}
				>
					<SC.TitleWrapper>
						<SC.Title>Sorting</SC.Title>
					</SC.TitleWrapper>
					<SC.ButtonIcon >
						{!isOpenFilter ? (
							<MdKeyboardArrowDown size={'16px'} />
						) : (
							<MdKeyboardArrowUp size={'16px'} />
						)}
					</SC.ButtonIcon>
				</SC.Button>}
				<SC.ListWrapper>
					{isOpenFilter && <SortingOptionsList list={optionsList} />}
				</SC.ListWrapper>
			</SC.Wrapper>
}