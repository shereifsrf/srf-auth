import React from "react";

export interface AuthDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Text to display in the divider */
  text?: string;
}

/**
 * Headless AuthDivider component - provides a divider with optional text without styling.
 * Commonly used to separate authentication methods (e.g., "Or continue with").
 * Export as named export for headless usage.
 */
export const AuthDivider = React.forwardRef<HTMLDivElement, AuthDividerProps>(
  ({ text = "Or continue with", className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-component="auth-divider"
        className={className}
        {...props}
      >
        <span data-component="auth-divider-text">{text}</span>
      </div>
    );
  },
);

AuthDivider.displayName = "AuthDivider";

/**
 * Styled AuthDivider component - horizontal divider with centered text.
 * Commonly used between email/password auth and OAuth buttons.
 * Features a line on each side with text in the middle.
 * Export as default for styled usage.
 */
const StyledAuthDivider = React.forwardRef<HTMLDivElement, AuthDividerProps>(
  ({ className = "", text = "Or continue with", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex items-center gap-4 my-6 ${className}`}
        data-component="auth-divider"
        {...props}
      >
        <div className="flex-1 h-px bg-base-300" />
        <span className="text-base-content/60 text-sm font-medium px-2">
          {text}
        </span>
        <div className="flex-1 h-px bg-base-300" />
      </div>
    );
  },
);

StyledAuthDivider.displayName = "StyledAuthDivider";

export default StyledAuthDivider;
