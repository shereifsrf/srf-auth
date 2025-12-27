# SRF-Auth: Reusable Authentication Library

## 📋 Overview

**Problem**: Rebuilding authentication for every Next.js project (sign up, OAuth, email verification, password reset, etc.)

**Solution**: Private npm package with reusable auth components, Auth.js integration, database models, and email service.

**What You Get**: `@shereifsrf/srf-auth` - Plug-and-play authentication for Next.js 13+ with full TypeScript support and extensibility.

---

## 🗺️ Development Roadmap

```
┌─────────────────────────────────────────────────────────────────────┐
│                      8-PHASE IMPLEMENTATION                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Phase 1: UI Components (Week 1)                                   │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ Atoms → Molecules → Organisms (Headless + Styled)            │  │
│  │ Test in Ladle ✓                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                         ↓                                           │
│  Phase 2: Form Components (Week 2)                                 │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ SignIn/SignUp Forms → Validation → Custom Fields            │  │
│  │ Test in Ladle ✓                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                         ↓                                           │
│  Phase 3: Business Logic (Week 3)                                  │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ Zod Schemas → Password Utils → Form Configs                 │  │
│  │ Unit Tests ✓                                                 │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                         ↓                                           │
│  Phase 4: Database Layer (Week 4)                                  │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ Mongoose Models → Adapters → Metadata Support               │  │
│  │ Integration Tests ✓                                          │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                         ↓                                           │
│  Phase 5: Email Service (Week 5)                                   │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ Templates → Resend/SMTP → Multi-Provider                     │  │
│  │ Test Emails ✓                                                │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                         ↓                                           │
│  Phase 6: Auth.js Integration (Week 6)                             │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ Route Handlers → Providers → Hooks → Middleware             │  │
│  │ E2E Tests ✓                                                  │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                         ↓                                           │
│  Phase 7: Package & Distribution (Week 7)                          │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ Build Config → Exports → Example App → Docs                 │  │
│  │ Package Published ✓                                          │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                         ↓                                           │
│  Phase 8: Enhancement & Polish (Week 8)                            │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ Themes → Optimization → Error Handling → Testing Utils      │  │
│  │ Production Ready ✓                                           │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Architecture

### Core Decisions

| Aspect | Choice | Why |
|--------|--------|-----|
| **Auth Framework** | Auth.js (NextAuth v5) | TypeScript-first, flexible, modern API |
| **Components** | Headless + Styled | Max flexibility + quick setup |
| **Forms** | react-hook-form + Zod | Best-in-class validation & DX |
| **Server/Client** | Server-first (RSC) | Performance, smaller bundles |
| **Database** | Mongoose (MongoDB) | Flexible metadata, easy setup |
| **Email** | Resend (primary) | Modern API, great DX, free tier |
| **Dev Tools** | Ladle + Vite | Fast component development |
| **Build** | tsup | Fast TypeScript bundler |
| **Testing** | Jest + RTL | Standard, reliable |
| **Styling** | Tailwind v4 + DaisyUI | Component library with utility-first CSS |

### Tailwind CSS + DaisyUI Strategy

**Philosophy**: Beautiful DaisyUI components with Tailwind v4 flexibility

| Aspect | Approach | Benefit |
|--------|----------|---------|
| **Core Package** | Tailwind v4 + DaisyUI | Professional components out-of-the-box |
| **Default Styles** | DaisyUI component classes | Beautiful, accessible, consistent |
| **Customization** | CSS variables + DaisyUI themes | Full theme control |
| **User Plugins** | Optional (forms, typography, etc.) | Add more as needed |
| **Bundle Size** | Optimized by Tailwind v4 | Minimal with tree-shaking |

#### How It Works

```
┌───────────────────────────────────────────────────────┐
│            @shereifsrf/srf-auth Package               │
├───────────────────────────────────────────────────────┤
│  ✓ Components with Tailwind utility classes          │
│  ✓ Base CSS with CSS variables (minimal)             │
│  ✓ Tailwind preset for user consumption              │
│  ✗ No Tailwind plugins (DaisyUI, forms, etc.)        │
│  ✗ No compiled CSS (user generates it)               │
└───────────────────────────────────────────────────────┘
                          ↓
