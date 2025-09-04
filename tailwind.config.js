/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        text: "var(--color-text)",
        surface: "var(--color-surface)",
        background: "var(--color-background)",
        border: "var(--color-border)",
        danger: "var(--color-danger)",
        success: "var(--color-success)",
        warning: "var(--color-warning)", // 🟡 NEW
      },
      borderRadius: {
        none: "var(--radius-none)",
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ":root": {
          /* 🌞 General Light Mode Tokens */
          "--color-primary": "#6366F1" /* Indigo 500 */,
          "--color-text": "#1F2937" /* Gray 800 */,
          "--color-surface": "#FFFFFF" /* White */,
          "--color-background": "#F9FAFB" /* Gray 50 */,
          "--color-border": "#E5E7EB" /* Gray 200 */,
          "--color-danger": "#EF4444" /* Red 500 */,
          "--color-success": "#10B981" /* Green 500 */,
          "--color-warning": "#F59E0B" /* Amber 500 */,

          /* Border Radius */
          "--radius-xs": "4px",
          "--radius-sm": "6px",
          "--radius-md": "8px",
          "--radius-lg": "12px",
          "--radius-xl": "16px",
          "--radius-full": "9999px",
        },

        ".dark": {
          /* 🌙 General Dark Mode Tokens */
          "--color-primary": "#818CF8" /* Indigo 400 */,
          "--color-text": "#F3F4F6" /* Gray 100 */,
          "--color-surface": "#1F2937" /* Gray 800 */,
          "--color-background": "#111827" /* Gray 900 */,
          "--color-border": "#374151" /* Gray 700 */,
          "--color-danger": "#F87171" /* Red 400 */,
          "--color-success": "#34D399" /* Green 400 */,
          "--color-warning": "#FBBF24" /* Amber 400 */,
        },
      });
    }),
  ],
};
