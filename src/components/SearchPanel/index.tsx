import React, { useState, useEffect, useRef } from "react";
import {
  SearchBarContainer,
  SearchInputWrapper,
  SearchIcon,
  SearchInput,
  ClearButton,
  SearchDropdown,
  SearchResultItem,
  ResultAvatar,
  ResultInfo,
  ResultName,
  ResultDetails,
} from "./styles";
import { HCP } from "../../types/network.types";

interface SearchPanelProps {
  hcps: HCP[];
  onSearch: (hcp: HCP | null) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ hcps, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState<HCP[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchTerm.trim()) {
      const results = hcps.filter(
        (hcp) =>
          hcp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hcp.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hcp.organization?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(results);
      setShowDropdown(true);
    } else {
      setFilteredResults([]);
      setShowDropdown(false);
    }
  }, [searchTerm, hcps]);

  const handleSelect = (hcp: HCP) => {
    setSearchTerm(hcp.name);
    setShowDropdown(false);
    onSearch(hcp);
    // Blur the input to close the dropdown
    if (searchInputRef.current) {
      searchInputRef.current.blur();
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    setShowDropdown(false);
    onSearch(null);
    // Focus back on the input after clear
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleInputBlur = () => {
    // Use setTimeout to allow click events to fire before closing
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <SearchBarContainer>
      <SearchInputWrapper>
        <SearchIcon width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 19L14.65 14.65"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </SearchIcon>
        <SearchInput
          ref={searchInputRef}
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => searchTerm && setShowDropdown(true)}
          onBlur={handleInputBlur}
        />
        {searchTerm && (
          <ClearButton onClick={handleClear}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ClearButton>
        )}
      </SearchInputWrapper>

      {showDropdown && filteredResults.length > 0 && (
        <SearchDropdown>
          {filteredResults.map((hcp) => (
            <SearchResultItem
              key={hcp.id}
              onClick={() => handleSelect(hcp)}
              onMouseDown={(e) => e.preventDefault()} // Prevent input blur before click
            >
              <ResultAvatar
                src={
                  hcp.profileImage ||
                  `https://api.dicebear.com/7.x/avataaars/svg?seed=${hcp.id}`
                }
                alt={hcp.name}
              />
              <ResultInfo>
                <ResultName>{hcp.name}</ResultName>
                <ResultDetails>
                  {hcp.title} • {hcp.organization}
                </ResultDetails>
              </ResultInfo>
            </SearchResultItem>
          ))}
        </SearchDropdown>
      )}
    </SearchBarContainer>
  );
};

export default SearchPanel;