┌───────────────────────────────────────────────────────┐
│                  User's Project                       │
├───────────────────────────────────────────────────────┤
│  1. Installs: tailwindcss + @shereifsrf/srf-auth     │
│  2. Extends config with our preset                   │
│  3. Imports our base.css                             │
│  4. Optional: Add plugins (DaisyUI, forms, etc.)     │
│  5. Build system purges unused classes               │
└───────────────────────────────────────────────────────┘
```

### Project Structure

```
srf-auth/
├── src/
│   ├── components/           # UI Components (headless + styled in same file)
│   │   ├── atoms/           # Basic components (Button, Input, etc.)
│   │   ├── molecules/       # Composite components (FormField, etc.)
│   │   └── organisms/       # Complex components (SignInForm, etc.)
│   ├── styles/              # Styling system
│   │   ├── base.css         # CSS variables & minimal resets
│   │   ├── tailwind.preset.js # Tailwind config preset
│   │   └── index.ts         # Style exports
│   ├── core/                # Business logic (validation, crypto, etc.)
│   ├── database/            # Models & adapters
│   ├── email/               # Email service & templates
│   ├── hooks/               # React hooks (useAuth, useSignIn, etc.)
│   ├── nextjs/              # Next.js routes, middleware, pages
│   └── types/               # TypeScript definitions
├── tests/                   # Unit + integration tests
├── .ladle/                  # Component development
├── examples/                # Usage examples
└── docs/                    # Documentation
```

### Extensibility Pattern

**Schema-based forms** allow custom fields beyond defaults:

```typescript
// Extend base schema with custom fields
const customSchema = baseSignUpSchema.extend({
  company: z.string(),
  role: z.enum(['engineer', 'designer']),
});

// Configure form with metadata
const config = createFormConfig({
  schema: customSchema,
  fields: {
    company: { label: 'Company', order: 2 },
    role: { label: 'Role', type: 'select', options: [...] }
  },
  callbacks: {
    onAfterSuccess: async (user, metadata) => {
      // Custom logic (create company, send email, etc.)
    }
  }
});

