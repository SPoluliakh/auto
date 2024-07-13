import styled from "styled-components"


export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
    padding: 0 16px 24px;
`

export const ListingFilterPanelLeft = styled.div`
	display: flex;
    flex-wrap: wrap;
    align-items: center;
	gap: 8px;
`

export const ListingFilterPanelRight = styled.div`
	display: flex;
	border-radius: 12px;
	background-color: #ffffff;
	box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.2);
	height: 36px;
`

export const Button = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 36px;
	width: 46px;
	padding: 5px;
	cursor: pointer;
	background-color: ${(props) => props.bgColor || '#ffffff'};

	&:hover{
		background-color: #F9F8F3;
	}
`

export const LeftButton = styled(Button)`
	border-top-left-radius: 12px;
	border-bottom-left-radius: 12px;
`

export const MiddleButton = styled(Button)`
	border-right: 2px solid #00000033;
	border-left: 2px solid #00000033;
`

export const RightButton = styled(Button)`
	border-top-right-radius: 12px;
	border-bottom-right-radius: 12px;
`
