import styled from 'styled-components'

export const Wrapper = styled.div`
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
