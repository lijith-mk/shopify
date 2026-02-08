# React Native CLI Shopping Cart - Quick Reference

## ✅ Status: FULLY IMPLEMENTED

This project is a complete React Native CLI shopping cart application with TypeScript and full Android + iOS support.

---

## 📋 Recommended Versions

| Requirement | Version | Notes |
|------------|---------|-------|
| **Node.js** | 20.x LTS | Required for React Native 0.83+ |
| **npm** | 10+ | Comes with Node.js |
| **JDK** | 17 | Amazon Corretto or Oracle JDK |
| **React Native** | 0.83.1 | Latest stable (included) |
| **TypeScript** | 5.8.3 | Already configured |
| **Android Studio** | Electric Eel+ | For Android development |
| **Xcode** | 15+ | For iOS (macOS only) |
| **CocoaPods** | 1.15+ | For iOS dependencies |

---

## 🚀 Exact CLI Commands

### Initial Setup (First Time Only)

```bash
# 1. Install Node.js dependencies
npm install

# 2. iOS Only - Install Ruby Bundler (first time)
bundle install

# 3. iOS Only - Install CocoaPods dependencies
bundle exec pod install
```

### Running the App

```bash
# Start Metro Bundler (Keep running in one terminal)
npm start

# In a NEW terminal:

# Run on Android Emulator/Device
npm run android

# Run on iOS Simulator/Device (macOS only)
npm run ios
```

### Alternative: Run on Specific Device

```bash
# Android - List devices
adb devices

# Android - Run on specific device
npx react-native run-android --deviceId=DEVICE_ID

# iOS - List simulators
xcrun simctl list devices

# iOS - Run on specific simulator
npx react-native run-ios --simulator="iPhone 15 Pro"
```

---

## 📱 Initial Project Structure Created

```
shopify/
├── App.tsx                            # ✅ Updated with shopping cart
├── src/
│   ├── components/
│   │   ├── ProductCard.tsx            # ✅ Created
│   │   └── CartItemComponent.tsx      # ✅ Created
│   ├── screens/
│   │   ├── HomeScreen.tsx             # ✅ Created
│   │   └── CartScreen.tsx             # ✅ Created
│   ├── context/
│   │   └── CartContext.tsx            # ✅ Created
│   ├── data/
│   │   └── products.ts                # ✅ Created (8 products)
│   └── types/
│       └── index.ts                   # ✅ Created
├── android/                           # ✅ Configured
├── ios/                               # ✅ Configured
├── package.json                       # ✅ Updated (name: shopify)
├── SETUP_GUIDE.md                     # ✅ Created
└── README.md                          # ✅ Updated
```

---

## 🛠️ Common Setup Errors & Fixes

### Error 1: "Command not found: react-native"

**Cause**: React Native CLI not installed globally

**Fix**:
```bash
# Use npx instead (recommended)
npx react-native run-android

# Or install globally
npm install -g react-native-cli
```

---

### Error 2: "ANDROID_HOME not set"

**Cause**: Android SDK environment variable not configured

**Fix (Windows PowerShell)**:
```powershell
[System.Environment]::SetEnvironmentVariable('ANDROID_HOME', 'C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk', 'User')
```

**Fix (macOS/Linux)**:
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

---

### Error 3: "SDK location not found" (Android)

**Cause**: Android SDK path not configured

**Fix**: Create `android/local.properties`:
```properties
sdk.dir=C:\\Users\\YOUR_USERNAME\\AppData\\Local\\Android\\Sdk
```

For macOS:
```properties
sdk.dir=/Users/YOUR_USERNAME/Library/Android/sdk
```

---

### Error 4: "No devices/emulators found"

**Android Fix**:
```bash
# Create a new Android Virtual Device in Android Studio
# OR connect physical device with USB debugging enabled

# Verify device is connected
adb devices
```

**iOS Fix**:
```bash
# Open iOS Simulator
open -a Simulator

# Or use Xcode -> Open Developer Tool -> Simulator
```

---

### Error 5: "CocoaPods could not find compatible versions"

**Cause**: iOS dependency version conflicts

**Fix**:
```bash
cd ios
rm -rf Podfile.lock
rm -rf Pods
pod repo update
pod install --repo-update
cd ..
```

---

### Error 6: "Port 8081 already in use"

**Cause**: Another Metro instance running

**Fix**:
```bash
# Kill existing Metro process
npx react-native start --reset-cache

# Or use different port
npx react-native start --port 8082
```

---

### Error 7: "Gradle build failed"

**Cause**: Gradle cache or daemon issues

**Fix**:
```bash
cd android
./gradlew clean
./gradlew --stop
cd ..
npm run android
```

---

### Error 8: "Unable to resolve module"

**Cause**: Metro bundler cache issue

**Fix**:
```bash
# Clear all caches
npx react-native start --reset-cache

# If that doesn't work
rm -rf node_modules
npm install
npx react-native start --reset-cache
```

---

## 🧪 Verify Installation

### Check Node.js & npm:
```bash
node --version  # Should show v20.x.x
npm --version   # Should show 10.x.x
```

### Check JDK:
```bash
java -version   # Should show version 17
```

### Check Android SDK:
```bash
# Windows
echo %ANDROID_HOME%

# macOS/Linux
echo $ANDROID_HOME
```

### Check Xcode (macOS):
```bash
xcodebuild -version  # Should show Xcode 15+
```

---

## 🎯 Features Implemented

### Product Catalog:
- ✅ 8 products with images
- ✅ Product details (name, price, stock)
- ✅ Category filtering
- ✅ Search functionality
- ✅ Grid layout

### Shopping Cart:
- ✅ Add/remove products
- ✅ Quantity controls
- ✅ Stock validation
- ✅ Real-time total
- ✅ Cart badge counter
- ✅ Clear cart
- ✅ Checkout flow

### Technical:
- ✅ TypeScript configured
- ✅ Context API state management
- ✅ Type-safe components
- ✅ Android support
- ✅ iOS support
- ✅ Responsive design

---

## 📞 Quick Help Commands

```bash
# View available commands
npm run

# Check React Native environment
npx react-native doctor

# View Android logs
npx react-native log-android

# View iOS logs
npx react-native log-ios

# Clean and reinstall everything
rm -rf node_modules
npm install
cd ios && pod install && cd ..
npm start -- --reset-cache
```

---

## 🎓 Next Steps

After successful setup:
1. ✅ Run `npm install`
2. ✅ Run `bundle exec pod install` (iOS only)
3. ✅ Start Metro: `npm start`
4. ✅ Run app: `npm run android` or `npm run ios`
5. ✅ Open in VS Code/editor
6. ✅ Start coding!

---

## 📚 Additional Resources

- [React Native Docs](https://reactnative.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Android Studio Setup](https://developer.android.com/studio)
- [Xcode Setup](https://developer.apple.com/xcode)

---

**All features are implemented and ready to run! 🎉**
