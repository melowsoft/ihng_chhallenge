import styled from "styled-components";

export const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  box-sizing: content-box;
  border-radius: 12px;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[3]};
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing[3]};
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
  height: 100%;
  border-radius: 12px;
  justify-content: space-between;
  padding: 0 18px;
  box-sizing: content-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  border-radius: 12px;
  padding: 0 18px;
  box-sizing: content-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileHeaderContent = styled.div`
  display: none;
  width: 100%;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const MobileToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`;

export const HeaderLeftFirstWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 10px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;
export const HeaderLeftSecondWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ConnectionStats = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing[2]} 0;
    border-top: 1px solid ${({ theme }) => theme.colors.gray200};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const StatLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const StatValue = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: ${({ theme }) => theme.fontSizes.base};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const CreateWebButton = styled.button`
  padding: 8px 14px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: left;
  gap: 8px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const ToggleLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray500};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray700};
  }
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40px;
    height: 20px;
  }
`;

export const ToggleInput = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.gray200};
  transition: 0.2s;
  border-radius: 24px;

  &::before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }

  ${ToggleInput}:checked + & {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ${ToggleInput}:checked + &::before {
    transform: translateX(20px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &::before {
      height: 14px;
      width: 14px;
      left: 3px;
      bottom: 3px;
    }

    ${ToggleInput}:checked + &::before {
      transform: translateX(18px);
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    
  }
`;

export const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h5`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray900};
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;
export const Title = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray500};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const UserAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
  }
`;
