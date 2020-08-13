import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import { HEADER_HEIGHT, COLORS } from "./constants";
import Loading from "./components/Loading";

const Typeahead = () => {
  const [value, setValue] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const status = useSelector((state) => state.itemsReducer.status);
  const items = useSelector((state) => state.itemsReducer.items);

  let history = useHistory();

  const handleSelect = (suggestion) => {
    history.push(`items/${suggestion}`);
  };

  let filteredSuggestions;

  if (status === "ready") {
    filteredSuggestions = items.items
      .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 8);
  }

  const getMapppedSuggestions = () => {
    if (value !== "" && value.length >= 2) {
      const mappedSuggestions = filteredSuggestions.map((item, index) => {
        let itemName = item.name;
        let firstHalf = itemName.slice(
          0,
          itemName.toLowerCase().indexOf(value) + value.length
        );
        let secondHalf = itemName.slice(firstHalf.length, itemName.length);

        let isSelected = false;
        if (selectedItemIndex === index) {
          isSelected = true;
        }
        return (
          <SearchItem
            key={item._id}
            style={{
              background: isSelected ? COLORS.primary : "transparent",
            }}
            onMouseEnter={() => setSelectedItemIndex(index)}
            onClick={() => handleSelect(item._id)}
          >
            <SearchedResult>
              {firstHalf}
              <RemainingText>{secondHalf}</RemainingText>
            </SearchedResult>
          </SearchItem>
        );
      });
      return mappedSuggestions;
    }
  };
  return (
    <>
      {status === "ready" ? (
        <Wrapper>
          <SearchBar
            type="text"
            value={value || ""}
            onChange={(ev) => setValue(ev.target.value)}
            onKeyDown={(ev) => {
              switch (ev.key) {
                case "Enter": {
                  handleSelect(filteredSuggestions[selectedItemIndex]._id);
                  return;
                }
                case "ArrowUp": {
                  if (selectedItemIndex > 0) {
                    setSelectedItemIndex(selectedItemIndex - 1);
                  }
                  break;
                }
                case "ArrowDown": {
                  if (selectedItemIndex < filteredSuggestions.length - 1) {
                    setSelectedItemIndex(selectedItemIndex + 1);
                  }
                  break;
                }
              }
            }}
          />
          <SearchList>{getMapppedSuggestions()}</SearchList>
        </Wrapper>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Typeahead;

const Wrapper = styled.div`
  position: absolute;
  top: ${HEADER_HEIGHT};
  padding: 30px;
`;

const SearchBar = styled.input`
  padding: 5px 3px;
  width: 550px;
  font-size: 18px;
`;

const SearchList = styled.ul`
  box-shadow: 1px 10px 26px -8px rgba(0, 0, 0, 0.75);
  border-radius: 7px;
  width: 385px;
`;

const SearchItem = styled.li`
  margin: 10px;
  padding: 10px;
  display: flex;
  &:hover {
    background-color: ${COLORS.primary};
    color: white;
    cursor: pointer;
  }
`;

const SearchedResult = styled.span``;

const RemainingText = styled.span`
  font-weight: bold;
`;
