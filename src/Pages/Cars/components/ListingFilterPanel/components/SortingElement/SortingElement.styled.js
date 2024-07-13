import styled from "styled-components"


export const Wrapper = styled.div`
	position: relative;
	width: 200px;
`

export const Button = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 12px;
	border-radius: 10px;
	background-color: rgb(249, 248, 243);
	cursor: pointer;
	opacity: 1;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
	background-color: ${props => props.isOpenFilter ? 'rgb(255, 255, 255)' : 'rgb(249, 248, 243)'};
`

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`

export const Title = styled.h6`
	font-size: 14px;
	font-weight: 600;
	line-height: 27px;
`

export const ButtonIcon = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px;
	background-color: rgb(255 255 255);
	border-radius: 50%;
`

export const ListWrapper = styled.div`
	position: absolute;
	top: 50px;
	left: 0;
	z-index: 2;
`