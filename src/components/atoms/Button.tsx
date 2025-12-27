import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  /** Button size */
  size?: "sm" | "md" | "lg";
  /** Loading state */
  isLoading?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Icon before text */
  startIcon?: React.ReactNode;
  /** Icon after text */
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Headless Button component - provides button functionality without styling.
 * Use this as a base for custom-styled buttons or when you need full control over styling.
 * Export as named export for headless usage.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      fullWidth = false,
      startIcon,
      endIcon,
      disabled,
      children,
      type = "button",
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        data-variant={variant}
        data-size={size}
        data-loading={isLoading}
        data-full-width={fullWidth}
        aria-busy={isLoading}
        className={className}
        {...props}
      >
        {isLoading ? (
          <span aria-label="Loading">...</span>
        ) : (
          <>
            {startIcon && <span data-slot="start-icon">{startIcon}</span>}
            {children && <span data-slot="text">{children}</span>}
            {endIcon && <span data-slot="end-icon">{endIcon}</span>}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

/**
 * Styled Button component - uses DaisyUI button classes.
 * Based on the headless Button component with DaisyUI styling.
 * Supports dark mode and full customization via className prop.
 * Export as default for styled usage.
 */
const StyledButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", ...props }, ref) => {
    const baseStyles = "btn";

    const variantStyles = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      outline: "btn-outline btn-primary",
      ghost: "btn-ghost",
      danger: "btn-error",
    };

    const sizeStyles = {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    };

    const variant = props.variant || "primary";
    const size = props.size || "md";
    const fullWidth = props.fullWidth ? "btn-block" : "";

    const combinedClassName =
      `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth} ${className}`.trim();

    return <Button ref={ref} className={combinedClassName} {...props} />;
  },
);

StyledButton.displayName = "StyledButton";

export default StyledButton;
