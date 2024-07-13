import styled from "styled-components"


export const SaveRemoveList = styled.ul`
	display: flex;
	align-items: center;
	gap: 4px;
`

export const SaveRemoveListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 4px;
	border-radius: 50%;
	background-color: rgb(245 241 229);
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 0.5s;

	&:hover {
		background-color: rgb(255 229 160);
	}
`
