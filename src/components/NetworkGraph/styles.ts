// src/components/NetworkGraph/styles.ts
import styled from "styled-components";

export const NetworkGraphContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
  background: #f9fafb;
  border-radius: 12px;
  overflow: hidden;
  
  // Mobile-specific styles
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 60vh; // Set a fixed height for mobile
    min-height: 400px; // Ensure it's not too small
    touch-action: none; // Prevent browser touch gestures from interfering
    
    canvas {
      // Improve touch responsiveness
      touch-action: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
`;