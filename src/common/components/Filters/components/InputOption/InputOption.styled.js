import styled from "styled-components"


export const InputWrapper = styled.div`
	padding: 8px 12px;
	border-radius: 10px;
	background-color: rgb(249, 248, 243);
	opacity: 1;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
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
	font-size: 16px;
	font-weight: 600;
	line-height: 27px;
`

export const Input = styled.input`
	background-color: #FFFFFF;
	width: 100%;
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