import React from "react";
import { CaretDown, Funnel } from "phosphor-react";
import {
  ViewFiltersContainer,
  FilterButton,
  FilterButtonText,
  FilterInfo,
} from "./styles";

interface FilterProps {
  onClick?: () => void;
}

export const Filter: React.FC<FilterProps> = ({ onClick }) => {
  return (
    <ViewFiltersContainer>
      <FilterButton onClick={onClick}>
        <FilterInfo>
          <Funnel size={16} color="#6b7280" />
          <FilterButtonText>Filter</FilterButtonText>
        </FilterInfo>
        <CaretDown size={16} color="#6b7280" />
      </FilterButton>
    </ViewFiltersContainer>
  );
};

export default Filter;
