import { GiPathDistance } from "react-icons/gi";
import UseMinMaxValues from "../InputFilters/hooks/useMinMaxValues";
import { IconWrapper } from '../../../../components/IconWrapper/IconWrapper'
import "rc-slider/assets/index.css";
import * as SC from './SingleInputFilters.styled'


const SingleInputFilters = ({ distanceChange, distance }) => {
	// const { minValue, handleInput } = UseMinMaxValues(0,100,'single')

	return 	<SC.Wrapper>
				<SC.HeaderWrapper>
					<IconWrapper>
						<GiPathDistance size={"16px"} />
					</IconWrapper>
					<SC.Title>
						Distance from me
					</SC.Title>
				</SC.HeaderWrapper>
				{/* <SC.SingleSlider 
					min={0} max={100} 
					value={minValue} 
					onChange={handleInput} 
				/> */}
				<SC.InnerInputWrapper>
					{/* <SC.MinMaxText>
						Radius
					</SC.MinMaxText> */}
					<SC.Input
						value={distance}
						onChange={distanceChange}
					/>	
				</SC.InnerInputWrapper>
			</SC.Wrapper>	
}

export default SingleInputFilters