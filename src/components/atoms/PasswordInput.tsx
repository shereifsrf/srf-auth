import React, { useState } from "react";

export interface PasswordStrength {
  score: number; // 0-4
  label: string; // 'weak' | 'fair' | 'good' | 'strong' | 'very strong'
  color: string; // for visual feedback
}

export interface PasswordInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  /** Show password strength indicator */
  showStrength?: boolean;
  /** Show toggle visibility button */
  showToggle?: boolean;
  /** Callback for password strength change */
  onStrengthChange?: (strength: PasswordStrength) => void;
  /** Error state */
  hasError?: boolean;
  /** Full width */
  fullWidth?: boolean;
}

/**
 * Calculate password strength based on various criteria
 */
export const calculatePasswordStrength = (
  password: string,
): PasswordStrength => {
  if (!password) {
    return { score: 0, label: "weak", color: "gray" };
  }

  let score = 0;

  // Length check
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;

  // Character variety checks
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  // Cap at 4
  score = Math.min(score, 4);

  const labels = ["weak", "fair", "good", "strong", "very strong"];
  const colors = ["red", "orange", "yellow", "blue", "green"];

  return {
    score,
    label: labels[score],
    color: colors[score],
  };
};

/**
 * Headless PasswordInput component - provides password input functionality without styling.
 * Includes password visibility toggle and strength indicator.
 * Export as named export for headless usage.
 */
export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(
  (
    {
      showStrength = false,
      showToggle = true,
      onStrengthChange,
      hasError = false,
      fullWidth = false,
      value,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [strength, setStrength] = useState<PasswordStrength>(
      calculatePasswordStrength(""),
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      if (showStrength) {
        const newStrength = calculatePasswordStrength(newValue);
        setStrength(newStrength);
        onStrengthChange?.(newStrength);
      }

      onChange?.(e);
    };

    return (
      <div data-component="password-input" data-full-width={fullWidth}>
        <div data-slot="input-wrapper">
          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={handleChange}
            data-error={hasError}
            aria-invalid={hasError}
            {...props}
          />
          {showToggle && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              data-slot="toggle-button"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          )}
        </div>
        {showStrength && value && (
          <div
            data-slot="strength-indicator"
            data-strength={strength.score}
            data-color={strength.color}
            role="status"
            aria-live="polite"
          >
            <div data-slot="strength-bars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  data-slot="strength-bar"
                  data-active={i < strength.score}
                  data-color={i < strength.score ? strength.color : "gray"}
                />
              ))}
            </div>
            <span data-slot="strength-label">{strength.label}</span>
          </div>
        )}
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";

// ============================================================================
// Styled Component
// ============================================================================

export interface StyledPasswordInputProps extends PasswordInputProps {
  className?: string;
}

/**
 * Styled PasswordInput component - uses DaisyUI input classes.
 * Based on the headless PasswordInput component with DaisyUI styling.
 * Includes show/hide toggle and password strength indicator with dark mode support.
 * Export as default export for styled usage.
 */
const StyledPasswordInput = React.forwardRef<
  HTMLInputElement,
  StyledPasswordInputProps
>(({ className = "", hasError, fullWidth, ...props }, ref) => {
  const inputBaseStyles = "input input-bordered pr-10";

  const errorStyles = hasError ? "input-error" : "";

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <div className={`relative ${className}`.trim()}>
      <style>{`
          [data-component="password-input"] {
            width: 100%;
          }
          [data-slot="input-wrapper"] {
            position: relative;
            display: flex;
            align-items: center;
          }
          [data-component="password-input"] input {
            ${inputBaseStyles} ${errorStyles} ${widthStyles}
          }
          [data-slot="toggle-button"] {
            position: absolute;
            right: 0.75rem;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.6;
            transition: opacity 0.2s;
          }
          [data-slot="toggle-button"]:hover {
            opacity: 1;
          }
          [data-slot="strength-indicator"] {
            margin-top: 0.5rem;
          }
          [data-slot="strength-bars"] {
            display: flex;
            gap: 0.25rem;
            margin-bottom: 0.25rem;
          }
          [data-slot="strength-bar"] {
            height: 0.25rem;
            flex: 1;
            border-radius: 0.125rem;
            background-color: hsl(var(--b3));
            transition: background-color 0.2s;
          }
          [data-slot="strength-bar"][data-active="true"][data-color="red"] {
            background-color: hsl(var(--er));
          }
          [data-slot="strength-bar"][data-active="true"][data-color="orange"] {
            background-color: hsl(var(--wa));
          }
          [data-slot="strength-bar"][data-active="true"][data-color="yellow"] {
            background-color: hsl(var(--wa));
          }
          [data-slot="strength-bar"][data-active="true"][data-color="blue"] {
            background-color: hsl(var(--in));
          }
          [data-slot="strength-bar"][data-active="true"][data-color="green"] {
            background-color: hsl(var(--su));
          }
          [data-slot="strength-label"] {
            font-size: 0.875rem;
            opacity: 0.7;
            text-transform: capitalize;
          }
        `}</style>
      <PasswordInput
        ref={ref}
        hasError={hasError}
        fullWidth={fullWidth}
        {...props}
      />
    </div>
  );
});

StyledPasswordInput.displayName = "StyledPasswordInput";

export default StyledPasswordInput;
