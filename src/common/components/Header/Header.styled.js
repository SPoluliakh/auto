import styled from "styled-components"


export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 25px;
	font-size: 14px;
	height: 110px;
	transition-duration: 0.5s;
`
export const LogoWrapper = styled.div`
	width: 20%;
`

export const ListWrapper = styled.div`
	width: 60%;
	display: flex;
	justify-content: center;
`

export const List = styled.ul`
	display: flex;
	align-items: center;
	gap: 64px;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
	
	&:hover{
		transform: scale(1.1);
		text-shadow: 0.7px 0px 0px;
	}
`

export const Text = styled.span`
	
`

export const Logo = styled.h1`
	font-weight: 800;
	font-size: 28px;
`

export const BurgerWrapper = styled.div`
	display: flex;
	justify-content: end;
	width: 20%;
`

export const BurgerInnerWrapper = styled.div`

`

export const BurgerButton = styled.button`

	&:hover{
			cursor: pointer; 
		}
`




