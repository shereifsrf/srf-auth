/**
 * Components Entry Point
 * Exports all UI components (headless and styled variants)
 *
 * Components are organized using atomic design:
 * - Atoms: Basic building blocks (Button, Input, Label, etc.)
 * - Molecules: Simple combinations (OAuthButton, FormField, etc.)
 * - Organisms: Complex components (AuthCard, etc.)
 */

// Export all components and types from atoms, molecules, and organisms
export * from "./atoms";
export * from "./molecules";
export * from "./organisms";

// For convenience, also export styled components as default imports
// Users can import like: import Button from '@shereifsrf/srf-auth/components'
export { default as Button } from "./atoms/Button";
export { default as Input } from "./atoms/Input";
export { default as Label } from "./atoms/Label";
export { default as LoadingSpinner } from "./atoms/LoadingSpinner";
export { default as ErrorMessage } from "./atoms/ErrorMessage";
export { default as AuthDivider } from "./atoms/AuthDivider";
export { default as ThemeSwitch } from "./atoms/ThemeSwitch";
export { default as PasswordInput } from "./atoms/PasswordInput";
export { default as OAuthButton } from "./molecules/OAuthButton";
export { default as FormField } from "./molecules/FormField";
export { default as AuthCard } from "./organisms/AuthCard";
