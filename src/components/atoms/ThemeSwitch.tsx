import React, { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

export interface ThemeSwitchProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> {
  /** Current theme */
  theme?: Theme;
  /** Callback when theme changes */
  onThemeChange?: (theme: Theme) => void;
  /** Show system preference option */
  showSystemOption?: boolean;
  /** Show text label next to icon */
  showLabel?: boolean;
}

/**
 * Headless ThemeSwitch component - provides theme switching functionality without styling.
 * Manages theme state and applies theme to document element.
 * Export as named export for headless usage.
 */
export const ThemeSwitch = React.forwardRef<
  HTMLButtonElement,
  ThemeSwitchProps
>(
  (
    {
      theme: controlledTheme,
      onThemeChange,
      showSystemOption = false,
      ...props
    },
    ref,
  ) => {
    const [theme, setTheme] = useState<Theme>(() => {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("theme") as Theme;
        return stored || "system";
      }
      return "system";
    });

    const currentTheme = controlledTheme ?? theme;

    const getNextTheme = (): Theme => {
      if (showSystemOption) {
        if (currentTheme === "light") return "dark";
        if (currentTheme === "dark") return "system";
        return "light";
      } else {
        return currentTheme === "light" ? "dark" : "light";
      }
    };

    const handleClick = () => {
      const nextTheme = getNextTheme();
      setTheme(nextTheme);
      onThemeChange?.(nextTheme);
    };

    useEffect(() => {
      if (typeof window === "undefined") return undefined;

      const applyTheme = (themeToApply: Theme) => {
        const root = document.documentElement;

        if (themeToApply === "system") {
          const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
          ).matches;
          root.setAttribute("data-theme", prefersDark ? "dark" : "light");
        } else {
          root.setAttribute("data-theme", themeToApply);
        }

        localStorage.setItem("theme", themeToApply);
      };

      applyTheme(currentTheme);

      // Listen for system theme changes if system theme is active
      if (currentTheme === "system") {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => applyTheme("system");
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
      }

      return undefined;
    }, [currentTheme]);

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        data-component="theme-switch"
        data-theme={currentTheme}
        aria-label={`Switch to ${getNextTheme()} theme`}
        {...props}
      >
        {props.children}
      </button>
    );
  },
);

ThemeSwitch.displayName = "ThemeSwitch";

/**
 * Styled ThemeSwitch component - toggle between light/dark themes with DaisyUI styling.
 * Features sun/moon icons and optional text labels.
 * Automatically persists theme preference to localStorage.
 * Export as default for styled usage.
 */
const StyledThemeSwitch = React.forwardRef<HTMLButtonElement, ThemeSwitchProps>(
  (
    { className = "", showLabel = false, showSystemOption = false, ...props },
    ref,
  ) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>("light");

    useEffect(() => {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("theme") as Theme;
        const root = document.documentElement;
        const dataTheme = root.getAttribute("data-theme");
        setCurrentTheme(stored || (dataTheme as Theme) || "light");
      }
    }, []);

    const getIcon = () => {
      if (currentTheme === "dark") {
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        );
      } else if (currentTheme === "system") {
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      } else {
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        );
      }
    };

    const getLabel = () => {
      if (currentTheme === "dark") return "Dark";
      if (currentTheme === "system") return "System";
      return "Light";
    };

    return (
      <ThemeSwitch
        ref={ref}
        className={`btn btn-ghost btn-circle ${className}`}
        showSystemOption={showSystemOption}
        onThemeChange={setCurrentTheme}
        {...props}
      >
        <div className="flex items-center gap-2">
          {getIcon()}
          {showLabel && <span className="text-sm">{getLabel()}</span>}
        </div>
      </ThemeSwitch>
    );
  },
);

StyledThemeSwitch.displayName = "StyledThemeSwitch";

export default StyledThemeSwitch;
