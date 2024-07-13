import styled from "styled-components"


export const Wrapper = styled.div`
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	background-color: rgb(255, 255, 255);
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
	padding: 0 10px 10px 10px;
	/* max-height: 400px; */
	width: 246px;
	overflow-y: auto;
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

export const ListItem = styled.li`
	margin: 4px 0 4px 0;
	padding: 10px 20px;
	cursor: pointer;

	&:hover {
		background-color: rgba(255, 229, 160, .3);
		border-radius: 10px;
	}
`
export const SelectedIndicator = styled.span`
	
`