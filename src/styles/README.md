# SRF-Auth Styles

This directory contains the base styles for the SRF-Auth package.

## Setup

### 1. Install Dependencies

```bash
npm install tailwindcss@^4.0.0 daisyui
```

### 2. Import Base CSS

In your global CSS file (e.g., `app/globals.css`):

```css
@import '@shereifsrf/srf-auth/styles/base.css';
```

That's it! Tailwind CSS v4 and DaisyUI are now set up in your project.

## Customization

### Using DaisyUI Themes

All DaisyUI themes are available by default. Simply update your `html` element with the `data-theme` attribute:

```tsx
<html data-theme="light">
  {/* light theme */}
</html>
```

Available themes include: `light`, `dark`, `cupcake`, `bumblebee`, `emerald`, `corporate`, `synthwave`, `retro`, `cyberpunk`, `valentine`, `halloween`, `garden`, `forest`, `aqua`, `lofi`, `pastel`, `fantasy`, `wireframe`, `black`, `luxury`, `dracula`, `cmyk`, `autumn`, `business`, `acid`, `lemonade`, `night`, `coffee`, `winter`, `dim`, `nord`, `sunset`.

### Custom Theme

Create your own theme by overriding DaisyUI's CSS variables:

```css
/* app/globals.css */
@import '@shereifsrf/srf-auth/styles/base.css';

@layer base {
  :root {
    --primary: 220 90 56;   /* HSL color for primary */
    --primary-content: 0 0 100;
  }
}
```

For a complete list of DaisyUI CSS variables, see the [DaisyUI documentation](https://daisyui.com/docs/colors/).

### Dynamic Theme Switching

```tsx
'use client';

import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

### System Preference Dark Mode

Let DaisyUI automatically switch based on system preference:

```tsx
// In your HTML or root layout
<html data-theme={systemPrefersDark ? 'dark' : 'light'}>
```

## File Structure

- `base.css` - Main stylesheet with Tailwind v4 import
- `README.md` - This file

## DaisyUI Configuration

The package uses DaisyUI's default themes. Users can customize themes by:

1. Adding a custom `tailwind.config.js` file
2. Using DaisyUI's `data-theme` attribute
3. Overriding CSS variables in their global styles
