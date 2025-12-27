import React from "react";

export interface AuthCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card title */
  title?: string;
  /** Card subtitle or description */
  subtitle?: string;
  /** Footer content */
  footer?: React.ReactNode;
  /** Children content */
  children: React.ReactNode;
}

/**
 * Headless AuthCard component - provides authentication card container without styling.
 * Use this as a base for custom-styled auth cards.
 * Export as named export for headless usage.
 */
export const AuthCard = React.forwardRef<HTMLDivElement, AuthCardProps>(
  ({ title, subtitle, footer, children, ...props }, ref) => {
    return (
      <div ref={ref} data-component="auth-card" {...props}>
        {(title || subtitle) && (
          <div data-component="auth-card-header">
            {title && <h2 data-component="auth-card-title">{title}</h2>}
            {subtitle && <p data-component="auth-card-subtitle">{subtitle}</p>}
          </div>
        )}
        <div data-component="auth-card-content">{children}</div>
        {footer && <div data-component="auth-card-footer">{footer}</div>}
      </div>
    );
  },
);

AuthCard.displayName = "AuthCard";

// ============================================================================
// Styled Component
// ============================================================================

export interface StyledAuthCardProps extends AuthCardProps {
  className?: string;
}

/**
 * Styled AuthCard component - modern authentication card with DaisyUI styling.
 * Features a clean card design with header, content, and optional footer sections.
 * Perfect for sign in, sign up, and other authentication forms.
 * Export as default export for styled usage.
 */
const StyledAuthCard = React.forwardRef<HTMLDivElement, StyledAuthCardProps>(
  ({ className = "", title, subtitle, footer, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`card bg-base-100 shadow-xl max-w-md w-full ${className}`}
        data-component="auth-card"
        {...props}
      >
        <div className="card-body">
          {(title || subtitle) && (
            <div className="text-center mb-6">
              {title && (
                <h2 className="card-title text-2xl font-bold justify-center mb-2">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-base-content/70 text-sm">{subtitle}</p>
              )}
            </div>
          )}
          <div className="space-y-4">{children}</div>
          {footer && (
            <div className="text-center mt-6 pt-6 border-t border-base-300">
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  },
);

StyledAuthCard.displayName = "StyledAuthCard";

export default StyledAuthCard;
