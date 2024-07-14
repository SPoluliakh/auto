import StyledMultiRangeSlider from "./InputFilters.styled";
import UseMinMaxValues from "./hooks/useMinMaxValues";
import { IconWrapper } from "../../../IconWrapper/IconWrapper";
import productionYears from "../../../../data/productionYears.json";
import * as SC from "./InputFilters.styled";

export const YearInputFilter = ({ title, Icon, min, max, step }) => {
  const {
    minValue,
    maxValue,
    handleInput,
    handleMinYearChange,
    handleMaxYearChange,
  } = UseMinMaxValues(min, max);

  return (
    <SC.Wrapper>
      <SC.HeaderWrapper>
        <IconWrapper>
          <Icon size={"16px"} />
        </IconWrapper>
        <SC.Title>{title}</SC.Title>
      </SC.HeaderWrapper>
      <SC.InputWrapper>
        <SC.InnerInputWrapper>
          <SC.MinMaxText>Minimum</SC.MinMaxText>
          <SC.Select value={minValue} onChange={handleMinYearChange}>
            <option value="">{min[0]}</option>
            {productionYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
            <span>▼</span>
          </SC.Select>
        </SC.InnerInputWrapper>
        <SC.InnerInputWrapper>
          <SC.MinMaxText>Maximum</SC.MinMaxText>
          <SC.Select value={maxValue} onChange={handleMaxYearChange}>
            <option value="">{max[productionYears.length - 1]}</option>
            {productionYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </SC.Select>
        </SC.InnerInputWrapper>
      </SC.InputWrapper>
    </SC.Wrapper>
  );
};
