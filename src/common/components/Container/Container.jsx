import * as SC from './Container.styled'


export const Container = ({children}) => {

	return  <SC.Wrapper>
				{children}
			</SC.Wrapper>
}