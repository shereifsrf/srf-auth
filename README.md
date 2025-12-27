# SRF-Auth

A reusable authentication library for Next.js applications with full TypeScript support.

## 🚀 Current Status

### ✅ Phase 1.1: Project Setup (Completed)
- TypeScript, Ladle, tsup, Jest configured
- Build system and testing framework ready
- Package structure established

### ✅ Phase 1.2: Atom Components (Completed)
All atomic UI components with both **headless** (unstyled) and **styled** variants in the same file:

#### Components
- **Button** - Flexible button with multiple variants (primary, secondary, outline, ghost, danger)
- **Input** - Text input with error states and full width support
- **Label** - Form label with required field indicator
- **LoadingSpinner** - Animated loading indicator with size options
- **ErrorMessage** - Error display component with variant support (error, warning, info)
- **PasswordInput** - Password input with visibility toggle and strength indicator
- **OAuthButton** - OAuth provider buttons for Google, GitHub, Facebook, Apple, Twitter, Microsoft
- **ThemeSwitch** - Theme toggle button with light/dark/system modes and localStorage persistence

### ✅ Phase 1.3: Molecule Components (Completed)
All molecule UI components with both **headless** (unstyled) and **styled** variants in the same file:

#### Components
- **AuthCard** - Authentication card container with header, content, and footer sections
- **AuthDivider** - Horizontal divider with centered text (e.g., "Or continue with")
- **FormField** - Complete form field wrapper with label, input, and error/helper text

### ✅ Phase 1.4: Component Testing in Ladle (Completed)
All components are visible and interactive in Ladle with comprehensive stories:
- Atom components: Button, Input, Label, LoadingSpinner, ErrorMessage, PasswordInput, OAuthButton
- Molecule components: AuthCard, AuthDivider, FormField
- Multiple variants and use cases demonstrated for each component
- TypeScript compilation verified with no errors

### 📦 Component Architecture

Each component file exports both headless and styled variants:

#### Component Structure
- Both headless and styled versions in the same file
- Headless: Unstyled, logic-only base component
- Styled: Pre-styled variant using Tailwind CSS/DaisyUI
- Organized by atomic design: atoms, molecules, organisms

```typescript
// Import headless (unstyled) variant
import { Button } from '@shereifsrf/srf-auth/components/atoms/Button';

// Import styled variant (default export)
import Button from '@shereifsrf/srf-auth/components/atoms/Button';

// Or import both
import Button, { Button as HeadlessButton } from '@shereifsrf/srf-auth/components/atoms/Button';
```

**Benefits:**
- Single source of truth for component logic
- Easier maintenance and updates
- Better co-location of related code
- Simpler import paths

```typescript
import { Button } from '@shereifsrf/srf-auth/components';
// or
import { Button } from '@shereifsrf/srf-auth/components/styled';
```

## 🎨 Viewing Components

Start Ladle to view all components:

```bash
npm run ladle
```

Then open [http://localhost:61000/](http://localhost:61000/) to browse the component library.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start component development
npm run ladle

# Type check
npm run type-check

# Build package
npm run build

# Run tests
npm test

# Watch tests
npm test:watch

# Test coverage
npm test:coverage
```

## 📋 Next Steps

- **Phase 2**: Form Organisms (SignInForm, SignUpForm, etc.)
- **Phase 3**: Core Logic (Auth.js integration, Zod schemas, password utils)
- **Phase 4**: Database Layer (MongoDB adapter, user models)

## 📝 Documentation

For full architecture and roadmap, see [DESIGN.md](./DESIGN.md).

## 🔑 Features

- ✅ TypeScript-first with full type safety
- ✅ Headless and styled component variants
- ✅ Tailwind CSS + DaisyUI integration
- ✅ Accessible (ARIA labels, keyboard navigation)
- ✅ Password strength indicator
- ✅ OAuth provider buttons (Google, GitHub, Facebook, Apple, Twitter, Microsoft)
- ✅ Theme switching with light/dark/system modes
- ✅ Molecule components (AuthCard, AuthDivider, FormField)
- ✅ Component development with Ladle
- ✅ Fast build with tsup
- ✅ Testing with Vitest

## 📄 License

MIT
