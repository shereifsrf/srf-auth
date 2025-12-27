import React from "react";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Help text */
  helperText?: string;
  /** Required field indicator */
  required?: boolean;
  /** Input element */
  children: React.ReactNode;
  /** htmlFor attribute for label */
  htmlFor?: string;
}

/**
 * Headless FormField component - wraps label, input, and error message without styling.
 * Use this as a base for custom-styled form fields.
 * Export as named export for headless usage.
 */
export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    { label, error, helperText, required = false, children, htmlFor, ...props },
    ref,
  ) => {
    return (
      <div ref={ref} data-component="form-field" {...props}>
        {label && (
          <label
            htmlFor={htmlFor}
            data-component="form-field-label"
            data-required={required}
          >
            {label}
            {required && <span data-slot="required-indicator">*</span>}
          </label>
        )}
        <div data-component="form-field-input">{children}</div>
        {error && (
          <div
            data-component="form-field-error"
            role="alert"
            aria-live="polite"
          >
            {error}
          </div>
        )}
        {helperText && !error && (
          <div data-component="form-field-helper">{helperText}</div>
        )}
      </div>
    );
  },
);

FormField.displayName = "FormField";

// ============================================================================
// Styled Component
// ============================================================================

export interface StyledFormFieldProps extends FormFieldProps {
  className?: string;
}

/**
 * Styled FormField component - complete form field with label, input, and error/helper text.
 * Uses DaisyUI form-control classes for consistent spacing and layout.
 * Automatically shows error state with red text and helper text when no error.
 * Export as default export for styled usage.
 */
const StyledFormField = React.forwardRef<HTMLDivElement, StyledFormFieldProps>(
  (
    {
      className = "",
      label,
      error,
      helperText,
      required,
      children,
      htmlFor,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={`form-control w-full ${className}`}
        data-component="form-field"
        {...props}
      >
        {label && (
          <label className="label" htmlFor={htmlFor}>
            <span className="label-text font-medium">
              {label}
              {required && <span className="text-error ml-1">*</span>}
            </span>
          </label>
        )}
        <div>{children}</div>
        {error && (
          <label className="label">
            <span
              className="label-text-alt text-error"
              role="alert"
              aria-live="polite"
            >
              {error}
            </span>
          </label>
        )}
        {helperText && !error && (
          <label className="label">
            <span className="label-text-alt text-base-content/60">
              {helperText}
            </span>
          </label>
        )}
      </div>
    );
  },
);

StyledFormField.displayName = "StyledFormField";

export default StyledFormField;
