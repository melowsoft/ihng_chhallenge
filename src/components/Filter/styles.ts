import styled from "styled-components";

export const ViewFiltersContainer = styled.div`
display: inline-block;
width: 25%;

@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing[4]};
}
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background: none;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  justify-content: space-between;


  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }

  &:active {
    background-color: #f3f4f6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #eff6ff;
    border-color: #3b82f6;
  }
`;

export const FilterButtonText = styled.span`
  line-height: 1;
`;

export const FilterInfo = styled.div`
 display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;
