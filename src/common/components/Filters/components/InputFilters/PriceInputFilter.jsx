import { useDispatch, useSelector } from "react-redux";
import StyledMultiRangeSlider from "./InputFilters.styled";
import UseMinMaxValues from "./hooks/useMinMaxValues";
import { IconWrapper } from "../../../../components/IconWrapper/IconWrapper";
import productionYears from "../../../../../../src/common/data/productionYears.json";
import * as SC from "./InputFilters.styled";
import { useState } from "react";
import { getPrice } from "../../../../../redux/filters/inputFiltersStore";
import {
  setMinPrice,
  setMaxPrice,
} from "../../../../../redux/filters/inputFiltersStore";

export const PriceInputFilter = ({ title, Icon, min, max, step }) => {
  const dispatch = useDispatch();
  const priceValue = useSelector(getPrice);

  const [minValue, setMinValue] = useState(priceValue.min);
  const [maxValue, setMaxValue] = useState(priceValue.max);

  const handleMinChange = (e) => {
    let val = parseInt(e.target.value) ? parseInt(e.target.value) : "";
    if (val > maxValue) {
      setMaxValue(val);
      dispatch(setMaxPrice(val));
    }
    setMinValue(val);
    dispatch(setMinPrice(val));
  };
  const handleMaxChange = (e) => {
    let val = parseInt(e.target.value) ? parseInt(e.target.value) : "";
    if (val < minValue) {
      setMinValue(val);
      dispatch(setMinPrice(val));
    }
    setMaxValue(val);
    dispatch(setMaxPrice(val));
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
    </SC.Wrapper>
  );
};
