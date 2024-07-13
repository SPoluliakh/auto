import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { PriorityFiltersList } from "../../../PriorityFiltersList/PriorityFiltersList";
import { filteredMakesList } from "../../../../../redux/filters/makes";
import { ResetButton } from "../../../ResetButton/ResetButton";
import { filteredModelsList } from "../../../../../redux/filters/models";
import { filteredTrimsList } from "../../../../../redux/filters/trims";
import { useFetchLists } from "./hooks/useFetchLists";
import { useFetchFilteredLists } from "./hooks/useFetchFilteredLists";
import { useResetLists } from "./hooks/useResetLists";
import { useResetItems } from "./hooks/useResetItems";
import { useHandleToggleFilter } from "./hooks/useHandleToggleFilter";
import * as SC from "./PriorityFilters.style";

export const PriorityFilters = ({ list, type, isOpenFilter, toggleFilter }) => {
  const { makesList, modelsList, trimsList } = useFetchLists();
  const {
    renderedFilteredMakesList,
    renderedFilteredModelsList,
    renderedFilteredTrimsList,
  } = useFetchFilteredLists();
  const {
    resetFilteredMakeList,
    resetFilteredModelList,
    resetFilteredTrimList,
  } = useResetLists();
  const { resetMake, resetModel, resetTrim } = useResetItems();
  const { handleToggleFilter } = useHandleToggleFilter(type, toggleFilter);

  return (
    <SC.Wrapper>
      {list.map(({ id, title, Icon }) => (
        <SC.Button
          className="PriorityFilters"
          key={id}
          isOpenFilter={isOpenFilter}
          onClick={handleToggleFilter}
          disabled={
            (type === "Model" && renderedFilteredMakesList.length === 0) ||
            (type === "Trim" && renderedFilteredModelsList.length === 0)
          }
        >
          <SC.TitleWrapper className="PriorityFilters">
            <SC.IconWrapper className="PriorityFilters">
              {Icon && <Icon size={"16px"} className="PriorityFilters" />}
            </SC.IconWrapper>
            <SC.Title className="PriorityFilters">{title}</SC.Title>
            {title === "Make" && renderedFilteredMakesList.length > 0 && (
              <SC.SelectedOptionsNumber>
                {renderedFilteredMakesList.length}
              </SC.SelectedOptionsNumber>
            )}
            {title === "Model" && renderedFilteredModelsList.length > 0 && (
              <SC.SelectedOptionsNumber>
                {renderedFilteredModelsList.length}
              </SC.SelectedOptionsNumber>
            )}
            {title === "Trim" && renderedFilteredTrimsList.length > 0 && (
              <SC.SelectedOptionsNumber>
                {renderedFilteredTrimsList.length}
              </SC.SelectedOptionsNumber>
            )}
            {renderedFilteredMakesList.length > 0 && title === "Make" && (
              <ResetButton onClick={resetFilteredMakeList} />
            )}
            {renderedFilteredModelsList.length > 0 && title === "Model" && (
              <ResetButton onClick={resetFilteredModelList} />
            )}
            {renderedFilteredTrimsList.length > 0 && title === "Trim" && (
              <ResetButton onClick={resetFilteredTrimList} />
            )}
          </SC.TitleWrapper>
          <SC.ButtonIcon className="PriorityFilters">
            {!isOpenFilter ? (
              <MdKeyboardArrowDown size={"16px"} className="PriorityFilters" />
            ) : (
              <MdKeyboardArrowUp size={"16px"} className="PriorityFilters" />
            )}
          </SC.ButtonIcon>
        </SC.Button>
      ))}
      <SC.ListWrapper>
        {isOpenFilter && type === "Make" && (
          <PriorityFiltersList
            filteredTypesList={filteredMakesList}
            list={makesList}
            filteredList={renderedFilteredMakesList}
            resetListItem={resetMake}
            type={"Make"}
          />
        )}
        {isOpenFilter && type === "Model" && (
          <PriorityFiltersList
            filteredTypesList={filteredModelsList}
            list={modelsList}
            filteredList={renderedFilteredModelsList}
            resetListItem={resetModel}
            type={"Model"}
          />
        )}
        {isOpenFilter && type === "Trim" && (
          <PriorityFiltersList
            filteredTypesList={filteredTrimsList}
            list={trimsList}
            filteredList={renderedFilteredTrimsList}
            resetListItem={resetTrim}
            type={"Trim"}
          />
        )}
      </SC.ListWrapper>
    </SC.Wrapper>
  );
};
