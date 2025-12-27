import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Input error state */
  hasError?: boolean;
  /** Full width */
  fullWidth?: boolean;
}

/**
 * Headless Input component - provides input functionality without styling.
 * Use this as a base for custom-styled inputs or when you need full control over styling.
 * Export as named export for headless usage.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ hasError = false, fullWidth = false, className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        data-error={hasError}
        data-full-width={fullWidth}
        aria-invalid={hasError}
        className={className}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

/**
 * Styled Input component - uses DaisyUI input classes.
 * Based on the headless Input component with DaisyUI styling.
 * Supports dark mode, error states, and full customization via className prop.
 * Export as default for styled usage.
 */
const StyledInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", hasError, fullWidth, ...props }, ref) => {
    const baseStyles = "input input-bordered";

    const errorStyles = hasError ? "input-error" : "";

    const widthStyles = fullWidth ? "w-full" : "";

    const combinedClassName =
      `${baseStyles} ${errorStyles} ${widthStyles} ${className}`.trim();

    return (
      <Input
        ref={ref}
        className={combinedClassName}
        hasError={hasError}
        fullWidth={fullWidth}
        {...props}
      />
    );
  },
);

StyledInput.displayName = "StyledInput";

export default StyledInput;
