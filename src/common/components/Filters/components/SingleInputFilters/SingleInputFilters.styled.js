import Slider from "rc-slider";
import styled from "styled-components"


export const Wrapper = styled.div`
	padding: 8px 12px;
	border-radius: 10px;
	background-color: rgb(249, 248, 243);
	opacity: 1;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`

export const Title = styled.h6`
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: 14px;
	font-weight: 600;
	line-height: 27px;
`
// TODO - active
export const SingleSlider = styled(Slider)`
	padding: 20px 10px;

	& .rc-slider-handle {
		background-color: #F7E5A0;
		border: none;
		width: 20px;
		height: 20px;
	}

	& .rc-slider-handle .rc-slider-handle-dragging {
		box-shadow: none;
		border-color: transparent;
	}

	& .rc-slider-handle .rc-slider-handle-dragging:hover {
		box-shadow: none;
		border-color: transparent;
	}

	& .rc-slider-handle-dragging .rc-slider-handle-dragging .rc-slider-handle-dragging {
		box-shadow: none;
	}

	& .rc-slider-handle:active {
		box-shadow: none;
	}

	& .rc-slider-rail {
		background-color: #FFFFFF;
		width: 232px;
		height: 8px;
	}		

	& .rc-slider-track {
		background-color: #FFFFFF;
		width: 232px;
		height: 8px;
	}

	& .rc-slider-step{
		width: 232px;
		height: 8px;
	}
`

export const InnerInputWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`

export const MinMaxText = styled.span`
	font-size: 10px;
`

export const Input = styled.input`
	width: 100%;
	background-color: #FFFFFF;
	padding: 10px;
	margin-top: 10px;
	border-radius: 10px;
	color: black;
	border: 2px solid transparent; 
	outline: none; 

	&:focus {
		border-color: #F7E5A0; 
	}
`