// Use in component
<SignUpForm config={config} />
```

**User metadata field** stores custom data in MongoDB JSON field.

---

## 📅 Phase-by-Phase Implementation

### 🎨 Phase 1: UI Components Foundation (Week 1)

**Goal**: Build all UI components in Ladle

#### Deliverables
1. ✅ **Project Setup**: TypeScript, Ladle, tsup, Jest
2. ✅ **Tailwind CSS Setup**:
   - Add Tailwind CSS v4 as peer dependency
   - Create `src/styles/base.css` with CSS variables
   - Create `src/styles/tailwind.preset.js` for user projects
   - Configure PostCSS and Tailwind for development
3. ✅ **Atoms (Headless + Styled)**: 
   - Button (primary, secondary, outline, ghost, danger variants)
   - Input (text, email, password with error states)
   - Label, LoadingSpinner, ErrorMessage
   - PasswordInput (with show/hide toggle, strength indicator)
   - OAuthButton (Google, GitHub with icons)
4. **Molecules**: 
   - AuthCard (container with modern design)
   - AuthDivider ("Or continue with")
   - FormField (label + input + error wrapper)
5. **Styling Features**:
   - Dark mode support via `dark:` classes
   - Responsive design (mobile-first)
   - CSS variables for easy theming
   - Focus states and accessibility
6. **Test**: All components visible in Ladle with interactions

#### Exit Criteria
✅ `npm run ladle` opens component browser  
✅ All components render and are interactive  
✅ Unit tests pass  
✅ TypeScript compiles with no errors

---

### 🧩 Phase 2: Form Organisms (Week 2)

**Goal**: Build complete form components with validation

#### Deliverables
1. **SignInForm** (headless + styled): Email/password, remember me, forgot link
2. **SignUpForm** (headless + styled): Name, email, password, confirm, terms checkbox
3. **OAuthProviders**: Configurable provider buttons with divider
4. **Password Reset Forms**: ForgotPassword + ResetPassword
5. **Custom Field Support**: Demo extending schema with company/role
6. **react-hook-form Integration**: Form state management
7. **Zod Validation**: Real-time validation feedback

#### Exit Criteria
✅ Forms work in Ladle with mock submit  
✅ Client-side validation with error messages  
✅ Custom fields demonstrated  
✅ Responsive & accessible (keyboard, ARIA)

---

### 🔐 Phase 3: Core Logic (Week 3)

**Goal**: Business logic without UI or database

#### Deliverables
1. **Zod Schemas**: Base schemas (signIn, signUp, reset) + composition utilities
2. **Password Utils**: bcrypt hashing, strength calculator, token generation
3. **Form Config Builder**: `createFormConfig()` with types
4. **Auth Config Builder**: Auth.js configuration generator
5. **Mock Provider**: In-memory auth for Ladle testing

#### Exit Criteria
✅ Schema composition works (extend base schemas)  
✅ Password hashing tested  
✅ Config builders type-safe  
✅ Components work with mock auth in Ladle

---

### 🗄️ Phase 4: Database Layer (Week 4)

**Goal**: Database models and adapters

#### Deliverables
1. **Adapter Interface**: Database abstraction
2. **User Model**: Schema with `metadata` JSON field for custom data
3. **Token Models**: VerificationToken, PasswordResetToken with TTL
4. **Connection Manager**: Connection pooling, retry logic
5. **Mongoose Adapter**: Full implementation

#### Exit Criteria
✅ Models validated with mongodb-memory-server  
✅ Metadata field stores custom user data  
✅ Adapter passes all CRUD tests  
✅ Connection manager handles retries

---

### 📧 Phase 5: Email Service (Week 5)

**Goal**: Multi-provider email with templates

#### Deliverables
1. **Email Providers**: Resend (prod), SMTP (fallback), Console (dev)
2. **Templates (React Email)**: Verification, password reset, welcome
3. **Email Service**: Provider orchestration, auto-selection
4. **Template Rendering**: Preview templates in Ladle

#### Exit Criteria
✅ Templates render correctly  
✅ Dev mode logs emails to console  
✅ Resend sends emails in test mode  
✅ Provider switching works

---

### 🔌 Phase 6: Auth.js Integration (Week 6)

**Goal**: Wire everything together

#### Deliverables
1. **Route Handlers**: Signup, verify, forgot/reset password
2. **Auth.js Config**: Credentials + Google providers, callbacks, session
3. **React Hooks**: useAuth, useSignIn, useSignUp, usePasswordReset
4. **Middleware**: Route protection helper
5. **Example App**: Working Next.js app using the library

#### Exit Criteria
✅ Complete auth flow works end-to-end  
✅ OAuth sign-in works  
✅ Email verification works  
✅ Password reset works  
✅ Protected routes redirect correctly

---

### 📦 Phase 7: Package & Distribution (Week 7)

**Goal**: Prepare for distribution

#### Deliverables
1. **Build Config**: tsup with multiple entry points (ESM + CJS)
2. **Package Exports**: Proper subpath exports in package.json
3. **Example App**: Complete Next.js app demonstrating usage
4. **Documentation**: README, getting-started, API reference
5. **GitHub Packages**: CI/CD for publishing

#### Exit Criteria
✅ Package builds successfully  
✅ Example app works with local package  
✅ Tree-shaking verified  
✅ Published to GitHub Packages

---

### 🚀 Phase 8: Enhancement & Polish (Week 8)

**Goal**: Production-ready features

#### Deliverables
1. **Component Themes**: Default, minimal, modern variants
2. **Testing Utilities**: Mock factories for consumers
3. **Performance**: Bundle optimization, lazy loading
4. **Error Handling**: Custom errors, user-friendly messages

#### Exit Criteria
✅ Multiple themes available  
✅ Bundle < 50KB (minimal setup)  
✅ Comprehensive error handling  
✅ Production ready

---

## 🛠️ Technology Stack

### Core Dependencies
```json
{
  "@auth/core": "Auth.js framework",
  "@auth/nextjs": "Auth.js Next.js adapter",
  "mongoose": "MongoDB ORM",
  "bcryptjs": "Password hashing",
  "zod": "Schema validation",
  "react-hook-form": "Form state management",
  "resend": "Email service",
  "@react-email/components": "Email templates",
  "lucide-react": "Icons"
}
```

### Dev Dependencies
```json
{
  "@ladle/react": "Component development",
  "tsup": "TypeScript bundler",
  "jest": "Testing framework",
  "@testing-library/react": "Component testing",
  "mongodb-memory-server": "In-memory DB for tests",
  "tailwindcss": "Utility-first CSS (v4+)",
  "postcss": "CSS processing",
  "autoprefixer": "CSS vendor prefixing"
}
```

### Peer Dependencies (User Installs)
```json
{
  "next": "13.0.0+",
  "react": "18.0.0+",
  "react-dom": "18.0.0+",
  "tailwindcss": "^4.0.0"
}
```

---

## 🎨 Tailwind CSS Implementation Guide

### Package Architecture

**What's Included:**
- ✅ Components with DaisyUI classes
- ✅ Tailwind v4 + DaisyUI configuration
- ✅ Dark mode support built-in
- ✅ Accessible components by default
- ❌ NO additional plugins (users can add more)
- ❌ NO compiled CSS (generated by user)

**What Users Add:**
- Optional: Additional Tailwind plugins (@tailwindcss/forms, typography)
- Optional: Custom DaisyUI theme overrides
- Required: Tailwind CSS v4 + DaisyUI in their project

### User Setup (2 Steps - Simplified with v4 + DaisyUI!)

#### 1. Install Dependencies
```bash
npm install @shereifsrf/srf-auth tailwindcss@latest daisyui@latest
```

#### 2. Import Styles
```css
/* app/globals.css */
@import '@shereifsrf/srf-auth/styles/base.css';

