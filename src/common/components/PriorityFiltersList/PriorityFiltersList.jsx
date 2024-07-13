import { useDispatch, useSelector } from "react-redux";
import { useFilter } from "./hooks/useFilter";
import { RxCross1 } from "react-icons/rx";
import { PriorityElement } from "./components/PriorityElement";
import { getFilteredGenerationsList } from "../../../redux/filters/generations";
import { getFilteredModelsList } from "../../../redux/filters/models";
import * as SC from "./PriorityFiltersList.styled";
import { getFilteredMakesList } from "../../../redux/filters/makes";

export const PriorityFiltersList = ({
  list,
  filteredList,
  filteredTypesList,
  resetListItem,
  type,
}) => {
  const dispatch = useDispatch();
  const make = useSelector(getFilteredMakesList);
  const model = useSelector(getFilteredModelsList);
  const generation = useSelector(getFilteredGenerationsList);

  const uniqueMakesList = (item) => {
    if (type === "Trim") {
      if (generation.length > 0) {
        const makes = make.map((item) => item.name);
        const models = model.map((item) => item.name);
        const generations = generation.map((item) => item.id);
        const trims = filteredList.map((item) => item.model);
        const modelTrimsMatch = trims.filter((trim) => models.includes(trim));
      }

      const result = filteredList.map((item) => item.model);
      const value = result.includes(item.model);

      if (!value) {
        dispatch(filteredTypesList(item));
      }
      return;
    }
    const result = filteredList.map((item) => item.name);
    const value = result.includes(item.name);
    if (!value) {
      dispatch(filteredTypesList(item));
      //   switch (type) {
      // 	  case "Make":
      // 		  const

      //   }
    }
  };

  const {
    filter,
    handleInputChange,
    renderMakesList,
    handleClearInput,
    clearButton,
  } = useFilter(list, filteredList, type);
  // const renderTrimList = renderMakesList.flatMap((item) => Object.values(item.generations).flat())

  return (
    <SC.Wrapper>
      <div>
        <SC.Input
          type="text"
          value={filter}
          onChange={handleInputChange}
          className="PriorityFilters"
          ref={clearButton}
        />
        <SC.ClearInputButton
          type="button"
          onClick={handleClearInput}
          className="PriorityFilters"
        >
          <RxCross1 />
        </SC.ClearInputButton>
      </div>
      <ul>
        {!type &&
          renderMakesList.map((item) => (
            <PriorityElement
              key={item.id}
              filteredList={filteredList}
              resetListItem={resetListItem}
              item={item}
              uniqueMakesList={uniqueMakesList}
            />
          ))}
        {type &&
          renderMakesList.map((item) => (
            <PriorityElement
              type={type}
              key={item}
              filteredList={filteredList}
              resetListItem={resetListItem}
              item={item}
              uniqueMakesList={uniqueMakesList}
            />
          ))}
      </ul>
    </SC.Wrapper>
  );
};
