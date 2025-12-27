import React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Make label required (shows asterisk) */
  required?: boolean;
  children?: React.ReactNode;
}

/**
 * Headless Label component - provides label functionality without styling.
 * Use this as a base for custom-styled labels or when you need full control over styling.
 * Export as named export for headless usage.
 */
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ required = false, children, className = "", ...props }, ref) => {
    return (
      <label
        ref={ref}
        data-required={required}
        className={className}
        {...props}
      >
        {children}
        {required && <span data-slot="required-indicator">*</span>}
      </label>
    );
  },
);

Label.displayName = "Label";

/**
 * Styled Label component - uses DaisyUI label classes.
 * Based on the headless Label component with DaisyUI styling.
 * Supports dark mode and required field indicators.
 * Export as default for styled usage.
 */
const StyledLabel = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = "", required, children, ...props }, ref) => {
    const baseStyles = "label";
    const combinedClassName = `${baseStyles} ${className}`.trim();

    return (
      <Label
        ref={ref}
        className={combinedClassName}
        required={required}
        {...props}
      >
        <span className="label-text">
          {children}
          {required && (
            <span className="text-error ml-1" aria-label="required">
              *
            </span>
          )}
        </span>
      </Label>
    );
  },
);

StyledLabel.displayName = "StyledLabel";

export default StyledLabel;
