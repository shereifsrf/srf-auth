import React from "react";

export interface LoadingSpinnerProps {
  /** Spinner size */
  size?: "sm" | "md" | "lg";
  /** Accessible label */
  label?: string;
  /** Additional className */
  className?: string;
}

/**
 * Headless LoadingSpinner component - provides loading spinner functionality without styling.
 * Use this as a base for custom-styled spinners or when you need full control over styling.
 * Export as named export for headless usage.
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  label = "Loading...",
  className = "",
}) => {
  return (
    <div
      role="status"
      data-size={size}
      aria-label={label}
      className={className}
    >
      <svg
        data-slot="spinner"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          strokeOpacity="0.25"
        />
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 1 10 10h-4a6 6 0 0 0-6-6V2z"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
};

LoadingSpinner.displayName = "LoadingSpinner";

/**
 * Styled LoadingSpinner component - uses DaisyUI loading classes.
 * Based on the headless LoadingSpinner component with DaisyUI styling.
 * Supports dark mode and different sizes.
 * Export as default for styled usage.
 */
const StyledLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  className = "",
  size = "md",
  ...props
}) => {
  const sizeStyles = {
    sm: "loading-sm",
    md: "loading-md",
    lg: "loading-lg",
  };

  const baseStyles = "loading loading-spinner text-primary";

  const combinedClassName =
    `${baseStyles} ${sizeStyles[size]} ${className}`.trim();

  return (
    <span className={combinedClassName} role="status" aria-label="Loading">
      <LoadingSpinner size={size} {...props} />
    </span>
  );
};

StyledLoadingSpinner.displayName = "StyledLoadingSpinner";

export default StyledLoadingSpinner;
