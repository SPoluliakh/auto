import styled from "styled-components"


export const Wrapper = styled.div`
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	background-color: rgb(255, 255, 255);
	padding: 0 10px 10px 10px;
	max-height: 400px;
	width: 276px;
	overflow-y: auto;
`

export const InputWrapper = styled.div`
	position: relative;
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
	margin: 10px 0 10px 0;
	background-color: rgb(249 249 249);

	&:focus {
		border-color: #F7E5A0; 
	}
`

export const ClearSearchInputButton = styled.button`
	position: absolute;
	top: 18px;
	left: 200px;
`



export const ListItem = styled.li`
	display: flex;
	align-items: center;
	gap: 6px;
	position: relative;
	margin: 4px 0 4px 0;
	padding: 10px 20px;
	cursor: pointer;
	background-color: ${p => p.isSelected ? "orange" : "transparent"};
	border-radius: 10px;

	&:hover {
		background-color: rgba(255, 229, 160, .3);
		border-radius: 10px;
	}
`

export const SelectedIndicator = styled.span`
	
`

export const ResetButton = styled.button`
	position: absolute;
	left: 140px;
	bottom: 12px;
`

export const ModelGenerationsFilterList = styled.div`
	z-index: 3001;
	left: 0px;
	top: 68px;
	max-height: 772px;
	overflow-y: scroll;
	position: absolute;
	border-radius: 8px;
	background: #fff;
	box-shadow: 0 10px 30px 0 #0000001a;
	animation-duration: 0.3s;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;
`

export const InnerWrapper = styled.div`
	min-width: 280px;
	max-width: 100%;
	padding: 16px;
	overflow-y: auto;
`

export const ClearCheckedOptionsButton = styled.div`
	display: flex;
	align-items: center;
	margin: -12px -12px 0;
	padding: 12px;
	cursor: pointer;
	border-bottom: 1px solid #0000001a;

	&:hover {
		cursor: pointer;
		background-color: #f7e5a0;
	}
`

export const IconWrapper = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Text = styled.span`
	padding: 0 8px;
`

export const PopupGenerationsList = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 280px);
	grid-gap: 12px;
	padding: 12px 0px;
`
