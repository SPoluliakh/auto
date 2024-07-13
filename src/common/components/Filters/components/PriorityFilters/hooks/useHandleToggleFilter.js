import { useDispatch, useSelector } from "react-redux";
import {
  setIsOpenFilterGeneration,
  setIsOpenFilterMake,
  setIsOpenFilterModel,
  setIsOpenFilterTrim,
} from "../../../../../../redux/filters/toggleFilters";
import {
  getFilteredMakesList,
  getMakesList,
} from "../../../../../../redux/filters/makes";
import {
  getFilteredModelsList,
  getModelsList,
  setFilteredModelsList,
} from "../../../../../../redux/filters/models";
import {
  getFilteredGenerationsList,
  getGenerationsList,
} from "../../../../../../redux/filters/generations";
import {
  getFilteredTrimsList,
  getTrimsList,
} from "../../../../../../redux/filters/trims";

import modelsList from "../../../../../data/models.json";

// TODO: make reset for all components (filters)

export const useHandleToggleFilter = (type, toggleFilter) => {
  const dispatch = useDispatch();

  const filteredMake = useSelector(getFilteredMakesList);
  const filteredModel = useSelector(getFilteredModelsList);
  const filteredGeneration = useSelector(getFilteredGenerationsList);
  const filteredTrim = useSelector(getFilteredTrimsList);

  // const make = useSelector(getMakesList);
  // const model = useSelector(getModelsList);
  // const generation = useSelector(getGenerationsList);
  // const trim = useSelector(getTrimsList);

  const handleToggleFilter = () => {
    switch (type) {
      case "Make":
        const arr = filteredMake.map((item) => item.name);
        const setModel = modelsList.filter((model) => arr.includes(model.make));
        console.log("=============", setModel);
        dispatch(setFilteredModelsList(setModel));

        dispatch(setIsOpenFilterModel(false));
        dispatch(setIsOpenFilterTrim(false));
        dispatch(setIsOpenFilterGeneration(false));
        dispatch(toggleFilter());
        break;
      case "Model":
        dispatch(setIsOpenFilterMake(false));
        dispatch(setIsOpenFilterTrim(false));
        dispatch(setIsOpenFilterGeneration(false));
        dispatch(toggleFilter());
        break;
      case "Trim":
        dispatch(setIsOpenFilterMake(false));
        dispatch(setIsOpenFilterModel(false));
        dispatch(setIsOpenFilterGeneration(false));
        dispatch(toggleFilter());
        break;
      case "Generation":
        dispatch(setIsOpenFilterMake(false));
        dispatch(setIsOpenFilterModel(false));
        dispatch(setIsOpenFilterTrim(false));
        dispatch(toggleFilter());
        break;
      default:
        break;
    }
  };

  return { handleToggleFilter };
};
