import { useSelector } from "react-redux";
import { ResetButton } from "../../../../common/components/ResetButton/ResetButton";
import { getFilteredTrimsList } from "../../../../redux/filters/trims";
import * as SC from "./PriorityElement.styled";

export const PriorityElement = ({
  filteredList,
  resetListItem,
  item,
  uniqueMakesList,
  type,
}) => {
  if (type) {
    const filteredTrimsList = useSelector(getFilteredTrimsList);
    const value = filteredTrimsList.find((item) => item.model === item);
  }

  return (
    <SC.ListItem
      // isSelected={filteredList.includes(item) ? true : false}
      isSelected={
        type !== "Trim"
          ? filteredList.find((value) => value.name === item.name)
          : filteredList.find((value) => value.model === item.model)
      }
      onClick={() =>
        type !== "Trim" ? uniqueMakesList(item) : uniqueMakesList(value)
      }
      className="PriorityFilters"
    >
      {type !== "Trim" ? item.name : item}
      {type !== "Trim" &&
        filteredList.find((value) => value.name === item.name) && (
          <ResetButton onClick={resetListItem} filtersList={true} item={item} />
        )}
      {type === "Trim" &&
        filteredList.find((value) => value.model === item.model) && (
          <ResetButton onClick={resetListItem} filtersList={true} item={item} />
        )}
    </SC.ListItem>
  );
};
