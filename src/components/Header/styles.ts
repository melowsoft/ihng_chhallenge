import styled from "styled-components";

export const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  height: 64px;
  box-sizing: content-box;
  border-radius: 12px;
  height: 84px;
  gap: 20px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  background-color: #fff;
  flex: 1;
  height: 100%;
  border-radius: 12px;
  justify-content: space-between;
  padding: 0 18px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #fff;
  height: 100%;
  border-radius: 12px;
  padding: 0 18px;
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
`;

export const StatLabel = styled.span`
  color: #6b7280;
`;

export const StatValue = styled.span`
  font-weight: 600;
  color: #111827;
`;

export const CreateWebButton = styled.button`
  padding: 8px 16px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2563eb;
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: left;
  gap: 8px;
`;

export const ToggleLabel = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
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
  background-color: #e5e7eb;
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
    background-color: #3b82f6;
  }

  ${ToggleInput}:checked + &::before {
    transform: translateX(20px);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h5`
  font-size: 14px;
  color: #111827;
  font-weight: bold;
`;
export const Title = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin: 0;
`;

export const UserAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;
