import { CiHeart } from 'react-icons/ci'
import { TiDeleteOutline } from 'react-icons/ti'
import * as SC from './Header.styled'


export const Header = () => {

	return 	<SC.SaveRemoveList>
				<SC.SaveRemoveListItem>
					<CiHeart size={'18px'} />
				</SC.SaveRemoveListItem>
				<SC.SaveRemoveListItem>
					<TiDeleteOutline size={'18px'} />
				</SC.SaveRemoveListItem>
			</SC.SaveRemoveList>
}