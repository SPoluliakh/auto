import styled from "styled-components"


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