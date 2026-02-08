# React Navigation Implementation Guide

## ✅ Completed Implementation

This document describes the complete React Navigation setup with authentication flow, protected routes, and deep linking for the Shopify React Native app.

---

## 📁 Navigation Structure

```
src/navigation/
├── types.ts                    # TypeScript type definitions
├── RootNavigator.tsx           # Main navigator with auth logic
├── AuthStackNavigator.tsx      # Authentication screens
├── AppStackNavigator.tsx       # Authenticated app screens
├── MainTabNavigator.tsx        # Bottom tab navigation
└── linking.ts                  # Deep linking configuration
```

---

## 🎯 Navigation Architecture

### 1. **RootNavigator** (Entry Point)
- Checks authentication status on app launch
- Shows **SplashScreen** while loading
- Routes to **Auth Stack** if not authenticated
- Routes to **App Stack** if authenticated
- Listens to Redux auth state changes

### 2. **Auth Stack** (Login Flow)
Screens:
- `Login` - User login with email/password
- `Register` - New user registration
- `OTP` - Phone verification with 6-digit code
- `ForgotPassword` - Password reset flow

### 3. **App Stack** (Main App)
Screens:
- `MainTabs` - Bottom tab navigator (entry point)
- `ProductDetail` - Product details page
- `Checkout` - Checkout flow
- `OrderSuccess` - Order confirmation
- `OrderDetail` - Order details
- `EditProfile` - Profile editing
- `Settings` - App settings

### 4. **Main Tabs** (Bottom Navigation)
Tabs:
- 🏠 **Home** - Product listing
- 📂 **Categories** - Product categories
- 🛒 **Cart** - Shopping cart (with badge)
- 📦 **Orders** - Order history
- 👤 **Profile** - User profile

---

## 🔐 Authentication Flow

### Initial Load
```
App Launch
    ↓
SplashScreen (1.5s)
    ↓
Check AsyncStorage for JWT token
    ↓
├─ Token exists → App Stack (MainTabs)
└─ No token → Auth Stack (Login)
```

### Login Flow
```
Login Screen
    ↓
Enter credentials
    ↓
API call (mock)
    ↓
Save token + user to AsyncStorage
    ↓
Dispatch loginSuccess to Redux
    ↓
RootNavigator auto-switches to App Stack
```

### Registration Flow
```
Register Screen
    ↓
Fill registration form
    ↓
Navigate to OTP Screen
    ↓
Verify 6-digit OTP
    ↓
Save token + user to AsyncStorage
    ↓
Dispatch loginSuccess to Redux
    ↓
Navigate to App Stack
```

### Logout Flow
```
Profile Screen → Logout
    ↓
Show confirmation dialog
    ↓
Clear AsyncStorage (token + user data)
    ↓
Dispatch logout action to Redux
    ↓
RootNavigator auto-switches to Auth Stack
```

---

## 🔗 Deep Linking Configuration

### Supported URL Schemes

#### Custom URL Scheme
```
shopify://home
shopify://product/123
shopify://cart
shopify://auth/login
```

#### Universal Links (Production)
```
https://shopify.app/product/123
https://shopify.app/cart
https://shopify.app/auth/login
```

### Deep Link Mapping

| Path | Screen | Parameters |
|------|--------|------------|
| `shopify://home` | Home | - |
| `shopify://product/:productId` | ProductDetail | productId, productName |
| `shopify://cart` | Cart | - |
| `shopify://checkout` | Checkout | - |
| `shopify://order/:orderId` | OrderDetail | orderId |
| `shopify://order/success/:orderId` | OrderSuccess | orderId, total |
| `shopify://profile/edit` | EditProfile | - |
| `shopify://settings` | Settings | - |
| `shopify://auth/login` | Login | - |
| `shopify://auth/register` | Register | - |

### Testing Deep Links

**Android (ADB):**
```bash
adb shell am start -W -a android.intent.action.VIEW -d "shopify://product/123" com.awesomeproject
```

**iOS (Simulator):**
```bash
xcrun simctl openurl booted "shopify://product/123"
```

**Browser (Universal Links):**
```
https://shopify.app/product/123
```

---

## 📝 Type-Safe Navigation

