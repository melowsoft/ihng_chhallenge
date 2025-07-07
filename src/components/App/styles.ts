// src/components/App/styles.ts
import styled from "styled-components";
import { theme } from "../../styles";

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[10]};
  gap: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.colors.gray50};
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  height: 60px;
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing[2]};
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const GraphContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gray100};
  display: flex;
  border-radius: ${({ theme }) => theme.radii.xl};
`;

export const LinkTooltip = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing[6]};
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.tooltipBg};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  pointer-events: none;
  z-index: ${({ theme }) => theme.zIndices[100]};
  backdrop-filter: blur(4px);
  max-width: 90%;
  text-align: center;
`;