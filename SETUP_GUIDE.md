# Shopify Shopping Cart - React Native CLI App

A full-featured shopping cart application built with React Native CLI, TypeScript, and support for both Android and iOS platforms.

## ✅ Project Status

**COMPLETED** - All shopping cart functionality is fully implemented and ready to run!

## 📋 Requirements

### Recommended Versions:
- **Node.js**: 20.x or higher (LTS recommended)
- **npm/yarn**: Latest stable
- **JDK**: 17 (Amazon Corretto or Oracle JDK)
- **React Native**: 0.83.1 (latest stable)
- **TypeScript**: 5.8.3

### Platform-Specific Requirements:

#### Android:
- Android Studio (Electric Eel or later)
- Android SDK (API 34+)
- Android Emulator or physical device

#### iOS (macOS only):
- Xcode 15+
- CocoaPods 1.15+
- iOS Simulator or physical device

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Install iOS Dependencies (macOS only)

```bash
cd ios
pod install
cd ..
```

### 3. Run the App

#### Android:
```bash
# Start Metro bundler
npm start

# In a new terminal
npm run android
```

#### iOS (macOS only):
```bash
# Start Metro bundler
npm start

# In a new terminal
npm run ios
```

---

## 📁 Project Structure

```
shopify/
├── App.tsx                      # Main app entry with navigation
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── ProductCard.tsx      # Product display card
│   │   └── CartItemComponent.tsx # Cart item with quantity controls
│   ├── screens/                 # App screens
│   │   ├── HomeScreen.tsx       # Product listing & search
│   │   └── CartScreen.tsx       # Shopping cart & checkout
│   ├── context/                 # State management
│   │   └── CartContext.tsx      # Cart context provider
│   ├── data/                    # Mock data
│   │   └── products.ts          # Product catalog
│   └── types/                   # TypeScript definitions
│       └── index.ts             # Type definitions
├── android/                     # Android native code
├── ios/                         # iOS native code
└── package.json                 # Dependencies & scripts
```

---

## 🎯 Features Implemented

### ✅ Product Catalog
- Display 8+ products with images, prices, and stock levels
- Category filtering (Electronics, Accessories)
- Real-time search functionality
- Responsive grid layout

### ✅ Shopping Cart
- Add/remove products
- Quantity adjustment with stock validation
- Real-time total calculation
- Cart item count badge
- Clear cart functionality
- Empty cart state

### ✅ User Experience
- Smooth navigation between screens
- Visual feedback for all interactions
- Stock availability indicators
- Checkout confirmation alerts
- Clean, modern UI design

---

## 🛠️ Common Setup Issues & Fixes

### Issue 1: Metro Bundler Port Conflict
**Error**: `Port 8081 already in use`

**Fix**:
```bash
npx react-native start --reset-cache
# Or kill the process
npx react-native start --port 8082
```

---

### Issue 2: Android Build Fails - Gradle Daemon
**Error**: `Gradle build daemon disappeared unexpectedly`

**Fix**:
```bash
cd android
./gradlew clean
cd ..
npm run android
```

---

### Issue 3: iOS CocoaPods Issues
**Error**: `Pod install failed`

**Fix**:
```bash
cd ios
pod deintegrate
pod install
cd ..
```

---

### Issue 4: Android SDK Not Found
**Error**: `SDK location not found`

**Fix**: Create `android/local.properties`:
```properties
sdk.dir=C:\\Users\\YOUR_USERNAME\\AppData\\Local\\Android\\Sdk
```

---

### Issue 5: TypeScript Errors
**Error**: Type errors in project

**Fix**:
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npx react-native start --reset-cache
```

---

### Issue 6: White Screen on Launch
**Error**: App shows white screen

**Fix**:
```bash
# Clear bundler cache
npx react-native start --reset-cache

# Reinstall app
npm run android  # or npm run ios
```

---

## 🧪 Testing

```bash
# Run Jest tests
npm test

# Run tests in watch mode
npm test -- --watch
```

---

## 📱 Running on Physical Device

### Android:
1. Enable Developer Options on your Android device
2. Enable USB Debugging
3. Connect via USB
4. Run: `npm run android`

### iOS:
1. Open `ios/shopify.xcworkspace` in Xcode
2. Select your device from the target menu
3. Click Run (▶️) or press Cmd+R

---

## 🔧 Development Commands

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run linter
npm run lint

# Run tests
npm test

# Clear cache
npx react-native start --reset-cache
```

---

## 🎨 Customization

### Adding New Products
Edit `src/data/products.ts`:

```typescript
{
  id: '9',
  name: 'New Product',
  price: 49.99,
  description: 'Product description',
  image: 'https://via.placeholder.com/200',
  category: 'Electronics',
  stock: 10,
}
```

### Changing Theme Colors
Update styles in component files or create a theme file:

```typescript
const theme = {
  primary: '#2563eb',
  danger: '#ef4444',
  background: '#f5f5f5',
};
```

---

## 📦 Dependencies

### Core:
- `react`: 19.2.0
- `react-native`: 0.83.1
- `typescript`: 5.8.3

### Additional:
- `react-native-safe-area-context`: ^5.5.2

---

## 🐛 Debugging

### Enable Debug Menu:
- **Android**: Shake device or press `Cmd+M` (Mac) / `Ctrl+M` (Windows)
- **iOS**: Shake device or press `Cmd+D`

### View Logs:
```bash
# Android
npx react-native log-android

# iOS
npx react-native log-ios
```

---

## 🚀 Production Build

### Android APK:
```bash
cd android
./gradlew assembleRelease
# Output: android/app/build/outputs/apk/release/app-release.apk
```

### iOS Archive:
1. Open Xcode
2. Product → Archive
3. Follow distribution wizard

---

## 📄 License

This is a demo project for educational purposes.

---

## 👨‍💻 Developer Notes

- Uses Context API for state management (no Redux needed for this scope)
- Simple navigation without React Navigation (can be added if needed)
- Mock data - ready to connect to REST API or GraphQL
- Follows React Native best practices
- TypeScript for type safety
- Responsive design for various screen sizes

---

## 🆘 Need Help?

If you encounter issues:
1. Check the "Common Setup Issues" section above
2. Clear cache: `npm start -- --reset-cache`
3. Clean build: `cd android && ./gradlew clean` or clean iOS build in Xcode
4. Reinstall dependencies: `rm -rf node_modules && npm install`

---

**Built with ❤️ using React Native CLI + TypeScript**