### Using Navigation Hook
```typescript
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

const MyScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  
  // Type-safe navigation
  navigation.navigate('ProductDetail', {
    productId: '123',
    productName: 'iPhone 15',
  });
};
```

### Using Route Hook
```typescript
import {useRoute, RouteProp} from '@react-navigation/native';
import {AppStackParamList} from '../navigation/types';

type ProductDetailRouteProp = RouteProp<AppStackParamList, 'ProductDetail'>;

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const {productId, productName} = route.params; // Type-safe params
};
```

---

## 🛡️ Protected Routes

### How It Works
1. **RootNavigator** checks authentication on mount
2. Reads JWT token from AsyncStorage
3. Updates `isAuthenticated` state
4. Conditionally renders Auth Stack or App Stack
5. Listens to Redux auth state changes

### Manual Protection (Optional)
Create a `ProtectedRoute` wrapper:
```typescript
// src/components/ProtectedRoute.tsx
const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const navigation = useNavigation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate('Auth', {screen: 'Login'});
    }
  }, [isAuthenticated]);

  return isAuthenticated ? children : null;
};
```

---

## 🎨 Navigation Styling

### Header Customization
```typescript
<Stack.Screen
  name="ProductDetail"
  component={ProductDetailScreen}
  options={({route}) => ({
    title: route.params.productName || 'Product Details',
    headerBackTitle: 'Back',
    headerStyle: {
      backgroundColor: colors.white,
    },
    headerTintColor: colors.textPrimary,
  })}
/>
```

### Tab Bar Customization
```typescript
<Tab.Navigator
  screenOptions={{
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.gray500,
    tabBarStyle: {
      height: 60,
      paddingBottom: 5,
      paddingTop: 5,
    },
  }}
>
```

---

## 🔄 Navigation Between Stacks

### Navigate to Nested Tab Screen
```typescript
navigation.navigate('MainTabs', {screen: 'Orders'});
```

### Navigate from Tab to Stack Screen
```typescript
// From Home tab to ProductDetail
navigation.navigate('ProductDetail', {
  productId: '123',
  productName: 'iPhone 15',
});
```

### Reset Navigation Stack
```typescript
navigation.reset({
  index: 0,
  routes: [{name: 'MainTabs', params: {screen: 'Home'}}],
});
```

---

## 📦 Dependencies

All navigation dependencies are already installed:

```json
{
  "@react-navigation/native": "^7.0.13",
  "@react-navigation/stack": "^7.1.1",
  "@react-navigation/bottom-tabs": "^7.2.0",
  "react-native-gesture-handler": "^2.22.1",
  "react-native-reanimated": "^3.16.5",
  "react-native-screens": "^4.4.0",
  "react-native-safe-area-context": "^5.1.3"
}
```

---

## 🚀 Next Steps

### To Enable Deep Links:

#### Android (`android/app/src/main/AndroidManifest.xml`):
```xml
<intent-filter>
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="shopify" />
  <data android:scheme="https" android:host="shopify.app" />
</intent-filter>
```

#### iOS (`ios/AwesomeProject/Info.plist`):
```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>shopify</string>
    </array>
  </dict>
</array>
```

### To Add Icons:
Install react-native-vector-icons:
```bash
npm install react-native-vector-icons
npx pod-install
```

Replace emoji icons with proper icons in [MainTabNavigator.tsx](src/navigation/MainTabNavigator.tsx).

---

## 📚 Resources

- [React Navigation Docs](https://reactnavigation.org/docs/getting-started)
- [Deep Linking Guide](https://reactnavigation.org/docs/deep-linking)
- [TypeScript Guide](https://reactnavigation.org/docs/typescript)
- [Authentication Flow](https://reactnavigation.org/docs/auth-flow)

---

## ✨ Features Summary

✅ **Auth Stack** - Login, Register, OTP, Forgot Password  
✅ **App Stack** - Main app screens with nested navigation  
✅ **Bottom Tabs** - 5 tabs with cart badge  
✅ **Protected Routes** - JWT-based authentication  
✅ **Deep Linking** - Custom URL scheme + Universal links  
✅ **Type Safety** - Full TypeScript support  
✅ **Redux Integration** - Auth state management  
✅ **AsyncStorage** - Token persistence  
✅ **Auto Navigation** - Auth state listeners  

---

**Navigate with confidence! 🛍️🚀**
