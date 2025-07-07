import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
  background: transparent;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchIcon = styled.svg`
  position: absolute;
  left: 12px;
  pointer-events: none;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 8px 10px 40px;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  font-size: 12px;
  transition: all 0.2s ease;
  background-color: #FFFFFF;

  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px #EFF6FF;
  }

  &::placeholder {
    color: #6B7280;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #6B7280;
  transition: color 0.2s ease;

  &:hover {
    color: #111827;
  }
`;

export const SearchDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 300px;
  overflow-y: auto;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
  margin-top: 4px;
`;

export const SearchResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #F3F4F6;
  }
`;

export const ResultAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
  border: 1px solid #E5E7EB;
`;

export const ResultInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ResultName = styled.div`
  font-weight: 500;
  color: #111827;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ResultDetails = styled.div`
  font-size: 12px;
  color: #6B7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;