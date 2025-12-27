import React from "react";

export interface ErrorMessageProps {
  /** Error message text */
  message?: string;
  /** Error type */
  variant?: "error" | "warning" | "info";
  children?: React.ReactNode;
  /** Additional className */
  className?: string;
}

/**
 * Headless ErrorMessage component - provides error message functionality without styling.
 * Use this as a base for custom-styled error messages or when you need full control over styling.
 * Export as named export for headless usage.
 */
export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  variant = "error",
  children,
  className = "",
}) => {
  const content = children || message;

  if (!content) return null;

  return (
    <div role="alert" data-variant={variant} className={className}>
      {content}
    </div>
  );
};

ErrorMessage.displayName = "ErrorMessage";

/**
 * Styled ErrorMessage component - uses DaisyUI alert classes.
 * Based on the headless ErrorMessage component with DaisyUI styling.
 * Supports dark mode and different message variants (error, warning, info).
 * Export as default for styled usage.
 */
const StyledErrorMessage: React.FC<ErrorMessageProps> = ({
  className = "",
  variant = "error",
  ...props
}) => {
  const baseStyles = "text-sm mt-1.5";

  const variantStyles = {
    error: "text-error",
    warning: "text-warning",
    info: "text-info",
  };

  const combinedClassName =
    `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  return (
    <div className={combinedClassName} role="alert">
      <ErrorMessage variant={variant} {...props} />
    </div>
  );
};

StyledErrorMessage.displayName = "StyledErrorMessage";

export default StyledErrorMessage;