/* That's it! Tailwind v4, DaisyUI, and our theme are included. */

/* Optional: Override DaisyUI theme variables */
:root {
  --p: 220 100 50; /* Custom primary color */
}
```

#### Optional: Add Config for Plugins
```typescript
// tailwind.config.ts (only if you need plugins or custom config)
import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@shereifsrf/srf-auth/dist/**/*.{js,mjs}',
  ],
  // Optional: Add your plugins
  plugins: [
    // require('daisyui'),
    // require('@tailwindcss/forms'),
  ],
} satisfies Config;
```

### Component Styling Pattern

**Example: Button Component**
```tsx
// src/components/styled/Button.tsx
export function Button({ variant = 'primary', size = 'md', ...props }) {
  const baseClasses = 
    'inline-flex items-center justify-center gap-2 rounded-lg ' +
    'font-medium transition-all duration-200 ' +
    'focus:outline-none focus:ring-2 focus:ring-offset-2 ' +
    'disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      {...props}
    />
  );
}
```

### CSS Variables System

```css
/* src/styles/base.css */
@layer base {
  :root {
    /* Core theme colors (RGB for Tailwind opacity) */
    --auth-primary: 37 99 235;        /* blue-600 */
    --auth-primary-hover: 29 78 216;  /* blue-700 */
    --auth-danger: 220 38 38;         /* red-600 */
    --auth-success: 22 163 74;        /* green-600 */
    
    /* Spacing */
    --auth-spacing-sm: 0.5rem;
    --auth-spacing-md: 1rem;
    --auth-spacing-lg: 1.5rem;
    
    /* Border radius */
    --auth-radius-sm: 0.375rem;
    --auth-radius-md: 0.5rem;
    --auth-radius-lg: 0.75rem;
  }
  
  .dark {
    --auth-primary: 59 130 246;       /* blue-500 */
    --auth-primary-hover: 96 165 250; /* blue-400 */
  }
}
```

### Tailwind Preset

```javascript
// src/styles/tailwind.preset.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'auth-primary': 'rgb(var(--auth-primary) / <alpha-value>)',
        'auth-primary-hover': 'rgb(var(--auth-primary-hover) / <alpha-value>)',
        'auth-danger': 'rgb(var(--auth-danger) / <alpha-value>)',
        'auth-success': 'rgb(var(--auth-success) / <alpha-value>)',
      },
      spacing: {
        'auth-sm': 'var(--auth-spacing-sm)',
        'auth-md': 'var(--auth-spacing-md)',
        'auth-lg': 'var(--auth-spacing-lg)',
      },
      borderRadius: {
        'auth-sm': 'var(--auth-radius-sm)',
        'auth-md': 'var(--auth-radius-md)',
        'auth-lg': 'var(--auth-radius-lg)',
      },
    },
  },
};
```

### Customization Examples

#### With DaisyUI
```typescript
// User's tailwind.config.ts
export default {
  presets: [srfAuthPreset],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
};
```

#### Custom Brand Colors
```css
/* User's globals.css */
:root {
  --auth-primary: 147 51 234;      /* Purple */
  --auth-primary-hover: 126 34 206;
}
```

#### Sharp Corners Theme
```css
:root {
  --auth-radius-sm: 0;
  --auth-radius-md: 0;
  --auth-radius-lg: 0;
}
```

### Bundle Size Impact

| Component Type | Size | Notes |
|----------------|------|-------|
| Headless | ~2-5KB | Logic only, no styles |
| Styled | ~0.5-1KB CSS | Purged by user's Tailwind build |
| Icons (Lucide) | ~1-2KB each | Tree-shakeable |
| **Total Package** | ~10-20KB | For complete auth UI |

**Key Benefits:**
- User's build system purges unused Tailwind classes
- No runtime CSS-in-JS overhead
- No forced plugins (user chooses)
- Easy theme customization via CSS variables

---

## 🚦 Getting Started (After Phase 7)

### Installation
```bash
npm install @shereifsrf/srf-auth tailwindcss@latest
```

### Basic Setup (5 minutes)
```typescript
// 1. Auth handler (app/api/auth/[...nextauth]/route.ts)
import { createAuthHandler } from '@shereifsrf/srf-auth/nextjs';

