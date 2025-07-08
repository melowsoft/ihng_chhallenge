export const theme = {
  colors: {
    // Primary colors
    primary: "#3B82F6",
    primaryLight: "#EBF5FF",
    primaryDark: "#2563EB",
    
    // Grayscale
    white: "#FFFFFF",
    gray50: "#F9FAFB",
    gray100: "#F3F4F6",
    gray200: "#E5E7EB",
    gray300: "#D1D5DB",
    gray400: "#9CA3AF",
    gray500: "#6B7280",
    gray600: "#4B5563",
    gray700: "#374151",
    gray800: "#1F2937",
    gray900: "#111827",
    
    // Status colors
    success: "#10B981",
    error: "#EF4444",
    warning: "#F59E0B",
    
    // Semantic colors
    border: "#E5E7EB",
    hoverBg: "#F3F4F6",
    tooltipBg: "rgba(31, 41, 55, 0.9)",
  },
  
  spacing: {
    px: "1px",
    0: "0",
    0.5: "0.125rem", // 2px
    1: "0.25rem",    // 4px
    1.5: "0.375rem", // 6px
    2: "0.5rem",     // 8px
    2.5: "0.625rem", // 10px
    3: "0.75rem",    // 12px
    4: "1rem",       // 16px
    5: "1.25rem",    // 20px
    6: "1.5rem",     // 24px
    8: "2rem",       // 32px
    10: "2.5rem",    // 40px
    12: "3rem",      // 48px
    16: "4rem",      // 64px
    20: "5rem",      // 80px
    24: "6rem",      // 96px
    32: "8rem",      // 128px
    40: "10rem",     // 160px
    48: "12rem",     // 192px
    56: "14rem",     // 224px
    64: "16rem",     // 256px
  },
  
  radii: {
    none: "0",
    sm: "0.125rem",  // 2px
    md: "0.375rem",  // 6px
    lg: "0.5rem",    // 8px
    xl: "0.75rem",   // 12px
    "2xl": "1rem",   // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },
  
  fontSizes: {
    xs: "0.75rem",   // 12px
    sm: "0.875rem",  // 14px
    base: "1rem",    // 16px
    lg: "1.125rem",  // 18px
    xl: "1.25rem",   // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem",  // 36px
    "5xl": "3rem",     // 48px
  },
  
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none",
  },
  
  zIndices: {
    auto: "auto",
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
    100: "100",
  },
  
  transitions: {
    DEFAULT: "all 150ms ease-in-out",
    fast: "all 100ms ease-in-out",
    slow: "all 300ms ease-in-out",
  },
  
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

export type Theme = typeof theme;