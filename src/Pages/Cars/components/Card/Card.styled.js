import styled from 'styled-components'


export const Wrapper = styled.li`
	grid-column: span 4 / span 4;
	display: flex;
	flex-direction: column;
	width: 340px;
	height: 700px;
	border-radius: 12px;
	background-color: #ffffff;
	box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.2);
`

export const ImageWrapper = styled.div`
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	overflow: hidden;
`

export const DescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding: 28px;
	gap: 18px;
	height: 600px;
`

export const TitleListButtonsWrapper = styled.div`
	height: 390px;
	display: flex;
	flex-direction: column;
`

export const MainDescriptionWrapper = styled.div`
	height: 322px;
	display: flex;
	flex-direction: column;
	position: relative;
`

export const Title = styled.h5`
	flex-grow: 1;
	font-weight: 600;
	line-height: 22.5px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`

export const InnerDescriptionWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-grow: 1;
`

export const DescriptionElement = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
	width: 50%;
	font-size: 14px;
	line-height: 24px;
	color: rgb(17, 17, 17);
`

export const Value = styled.span`
	background-color: ${p=>{
		if (p.id_style === 0) return "#36b555";
	}};
	border-radius: ${p => p.id_style === 0 ? "4px" : "0"};
	padding: ${p => p.id_style === 0 ? "1px 8px" : "0"};
	color: ${p => p.id_style === 0 ? "rgb(255, 255, 255)" : "inherit"};
	font-size: ${p => p.id_style === 0 ? "17px" : "inherit"};
	font-weight: ${p => p.id_style === 0 ? "700" : "inherit"};
`

export const PriceWrapper = styled.div`
	display: inline-flex;
	align-items: center;
	border-radius: 4px;
	padding: 1px 8px;
	background-color: #36b555;
	/* rgb(255, 132, 0) */
	/* rgb(219, 0, 0) */
	color: rgb(255, 255, 255);
	font-size: 17px;
	font-weight: 700;
`