# 📊 Visual Folder Structure

## Complete Production-Grade Architecture

```
shopify/
│
├── 📱 App.tsx                              # Root component with Redux & Navigation
│
├── 📂 src/                                 # Source code
│   │
│   ├── 🎨 assets/                         # Static resources
│   │   ├── fonts/                         # Custom fonts (Inter, Roboto, etc.)
│   │   │   └── index.ts
│   │   ├── images/                        # Product images, logos
│   │   │   └── index.ts
│   │   └── icons/                         # SVG icons, icon sets
│   │       └── index.ts
│   │
│   ├── 🧩 components/                     # Reusable UI components
│   │   ├── common/                        # Generic reusable components
│   │   │   ├── Button.tsx                # Customizable button (4 variants)
│   │   │   ├── Input.tsx                 # Text input with validation
│   │   │   ├── Loading.tsx               # Loading spinner
│   │   │   ├── EmptyState.tsx            # Empty state component
│   │   │   └── index.ts
│   │   ├── ProductCard.tsx               # Product display card
│   │   ├── CartItemComponent.tsx         # Cart item row
│   │   └── index.ts
│   │
│   ├── ⚙️ constants/                      # App-wide constants
│   │   ├── api.ts                        # API URLs, endpoints, HTTP codes
│   │   ├── app.ts                        # Storage keys, limits, validation
│   │   ├── layout.ts                     # Screen dimensions, breakpoints
│   │   └── index.ts
│   │
│   ├── 📦 data/                           # Mock data (temporary)
│   │   └── products.ts                   # Sample products
│   │
│   ├── 🪝 hooks/                          # Custom React hooks
│   │   ├── useApi.ts                     # API calls with loading/error
│   │   ├── useDebounce.ts                # Debounce hook for search
│   │   ├── useKeyboard.ts                # Keyboard visibility detection
│   │   ├── useTheme.ts                   # Theme access hook
│   │   └── index.ts
│   │
│   ├── 🧭 navigation/                     # React Navigation
│   │   ├── types.ts                      # Navigation type definitions
│   │   ├── RootNavigator.tsx             # Root stack navigator
│   │   ├── MainTabNavigator.tsx          # Bottom tab navigator
│   │   └── index.ts
│   │
│   ├── 🔴 redux/                          # Redux Toolkit state
│   │   ├── slices/                       # Redux slices
│   │   │   ├── authSlice.ts             # User authentication state
│   │   │   ├── cartSlice.ts             # Shopping cart state
│   │   │   └── productsSlice.ts         # Products catalog state
│   │   ├── store.ts                      # Redux store config
│   │   └── index.ts
│   │
│   ├── 📺 screens/                        # Feature-based screens
│   │   ├── home/                         # Home feature
│   │   │   └── HomeScreen.tsx           # Product listing screen
│   │   ├── cart/                         # Cart feature
│   │   │   └── CartScreen.tsx           # Shopping cart screen
│   │   ├── auth/                         # Authentication (ready)
│   │   │   ├── LoginScreen.tsx
│   │   │   └── RegisterScreen.tsx
│   │   ├── product/                      # Product details (ready)
│   │   │   └── ProductDetailScreen.tsx
│   │   └── profile/                      # User profile (ready)
│   │       └── ProfileScreen.tsx
│   │
│   ├── 🌐 services/                       # External services & APIs
│   │   ├── api/                          # API service layer
│   │   │   ├── client.ts                # Axios client with interceptors
│   │   │   ├── authService.ts           # Auth endpoints
│   │   │   ├── productService.ts        # Product endpoints
│   │   │   ├── cartService.ts           # Cart endpoints
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── 🎨 theme/                          # Design system
│   │   ├── colors.ts                     # Color palette (50+ colors)
│   │   ├── typography.ts                 # Font sizes, weights, line heights
│   │   ├── spacing.ts                    # Spacing, borders, shadows
│   │   └── index.ts
│   │
│   ├── 📘 types/                          # TypeScript definitions
│   │   └── index.ts                      # Product, CartItem, User, etc.
│   │
│   └── 🛠️ utils/                          # Utility functions
│       ├── validation.ts                 # Email, phone, password validation
│       ├── formatters.ts                 # Currency, date, number formatters
│       ├── storage.ts                    # AsyncStorage wrapper
│       └── index.ts
│
├── 📝 android/                            # Android native code
├── 📝 ios/                                # iOS native code
│
├── 📄 Configuration Files
│   ├── package.json                      # Dependencies & scripts
│   ├── tsconfig.json                     # TypeScript config
│   ├── babel.config.js                   # Babel config
│   ├── metro.config.js                   # Metro bundler config
│   └── jest.config.js                    # Jest testing config
│
└── 📚 Documentation
    ├── README.md                         # Main project README
    ├── ARCHITECTURE.md                   # Complete architecture guide
    ├── SETUP_GUIDE.md                    # Setup & troubleshooting
    ├── MIGRATION_GUIDE.md                # Migration & new features
    └── QUICK_REFERENCE.md                # CLI commands & quick ref
```

---

## 🎯 Key Folders Explained

### 🧩 components/
**Purpose**: Reusable UI building blocks

