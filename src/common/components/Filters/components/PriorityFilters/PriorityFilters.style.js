import styled from "styled-components"


export const Wrapper = styled.div`
	position: relative;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	width: 100%;
	padding: 8px 12px;
	border-radius: 10px;
	background-color: rgb(249, 248, 243);
	cursor: pointer;
	opacity: 1;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
	background-color: ${props => props.isOpenFilter ? 'rgb(255, 255, 255)' : 'rgb(249, 248, 243)'};
`

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px;
	background-color: rgb(255 255 255);
	border-radius: 50%;
`

export const Title = styled.h6`
	font-size: 14px;
	font-weight: 600;
	line-height: 27px;
`

export const SelectedOptionsNumber = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	padding: 4px 12px;
	font-weight: 800;
	background-color: rgb(255, 229, 160);
	border-radius: 10px;
	margin-left: 6px;
`

export const ResetButton = styled.button`
	position: absolute;
	left: 140px;
	bottom: 12px;
`

export const ButtonIcon = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px;
	background-color: rgb(255 255 255);
	border-radius: 50%;
`

export const InputWrapper = styled.div`
	padding: 8px 12px;
	border-radius: 10px;
	background-color: rgb(249, 248, 243);
	opacity: 1;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`

export const ListWrapper = styled.div`
	position: absolute;
	top: 38px;
	left: 0;
	z-index: 2;
`