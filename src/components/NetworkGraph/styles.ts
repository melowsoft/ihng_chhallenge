import styled from "styled-components";

export const NetworkGraphContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
  background: #f9fafb;
  border-radius: 12px;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 60vh; 
    min-height: 400px; 
    touch-action: none; 
    
    canvas {
      touch-action: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
`;