```
components/
├── common/          → Generic components (Button, Input)
└── feature/         → Domain-specific (ProductCard, CartItem)
```

**When to use**:
- Creating reusable UI elements
- Extracting repeated code
- Building design system components

---

### 🔴 redux/
**Purpose**: Global state management

```
redux/
├── slices/          → Feature-based state slices
│   ├── cartSlice.ts    # Shopping cart logic
│   ├── authSlice.ts    # User authentication
│   └── productsSlice.ts # Product catalog
└── store.ts         → Redux store configuration
```

**State flow**:
```
User Action → Dispatch → Reducer → New State → UI Update
```

---

### 🧭 navigation/
**Purpose**: App navigation structure

```
navigation/
├── types.ts              → Type definitions for routes
├── RootNavigator.tsx     → Main stack navigator
└── MainTabNavigator.tsx  → Bottom tabs (Home, Cart, Profile)
```

**Navigation hierarchy**:
```
RootNavigator (Stack)
  └── MainTabs (Tabs)
      ├── Home
      ├── Cart
      └── Profile
```

---

### 🌐 services/
**Purpose**: External API communication

```
services/
└── api/
    ├── client.ts          → Axios instance + interceptors
    ├── authService.ts     → POST /login, /register
    ├── productService.ts  → GET /products
    └── cartService.ts     → POST /cart/add
```

**API flow**:
```
Component → Service → Axios Client → Backend API
                ↓
         Token interceptor
         Error handling
         Response formatting
```

---

### 🎨 theme/
**Purpose**: Centralized design system

```
theme/
├── colors.ts      → Primary, secondary, gray scales
├── typography.ts  → Font sizes, weights, line heights
└── spacing.ts     → Margins, padding, shadows
```

**Usage**:
```typescript
import {colors, spacing, typography} from '@/theme';

const styles = {
  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    ...typography.button,
  }
};
```

---

### 🪝 hooks/
**Purpose**: Reusable logic extraction

```
hooks/
├── useApi.ts        → API call with loading/error states
├── useDebounce.ts   → Debounce for search inputs
├── useKeyboard.ts   → Keyboard visibility detection
└── useTheme.ts      → Access theme values
```

**Example**:
```typescript
const {data, loading, error, execute} = useApi(fetchProducts);
const debouncedSearch = useDebounce(searchQuery, 500);
```

---

### 🛠️ utils/
**Purpose**: Helper functions

```
utils/
├── validation.ts   → validateEmail(), validatePassword()
├── formatters.ts   → formatCurrency(), formatDate()
└── storage.ts      → AsyncStorage wrapper
```

**Pure functions**:
```typescript
formatCurrency(99.99) // → "$99.99"
validateEmail(email)  // → true/false
storage.set('key', value)
```

---

### 📺 screens/
**Purpose**: Full-page components

```
screens/
├── home/          → Product listing
├── cart/          → Shopping cart
├── product/       → Product details
├── auth/          → Login/Register
└── profile/       → User profile
```

**Organization**:
- One folder per feature
- Screen + supporting components
- Connected to Redux/Navigation

---

## 🔄 Data Flow Diagram

```
┌─────────────┐
│   User UI   │
└──────┬──────┘
       │
       │ (User Action)
       ↓
┌─────────────────┐
│   Components    │
└──────┬──────────┘
       │
       │ dispatch(action)
       ↓
┌─────────────────┐
│  Redux Store    │ ←──────┐
└──────┬──────────┘        │
       │                   │
       │ (State Updated)   │
       ↓                   │
┌─────────────────┐        │
│   Selectors     │        │
└──────┬──────────┘        │
       │                   │
       │ useAppSelector    │
       ↓                   │
┌─────────────────┐        │
│  Components     │        │
│  (Re-render)    │        │
└─────────────────┘        │
                           │
       ┌───────────────────┘
       │
┌──────┴──────────┐
│  API Services   │
│  (Side Effects) │
└─────────────────┘
       │
       │ HTTP Request
       ↓
┌─────────────────┐
│  Backend API    │
└─────────────────┘
```

---

## 📊 File Count Summary

| Folder | Files | Purpose |
|--------|-------|---------|
| **components/** | 6+ | Reusable UI |
| **constants/** | 4 | Configuration |
| **hooks/** | 5 | Custom hooks |
| **navigation/** | 4 | Navigation |
| **redux/** | 5 | State management |
| **screens/** | 2+ | Full screens |
| **services/** | 5 | API layer |
| **theme/** | 4 | Design system |
| **types/** | 1 | Type definitions |
| **utils/** | 4 | Helper functions |

**Total**: ~40 organized files (vs 10 before)

---

## 🎯 Benefits of This Structure

✅ **Scalable** - Easy to add new features  
✅ **Maintainable** - Clear separation of concerns  
✅ **Testable** - Isolated logic  
✅ **Collaborative** - Multiple devs can work simultaneously  
✅ **Discoverable** - Easy to find code  
✅ **Consistent** - Predictable patterns  
✅ **Type-safe** - Full TypeScript coverage  
✅ **Production-ready** - Industry best practices  

---

**This structure supports apps from MVP to enterprise scale!** 🚀
