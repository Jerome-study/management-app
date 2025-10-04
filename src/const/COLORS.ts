export const appColors = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  text: "var(--color-text)",
  surface: "var(--color-surface)",
  background: "var(--color-background)",
  border: "var(--color-border)",
  danger: "var(--color-danger)",
  success: "var(--color-success)",
  warning: "var(--color-warning)",
  info: "var(--color-info)",
} as const;

export type AppColor = keyof typeof appColors;
