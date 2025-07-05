import styled from "styled-components";

// Design system constants
const colors = {
  white: "#FFFFFF",
  gray100: "#F9FAFB",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray700: "#374151",
  gray900: "#111827",
};

const spacing = {
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.25rem", // 20px
  xl: "1.5rem", // 24px
};

const radii = {
  md: "0.5rem", // 8px
};

const fontSizes = {
  sm: "0.875rem", // 14px
};

// Layout components
export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  justify-content: space-between;
  padding: 40px;
  gap: 20px;
`;

export const AppBody = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

export const AppMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

// Header components
export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.lg} ${spacing.xl};
  background: ${colors.white};
  border-bottom: 1px solid ${colors.gray200};
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const ViewFilters = styled.div`
  display: flex;
  gap: 0.75rem; // 12px
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  padding: ${spacing.sm} ${spacing.md};
  background: ${colors.white};
  border: 1px solid ${colors.gray200};
  border-radius: ${radii.md};
  font-size: ${fontSizes.sm};
  color: ${colors.gray700};
  cursor: pointer;
  transition: all 150ms ease-in-out;
  white-space: nowrap;

  &:hover {
    background: ${colors.gray100};
    border-color: ${colors.gray300};
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${colors.gray700};
    outline-offset: 2px;
  }
`;

// Graph components
export const GraphContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  background: ${colors.gray100};
`;

export const LinkTooltip = styled.div`
  position: fixed;
  bottom: ${spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  background: rgba(31, 41, 55, 0.9);
  color: ${colors.white};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${radii.md};
  font-size: ${fontSizes.sm};
  pointer-events: none;
  z-index: 100;
  backdrop-filter: blur(4px);
  max-width: 90%;
  text-align: center;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  gap: 15px;
`;
