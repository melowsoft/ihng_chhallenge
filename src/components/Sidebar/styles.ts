// src/components/Sidebar/styles.ts
import styled, { css } from "styled-components";

const itemSize = "2.6rem"; // 48px

export const SidebarContainer = styled.aside`
  width: 40px;
  max-height: 90vh;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  z-index: ${({ theme }) => theme.zIndices[10]};
  box-sizing: content-box;
  padding: 10px;
  border: none;
  padding-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: ${({ theme }) => theme.spacing[4]};
  left: ${({ theme }) => theme.spacing[4]};
  width: ${itemSize};
  height: ${itemSize};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.md};
  border: none;
  z-index: ${({ theme }) => theme.zIndices[20]};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const MobileSidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${({ theme }) => theme.zIndices[30]};
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const SidebarLogo = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
`;

export const MobileSidebarContent = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 260px;
  background: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndices[40]};
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;
  padding: ${({ theme }) => theme.spacing[4]};
  display: none;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }

  ${SidebarLogo} {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }
`;

export const MenuButton = styled.button<{ active: boolean }>`
  width: ${itemSize};
  height: ${itemSize};
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: all 150ms ease-in-out;
  position: relative;
  color: ${({ active, theme }) => (active ? theme.colors.primary : "inherit")};

  &:hover {
    background: ${({ theme }) => theme.colors.gray100};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    justify-content: flex-start;
    padding: ${({ theme }) => theme.spacing[3]};
    gap: ${({ theme }) => theme.spacing[3]};
    color: ${({ theme }) => theme.colors.gray700};

    span {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.gray50};
    }
  }
`;

export const MenuIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const ExitButton = styled.button`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[3]};
    color: ${({ theme }) => theme.colors.gray700};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.gray50};
    }
  }
`;

export const MenuItemsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    gap: ${({ theme }) => theme.spacing[1]};
  }
`;

export const SidebarBottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    margin-top: auto;
  }
`;