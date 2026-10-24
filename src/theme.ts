import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const inter =
  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

const config = defineConfig({
  globalCss: {
    "html, body": {
      backgroundColor: "#f8faf9",
      color: "ink.800",
      fontFamily: "body",
    },
    "::selection": {
      backgroundColor: "brand.100",
      color: "brand.900",
    },
    ":focus-visible": {
      outline: "3px solid",
      outlineColor: "brand.400",
      outlineOffset: "2px",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: inter },
        body: { value: inter },
      },
      colors: {
        brand: {
          50: { value: "#e8f5e9" },
          100: { value: "#c8e6c9" },
          200: { value: "#a5d6a7" },
          300: { value: "#81c784" },
          400: { value: "#4caf50" },
          500: { value: "#2e7d32" },
          600: { value: "#256428" },
          700: { value: "#1b5e20" },
          800: { value: "#14471a" },
          900: { value: "#0d2f12" },
        },
        accent: {
          50: { value: "#f3e5f5" },
          100: { value: "#e1bee7" },
          200: { value: "#ce93d8" },
          300: { value: "#ba68c8" },
          400: { value: "#ab47bc" },
          500: { value: "#8e24aa" },
          600: { value: "#7b1fa2" },
          700: { value: "#6a1b9a" },
          800: { value: "#4a148c" },
          900: { value: "#38006b" },
        },
        ink: {
          50: { value: "#f8fafc" },
          100: { value: "#f1f5f9" },
          200: { value: "#e2e8f0" },
          300: { value: "#cbd5e1" },
          400: { value: "#94a3b8" },
          500: { value: "#64748b" },
          600: { value: "#475569" },
          700: { value: "#334155" },
          800: { value: "#1e293b" },
          900: { value: "#0b1220" },
        },
      },
      shadows: {
        card: {
          value:
            "0 1px 2px rgba(15, 23, 42, 0.04), 0 16px 40px -20px rgba(15, 23, 42, 0.18)",
        },
        cardHover: {
          value:
            "0 2px 6px rgba(15, 23, 42, 0.06), 0 28px 60px -24px rgba(15, 23, 42, 0.28)",
        },
        header: {
          value:
            "0 1px 0 rgba(15, 23, 42, 0.06), 0 12px 32px -24px rgba(15, 23, 42, 0.35)",
        },
      },
    },
    recipes: {
      heading: {
        base: {
          letterSpacing: "-0.025em",
        },
      },
      button: {
        base: {
          fontWeight: 600,
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
