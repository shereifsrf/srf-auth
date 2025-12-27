import React from "react";

export type OAuthProvider =
  | "google"
  | "github"
  | "facebook"
  | "apple"
  | "twitter"
  | "microsoft";

export interface OAuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** OAuth provider */
  provider: OAuthProvider;
  /** Button size */
  size?: "sm" | "md" | "lg";
  /** Loading state */
  isLoading?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Custom icon */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Headless OAuthButton component - provides OAuth button functionality without styling.
 * Use this as a base for custom-styled OAuth buttons or when you need full control over styling.
 * Export as named export for headless usage.
 */
export const OAuthButton = React.forwardRef<
  HTMLButtonElement,
  OAuthButtonProps
>(
  (
    {
      provider,
      size = "md",
      isLoading = false,
      fullWidth = false,
      icon,
      disabled,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const defaultLabels: Record<OAuthProvider, string> = {
      google: "Continue with Google",
      github: "Continue with GitHub",
      facebook: "Continue with Facebook",
      apple: "Continue with Apple",
      twitter: "Continue with Twitter",
      microsoft: "Continue with Microsoft",
    };

    const label = children || defaultLabels[provider];

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        data-provider={provider}
        data-size={size}
        data-loading={isLoading}
        data-full-width={fullWidth}
        aria-busy={isLoading}
        aria-label={`Sign in with ${provider}`}
        {...props}
      >
        {isLoading ? (
          <span data-slot="loading">Loading...</span>
        ) : (
          <>
            {icon && <span data-slot="icon">{icon}</span>}
            <span data-slot="label">{label}</span>
          </>
        )}
      </button>
    );
  },
);

OAuthButton.displayName = "OAuthButton";

// ============================================================================
// Styled Component
// ============================================================================

export interface StyledOAuthButtonProps extends OAuthButtonProps {
  className?: string;
}

// Default provider icons (using emoji for simplicity, can be replaced with actual icons)
const providerIcons: Record<OAuthProvider, string> = {
  google: "🔍",
  github: "🐙",
  facebook: "📘",
  apple: "🍎",
  twitter: "🐦",
  microsoft: "🪟",
};

// Provider-specific DaisyUI button variants
const providerColors: Record<OAuthProvider, string> = {
  google: "btn-outline",
  github: "btn-neutral",
  facebook: "btn-info",
  apple: "btn-neutral",
  twitter: "btn-info",
  microsoft: "btn-neutral",
};

/**
 * Styled OAuthButton component - uses DaisyUI button classes.
 * Based on the headless OAuthButton component with DaisyUI styling.
 * Supports dark mode and provider-specific branding colors.
 * Export as default export for styled usage.
 */
const StyledOAuthButton = React.forwardRef<
  HTMLButtonElement,
  StyledOAuthButtonProps
>(
  (
    { className = "", provider, icon, size = "md", fullWidth, ...props },
    ref,
  ) => {
    const baseStyles = "btn gap-2";

    const sizeStyles = {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    };

    const widthStyles = fullWidth ? "btn-block" : "";
    const providerColor = providerColors[provider];

    const combinedClassName =
      `${baseStyles} ${providerColor} ${sizeStyles[size]} ${widthStyles} ${className}`.trim();

    const defaultIcon = icon || <span>{providerIcons[provider]}</span>;

    return (
      <OAuthButton
        ref={ref}
        className={combinedClassName}
        provider={provider}
        icon={defaultIcon}
        size={size}
        fullWidth={fullWidth}
        {...props}
      />
    );
  },
);

StyledOAuthButton.displayName = "StyledOAuthButton";

export default StyledOAuthButton;
