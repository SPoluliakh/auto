import styled from "styled-components"
// import generationIMG from '../../../../../../../../../common/images/bmw5Series.8Gen.jpg'


export const Wrapper = styled.div`
	width: 280px;
    height: 210px;
	display: flex;
	cursor: pointer;
	padding: 10px;
	border-radius: 8px;
	background: #fff;
	box-shadow: 0 10px 30px 0 #0000001a;
    animation-duration: .3s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards; 
	background-image: url('${props=>props.IMG}');
	background-repeat: no-repeat;
	background-size: cover;
	opacity: ${props=>props.showCheckMark ? 1 : 0.8};

	&:hover{
		opacity: 1;
	}
`

export const CheckBoxWrapper = styled.div`
	position: relative;
`

export const CheckBox = styled.button`
	width: 18px;
	height: 18px;
	background-color: #FFFFFF;
	color: black;
	border: 2px solid transparent; 
	outline: none; 
	background-color: ${({ showCheckMark }) => showCheckMark ? '#F7E5A0' : '#FFFFFF'};

	&:hover {
		border-color: #F7E5A0; 
	}
`

export const CheckMarkIconWrapper = styled.div`
	position: absolute;
	left: -1px;
	bottom: 168px;
	z-index: 100;
	cursor: pointer;
`

export const GenerationData = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
	/* margin-top: 2px; */
	margin-left: 8px;
	background-color: #F9F8F3;
	border-radius: 8px;
	padding: 3px;
	height: 18%;
`

export const Text = styled.span`
	color: rgb(0, 0, 0);
	font-size: 13px;
	font-weight: 700;
	/* line-height: 20px; */
`