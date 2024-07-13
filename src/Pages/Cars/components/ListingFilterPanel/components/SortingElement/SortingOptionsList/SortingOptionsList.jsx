import * as SC from './SortingOptionsList.styled'


export const SortingOptionsList = ({list}) => {

	return 	<SC.Wrapper>
				<ul>
					{list?.map((item) => 
					<SC.ListItem 
						key={item.id}
					>
						{item.title}
					</SC.ListItem>)}
				</ul>
			</SC.Wrapper>
}

