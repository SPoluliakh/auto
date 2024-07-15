import { useDispatch, useSelector } from "react-redux";
import StyledMultiRangeSlider from "./InputFilters.styled";
import { IconWrapper } from "../../../IconWrapper/IconWrapper";
import * as SC from "./InputFilters.styled";
import { useState } from "react";
import { getOdometer } from "../../../../../redux/filters/inputFiltersStore";
import {
  setMinOdometer,
  setMaxOdometer,
} from "../../../../../redux/filters/inputFiltersStore";

export const OdoInputFilter = ({ title, Icon, min, max, step }) => {
  const dispatch = useDispatch();
  const odometerValue = useSelector(getOdometer);

  const [minValue, setMinValue] = useState(odometerValue.min);
  const [maxValue, setMaxValue] = useState(odometerValue.max);

  const handleRangeInput = (e) => {
    if (e.minValue !== minValue) {
      setMinValue(e.minValue);
      dispatch(setMinOdometer(parseInt(e.minValue)));
    }
    if (e.maxValue !== maxValue) {
      setMaxValue(e.maxValue);
      dispatch(setMaxOdometer(parseInt(e.maxValue)));
    }
  };

  const handleMinChange = (e) => {
    let val = parseInt(e.target.value) ? parseInt(e.target.value) : "";
    if (val > maxValue) {
      return;
    }
    setMinValue(val);
    dispatch(setMinOdometer(parseInt(val)));
  };
  const handleMaxChange = (e) => {
    let val = parseInt(e.target.value) ? parseInt(e.target.value) : "";
    if (val < minValue) {
      return;
    }
    setMaxValue(val);
    dispatch(setMaxOdometer(parseInt(val)));
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
          />
        </SC.InputWrapper>
      </SC.Wrapper>
    );
  }
};
