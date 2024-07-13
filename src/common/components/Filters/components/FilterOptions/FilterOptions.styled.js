import styled from "styled-components"


export const OptionsWrapper = styled.ul`
	display: flex;
	justify-content: space-around;
	gap: 10px;
`

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px;
	background-color: rgb(255 255 255);
	border-radius: 50%;
`

export const Button = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4px;
	padding: 8px;
	border-radius: 10px;
	background-color: rgb(245 241 229);
	cursor: pointer;
`

export const Title = styled.h6`
	font-size: 14px;
	font-weight: 600;
	line-height: 27px;
`
