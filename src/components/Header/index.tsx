// src/components/Header/index.tsx
import React from "react";
import {
  AppHeader,
  HeaderLeft,
  ConnectionStats,
  HeaderLeftFirstWrap,
  HeaderLeftSecondWrap,
  StatLabel,
  StatValue,
  HeaderRight,
  CreateWebButton,
  ToggleContainer,
  ToggleLabel,
  ToggleSwitch,
  ToggleInput,
  ToggleSlider,
  UserInfo,
  UserName,
  UserAvatar,
  Title,
  UserDetail,
  MobileHeaderContent,
  MobileToggleWrapper,
  StatItem,
} from "./styles";

interface HeaderProps {
  userName?: string;
  title?: string;
  userAvatar?: string;
  onCreateWeb: () => void;
  showConnections: boolean;
  showConnectionsOnMap: boolean;
  onToggleConnections: () => void;
  onToggleConnectionsOnMap: () => void;
}

const Header: React.FC<HeaderProps> = ({
  userName = "Emily Carter",
  title = "Cardiologist at NHOG",
  userAvatar,
  onCreateWeb,
  showConnections,
  showConnectionsOnMap,
  onToggleConnections,
  onToggleConnectionsOnMap,
}) => (
  <AppHeader>
    {/* Desktop Header */}
    <HeaderLeft>
      <UserInfo>
        <UserAvatar
          src={
            userAvatar ||
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
              userName
            )}`
          }
          alt={userName}
        />
        <UserDetail>
          <UserName>{userName}</UserName>
          <Title>{title}</Title>
        </UserDetail>
      </UserInfo>

      <HeaderLeftFirstWrap>
        <ConnectionStats>
          <StatLabel>My Peers:</StatLabel>
          <StatValue>232</StatValue>
          <StatLabel>Following:</StatLabel>
          <StatValue>124</StatValue>
        </ConnectionStats>

        <CreateWebButton onClick={onCreateWeb}>Create Web</CreateWebButton>
      </HeaderLeftFirstWrap>
    </HeaderLeft>
    
    <HeaderRight>
      <HeaderLeftSecondWrap>
        <ToggleContainer>
          <ToggleSwitch>
            <ToggleInput
              checked={showConnections}
              onChange={onToggleConnections}
            />
            <ToggleSlider />
          </ToggleSwitch>
          <ToggleLabel>Show connections</ToggleLabel>
        </ToggleContainer>
        <ToggleContainer>
          <ToggleSwitch>
            <ToggleInput
              checked={showConnectionsOnMap}
              onChange={onToggleConnectionsOnMap}
            />
            <ToggleSlider />
          </ToggleSwitch>
          <ToggleLabel>Show my connections on map</ToggleLabel>
        </ToggleContainer>
      </HeaderLeftSecondWrap>
    </HeaderRight>

    {/* Mobile Header */}
    <MobileHeaderContent>
      <UserInfo>
        <UserAvatar
          src={
            userAvatar ||
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
              userName
            )}`
          }
          alt={userName}
        />
        <UserDetail>
          <UserName>{userName}</UserName>
          <Title>{title}</Title>
        </UserDetail>
      </UserInfo>

      <ConnectionStats>
        <StatItem>
          <StatLabel>Peers</StatLabel>
          <StatValue>232</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>Following</StatLabel>
          <StatValue>124</StatValue>
        </StatItem>
      </ConnectionStats>

      <CreateWebButton onClick={onCreateWeb}>Create Web</CreateWebButton>

      <MobileToggleWrapper>
        <ToggleContainer>
          <ToggleSwitch>
            <ToggleInput
              checked={showConnections}
              onChange={onToggleConnections}
            />
            <ToggleSlider />
          </ToggleSwitch>
          <ToggleLabel>Show connections</ToggleLabel>
        </ToggleContainer>
        <ToggleContainer>
          <ToggleSwitch>
            <ToggleInput
              checked={showConnectionsOnMap}
              onChange={onToggleConnectionsOnMap}
            />
            <ToggleSlider />
          </ToggleSwitch>
          <ToggleLabel>Show on map</ToggleLabel>
        </ToggleContainer>
      </MobileToggleWrapper>
    </MobileHeaderContent>
  </AppHeader>
);

export default Header;