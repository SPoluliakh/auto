import * as SC from './ResultsButton.styled'


export const ResultsButton = ({ text }) => {

	return 	<>
				<SC.ResultsButton>
					<SC.Title>
						{text}
					</SC.Title>
				</SC.ResultsButton>
			</>
}