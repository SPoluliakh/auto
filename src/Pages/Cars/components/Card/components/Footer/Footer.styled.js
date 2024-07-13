// import { ResultsButton } from '../../../../common/components/ResultsButton/ResultsButton.styled'
import { ResultsButton } from '../../../../../../common/components/ResultsButton/ResultsButton.styled'
import styled from "styled-components"


export const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	position: absolute;
	bottom: -80px;
	left: 0;
	right: 0;
	margin: auto;
`

export const Button = styled(ResultsButton)`
	width: 40%;
	padding: 20px 8px;
	border-radius: 9999px;
	transition-duration: 0.5s;
`