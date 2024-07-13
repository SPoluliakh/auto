import StyledMultiRangeSlider from './InputFilters.styled'
import UseMinMaxValues from './hooks/useMinMaxValues' 
import { IconWrapper } from '../../../../components/IconWrapper/IconWrapper'
import productionYears from '../../../../../../src/common/data/productionYears.json'
import * as SC from './InputFilters.styled'


export const InputFilters = ({title, Icon, min, max, step}) => {
	const { minValue, maxValue, handleInput, handleMinYearChange, handleMaxYearChange } = UseMinMaxValues(min, max)

	return 	<SC.Wrapper >
				<SC.HeaderWrapper>
					<IconWrapper>
						<Icon size={"16px"}/>
					</IconWrapper>
					<SC.Title>
						{title}
					</SC.Title>
				</SC.HeaderWrapper>
				{/* <StyledMultiRangeSlider
					min={min}
					max={max}
					step={step}
					minValue={minValue}
					maxValue={maxValue}
					// onInput={handleInput}
					// onChange={handleInput}
				/> */}
				<SC.InputWrapper>
					<SC.InnerInputWrapper>
						<SC.MinMaxText>
							Minimum
						</SC.MinMaxText>
						<SC.Select value={minValue} 
							onChange={handleMinYearChange}
						>
							<option value="">{min[0]}</option>	
							{productionYears.map(year => 
								<option 
									key={year}
									value={year}
								>
										{year}
								</option>)}
						<span>▼</span>
						</SC.Select>
						{/* <SC.Input 
							type="text" 
							value={minValue}
							onChange={handleInputChange}
							name='minValue'
						/> */}
					</SC.InnerInputWrapper>
					<SC.InnerInputWrapper>
						<SC.MinMaxText>
							Maximum
						</SC.MinMaxText>
						{/* <select value={minValue} 
							onChange={handleMaxYearChange}
						>
							<option 
								value="">{max[productionYears.length-1]}
							</option>	
							{productionYears.map(year => 
								<option 
									key={year}
									value={year}
								>
										{year}
								</option>)}
						</select> */}
						<SC.Select value={maxValue} onChange={handleMaxYearChange}>
							<option value="">{max[productionYears.length - 1]}</option>
							{productionYears.map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
							))}
						</SC.Select>
						{/* <SC.Input 
							type="text" 
							value={maxValue}
							onChange={handleInputChange}
							name='maxValue'
						/> */}
					</SC.InnerInputWrapper>
				</SC.InputWrapper>
			</SC.Wrapper>
}