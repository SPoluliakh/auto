import { filtersNavButtons } from './hooks/filtersNavButtons'
import * as SC from './FilterOptions.styled'


export const FilterOptions = () => {

	return 	<>
				<SC.OptionsWrapper>
					{filtersNavButtons.map(({id, title, Icon}) => 
					<SC.Button key={id}>
						<SC.IconWrapper>
							{Icon && <Icon size={"18px"}/>}
						</SC.IconWrapper>
						<SC.Title>
							{title}
						</SC.Title>
					</SC.Button>)}
				</SC.OptionsWrapper>
			</>
}