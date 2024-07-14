import StyledMultiRangeSlider from "./InputFilters.styled";
import UseMinMaxValues from "./hooks/useMinMaxValues";
import { IconWrapper } from "../../../IconWrapper/IconWrapper";
import productionYears from "../../../../data/productionYears.json";
import * as SC from "./InputFilters.styled";
import { useState } from "react";

export const OdoInputFilter = ({ title, Icon, min, max, step }) => {
  const [minValue, setMinValue] = useState(min.toString());
  const [maxValue, setMaxValue] = useState(max.toString());

  const handleRangeInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  const handleMinChange = (e) => {
    let val = parseInt(e.target.value) ? parseInt(e.target.value) : "";
    if (val > maxValue) {
      return;
    }
    setMinValue(val);
  };
  const handleMaxChange = (e) => {
    let val = parseInt(e.target.value) ? parseInt(e.target.value) : "";
    if (val < minValue) {
      return;
    }
    setMaxValue(val);
  };

  if (title === "Odometer") {
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

            <SC.Input
              type="text"
              value={minValue}
              onChange={handleMinChange}
              name="minValue"
            />
          </SC.InnerInputWrapper>
          <SC.InnerInputWrapper>
            <SC.MinMaxText>Maximum</SC.MinMaxText>
            <SC.Input
              type="text"
              value={maxValue}
              onChange={handleMaxChange}
              name="maxValue"
            />
          </SC.InnerInputWrapper>
        </SC.InputWrapper>
        <SC.InputWrapper>
          <StyledMultiRangeSlider
            min={min}
            max={max}
            step={step}
            minValue={minValue}
            maxValue={maxValue}
            onInput={handleRangeInput}
            onChange={handleRangeInput}
          />
        </SC.InputWrapper>
      </SC.Wrapper>
    );
  }
};
