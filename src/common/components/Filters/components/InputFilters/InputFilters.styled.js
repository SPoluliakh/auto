import styled from "styled-components"
import MultiRangeSlider from "multi-range-slider-react";


export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
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

export const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const InnerInputWrapper = styled.div`
	width: 80px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`

export const MinMaxText = styled.span`
	font-size: 14px;
	text-align: center;
`

export const Select = styled.select`
	width: 100%;
	background-color: #FFFFFF;
	padding: 10px;
	margin-top: 10px;
	border-radius: 10px;
	color: black;
	border: 2px solid transparent; 
	outline: none; 
	appearance: none;

	&:focus {
		border-color: #F7E5A0; 
	}
`

export const Input = styled.input`
	
`

const StyledMultiRangeSlider = styled(MultiRangeSlider)`
	width: 100%;

	&.multi-range-slider {
		position: relative;
		border: none;
		border-radius: 0;
		position: static;
		box-shadow: none;
		flex-direction: column;

		& .ruler {
			display: none;
		}
		
		& .labels {
			display: none;
		}
		
		& .bar {
			& .bar-left {
				background-color: rgb(255 255 255);
				box-shadow: none;
			}

			& .bar-right {
					background-color: rgb(255 255 255);
					box-shadow: none;
				}

			& .thumb {
				background-color: #F7E5A0;
				&::before {
					border: none;
					box-shadow: none;
				}

				& .caption{
					& .max-caption{
						display: none;
					}

					& .min-caption{
						display: none;
					}
				}
			}

			& .bar-right {
					background-color: rgb(255 255 255);
					box-shadow: none;
				}

			& .bar-inner {
				border: none;

				& .bar-inner-left {
					background-color: rgb(255 255 255);
				}
				& .bar-inner-right {
					background-color: rgb(255 255 255);
				}
			}
		}

		
	}
`

export default StyledMultiRangeSlider

