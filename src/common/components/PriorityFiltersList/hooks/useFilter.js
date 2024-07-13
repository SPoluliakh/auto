import { useRef, useState } from "react";

export const useFilter = (items, filteredItems, type) => {
  const clearButton = useRef();
  const [filter, setFilter] = useState("");
  const handleInputChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const renderList = [...filteredItems, ...items];
  // const renderMakesList = !type ? renderList.filter((item) =>
  //     item.name.toLowerCase().includes(filter.toLowerCase()))
  //     : renderList.flatMap((item) => Object.values(item.generations)).filter((item) =>
  //     item.toLowerCase().includes(filter.toLowerCase()))
  const renderMakesList =
    type !== "Trim"
      ? renderList.filter((item) =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
      : renderList
          .flatMap((item) => Object.values(item.generations).flat())
          .filter((item) => item.toLowerCase().includes(filter.toLowerCase()));

  const handleClearInput = () => {
    setFilter("");
    clearButton.current.focus();
  };

  return {
    filter,
    handleInputChange,
    renderMakesList,
    handleClearInput,
    clearButton,
  };
};
