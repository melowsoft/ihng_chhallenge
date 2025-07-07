import styled from "styled-components";

// Design system constants
const itemSize = "2.6rem"; // 48px
const spacing = {
  sm: "0.5rem", // 8px
  base: "1.25rem", // 20px
};
const colors = {
  primary: "#3B82F6",
  primaryLight: "#EBF5FF",
  border: "#E5E7EB",
  hoverBg: "#F3F4F6",
  white: "#FFFFFF",
};

const fontSizes = {
  lg: "1.25rem", // 20px
};

// Styled components
export const SidebarContainer = styled.aside`
  width: 40px;
  max-height: 90vh;
  background: ${colors.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.sm};
  z-index: 10;
  box-sizing: content-box;
  padding: 10px;
  border: none;
  padding-bottom: 20px;
`;

export const MenuButton = styled.button<{ active: boolean }>`
  width: ${itemSize};
  height: ${itemSize};
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  position: relative;
  color: ${({ active }) => (active ? colors.primary : "inherit")};

  &:hover {
    background: ${colors.hoverBg};
  }

  ${({ active }) =>
    active &&
    `
    border: 1px solid #eee;

    &::before {
      content: '';
      position: absolute;
      left: -1.25rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0.25rem;
      height: 1.5rem;
       
    }
  `}
`;

export const MenuIcon = styled.span`
  font-size: ${fontSizes.lg};
`;

export const SidebarLogo = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: ${spacing.sm};
  cursor: pointer;
`;

export const ExitButton = styled.button``;

export const MenuItemsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
`;

export const SidebarBottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;
