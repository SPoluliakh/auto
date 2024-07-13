import styled from "styled-components"


export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 12px;
	border-radius: 10px;
	background-color: rgb(249, 248, 243);
	cursor: pointer;
	opacity: 1;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`

export const ResultsButton = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: center;
	transition-timing-function: cubic-bezier(.4,0,.2,1);
	transition-duration: .5s;
	background-color: rgb(255 229 160);

	&:hover {
		opacity: 0.7;
	}
`

export const Title = styled.h6`
	font-size: 16px;
	font-weight: 600;
	line-height: 27px;
`

