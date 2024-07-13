import styled from 'styled-components'


export const InputWrapper = styled.div`
	position: relative;
`

export const InputResetButtonWrapper = styled.div`
	position: absolute;
	left: 210px;
	top: 23px;
`

export const Input = styled.input`
	width: 100%;
	background-color: #FFFFFF;
	padding: 10px;
	margin-top: 10px;
	border-radius: 10px;
	color: black;
	border: 2px solid transparent; 
	outline: none; 

	&:focus {
		border-color: #F7E5A0; 
	}
`

export const Label = styled.label`
	padding: 10px;
	display: flex;
	flex-direction: column;
`

export const LabelInnerWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
	position: relative;
`

export const ColorButton = styled.button`
	width: 18px;
	height: 18px;
	background-color: #FFFFFF;
	color: black;
	border: 2px solid transparent; 
	outline: none; 
	background-color: ${({ clicked }) => (clicked ? '#F7E5A0' : '#FFFFFF')};

	&:hover {
		border-color: #F7E5A0; 
	}
`

export const ColorId = styled.div`
	width: 22px;
	height: 22px;
	border: 2px solid #F7E5A0; 
	border-radius: 50%;
	background-color: ${({name}) => {
		if (name === 'Red'){
			return 'Red';}
		if (name === 'Yellow'){
			return 'Yellow';}
		if (name === 'Green'){
			return 'Green';}
	}};
`

export const CheckMarkIconWrapper = styled.div`
	position: absolute;
	left: -1px;
	bottom: -4px;
	z-index: 100;
	cursor: pointer;
`