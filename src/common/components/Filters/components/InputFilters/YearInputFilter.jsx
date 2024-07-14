import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import StyledMultiRangeSlider from "./InputFilters.styled";
import UseMinMaxValues from "./hooks/useMinMaxValues";
import { IconWrapper } from "../../../IconWrapper/IconWrapper";
import productionYears from "../../../../data/productionYears.json";
import * as SC from "./InputFilters.styled";
import { getYear } from "../../../../../redux/filters/inputFiltersStore";
import {
  setMinYear,
  setMaxYear,
} from "../../../../../redux/filters/inputFiltersStore";

export const YearInputFilter = ({ title, Icon, min, max, step }) => {
  const dispatch = useDispatch();
  const yearValue = useSelector(getYear);

  const [minValue, setMinValue] = useState(yearValue.min);
  const [maxValue, setMaxValue] = useState(yearValue.max);

  const handleMinChange = (e) => {
    let val = parseInt(e.target.value) ? parseInt(e.target.value) : "";
    if (val > maxValue) {
      return;
    }
    setMinValue(val);
    dispatch(setMinYear(val));
  };
  const handleMaxChange = (e) => {
    let val = parseInt(e.target.value) ? parseInt(e.target.value) : "";
    if (val < minValue) {
      return;
    }
    setMaxValue(val);
    dispatch(setMaxYear(val));
  };

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
          <SC.Select value={minValue} onChange={handleMinChange}>
            <option value="">{minValue}</option>
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
          <SC.Select value={maxValue} onChange={handleMaxChange}>
            <option value="">{maxValue}</option>
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