export const { GET, POST } = createAuthHandler({
  database: { url: process.env.MONGODB_URI! },
  email: { provider: 'resend', apiKey: process.env.RESEND_API_KEY! },
  oauth: { google: { clientId: '...', clientSecret: '...' } },
});

// 2. Session provider (app/layout.tsx)
import { SessionProvider } from '@shereifsrf/srf-auth/nextjs';

export default function RootLayout({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

// 3. Use pre-built page (app/auth/signin/page.tsx)
import { SignInPage } from '@shereifsrf/srf-auth/nextjs/pages';
export default SignInPage;

// 4. Protect routes (middleware.ts)
import { withAuth } from '@shereifsrf/srf-auth/nextjs/middleware';
export default withAuth();
export const config = { matcher: ['/dashboard/:path*'] };
```

### Custom Fields Example
```typescript
import { baseSignUpSchema, createFormConfig } from '@shereifsrf/srf-auth';
import { z } from 'zod';

const schema = baseSignUpSchema.extend({
  company: z.string().min(2),
  role: z.enum(['engineer', 'designer']),
});

const config = createFormConfig({
  schema,
  fields: {
    company: { label: 'Company Name' },
    role: { label: 'Role', type: 'select', options: [...] }
  },
  callbacks: {
    onAfterSuccess: async (user, metadata) => {
      await createCompany(metadata.company);
    }
  }
});

// Use in component
<SignUpForm config={config} />
```

---

## ✅ Success Metrics

- **Setup Time**: < 10 minutes from install to working auth
- **Bundle Size**: < 50KB (tree-shaken, minimal setup)
- **Type Coverage**: 100% TypeScript
- **Test Coverage**: > 80%
- **Documentation**: Every export documented
- **Extensibility**: Support for unlimited custom fields

---

## 📝 Next Actions

1. ✅ Review and approve this design
2. 🚀 Start Phase 1.1: Project setup (package.json, tsconfig, ladle, tsup)
3. 🎨 Build first component in Ladle
4. 🧪 Verify component works before moving forward

**Each phase is independently testable and delivers working functionality!**
