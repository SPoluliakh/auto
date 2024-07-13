import * as SC from './ResetButton.styled'


export const ResetButton = ({ onClick, filtersList, item }) => {
	const handleClick = () => {
		onClick(item)
	}

	return 	<SC.ResetButton
				type='button' 
				onClick={filtersList ? handleClick : onClick}
				className='PriorityFilters'
			>
				reset
			</SC.ResetButton>
}