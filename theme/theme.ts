export const theme = {
  colors: {
    // Brand
    primary: "#E85D75",
    primaryHover: "#C9435D",
    primarySoft: "#FFE6EC",

    // Backgrounds
    background: "#FFF9F7",
    surface: "#FFFFFF",
    surfaceSoft: "#FFFFFFCC",

    // Text
    text: "#302A3D",
    textSecondary: "#6E6575",
    textMuted: "#9B929F",
    textLight: "#E9DCE3",

    // Borders
    border: "#F0E6E8",
    borderStrong: "#E6D9DD",
    divider: "#D5C6CC",

    // Accent palette
    peach: "#FFF0E7",
    peachStrong: "#F28C6B",

    yellow: "#FFF7D6",
    yellowStrong: "#F2C94C",

    lavender: "#F1EBFF",
    lavenderStrong: "#8B76D8",

    mint: "#EAF8EF",

    blue: "#71B7E6",
  },

  radius: {
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    xxl: "28px",
    xxxl: "30px",
    full: "9999px",
  },

  shadows: {
    soft: "0 8px 20px rgba(48, 42, 61, 0.08)",
    card: "0 12px 30px rgba(48, 42, 61, 0.08)",
    medium: "0 15px 35px rgba(48, 42, 61, 0.10)",
    large: "0 20px 60px rgba(48, 42, 61, 0.07)",
    photo: "0 30px 80px rgba(48, 42, 61, 0.15)",
    book: "0 25px 55px rgba(48, 42, 61, 0.22)",

    primary: "0 8px 22px rgba(232, 93, 117, 0.22)",
    primaryHover: "0 12px 28px rgba(232, 93, 117, 0.28)",
  },

  typography: {
    sans: "Inter, sans-serif",
    serif: "Georgia, serif",
  },

  layout: {
    maxWidth: "1280px",
    headerHeight: "68px",
  },

  animation: {
    fast: "200ms",
    normal: "300ms",
    slow: "500ms",
  },
} as const;

export type Theme = typeof theme;