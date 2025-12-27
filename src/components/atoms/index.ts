/**
 * Atoms Index
 * Export all atomic components (both headless and styled)
 */

// Atoms
export { Button, default as StyledButton } from "./Button";
export { Input, default as StyledInput } from "./Input";
export { Label, default as StyledLabel } from "./Label";
export {
  LoadingSpinner,
  default as StyledLoadingSpinner,
} from "./LoadingSpinner";
export { ErrorMessage, default as StyledErrorMessage } from "./ErrorMessage";
export { AuthDivider, default as StyledAuthDivider } from "./AuthDivider";
export { ThemeSwitch, default as StyledThemeSwitch } from "./ThemeSwitch";
export {
  PasswordInput,
  default as StyledPasswordInput,
  calculatePasswordStrength,
} from "./PasswordInput";

// Export types
export type { ButtonProps } from "./Button";
export type { InputProps } from "./Input";
export type { LabelProps } from "./Label";
export type { LoadingSpinnerProps } from "./LoadingSpinner";
export type { ErrorMessageProps } from "./ErrorMessage";
export type { AuthDividerProps } from "./AuthDivider";
export type { ThemeSwitchProps } from "./ThemeSwitch";
export type { PasswordInputProps, PasswordStrength } from "./PasswordInput";
