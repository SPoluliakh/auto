import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 8px 12px;
	border-radius: 10px;
	background-color: rgb(249, 248, 243);
	opacity: 1;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`

export const InnerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
`

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`

export const Title = styled.h6`
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 14px;
	font-weight: 600;
	line-height: 27px;
`


export const ElementWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
`

export const ResetButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(255, 229, 160);
	border-radius: 10px;
	font-size: 11px;
	cursor: pointer;
	line-height: 16.5px;
	padding: 4px 8px;
	text-transform: uppercase;
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
	background-color: ${({ clicked }) => (clicked ? 'red' : '#FFFFFF')};
`

export const CheckMarkIconWrapper = styled.div`
	position: absolute;
	left: -1px;
	bottom: -4px;
	z-index: 100;
	cursor: pointer;
`