import {LinkingOptions} from '@react-navigation/native';
import {RootNavigatorParamList} from './types';

/**
 * Deep Linking Configuration
 * 
 * This configuration enables the app to respond to deep links and universal links.
 * 
 * Configuration:
 * - Android: Add intent filters in AndroidManifest.xml
 * - iOS: Add URL schemes in Info.plist
 * 
 * Example URLs:
 * - shopify://product/123
 * - https://shopify.app/product/123
 * - shopify://auth/login
 * - shopify://cart
 */

export const linkingConfig: LinkingOptions<RootNavigatorParamList> = {
  prefixes: [
    'shopify://', // Custom URL scheme
    'https://shopify.app', // Universal link (production)
    'https://*.shopify.app', // Universal link wildcard
  ],
  config: {
    screens: {
      // Splash Screen
      Splash: 'splash',

      // Auth Stack
      Auth: {
        screens: {
          Login: 'auth/login',
          Register: 'auth/register',
          OTP: 'auth/otp',
          ForgotPassword: 'auth/forgot-password',
        },
      },

      // App Stack
      App: {
        screens: {
          // Main Tabs
          MainTabs: {
            screens: {
              Home: 'home',
              Categories: 'categories',
              Cart: 'cart',
              Orders: 'orders',
              Profile: 'profile',
            },
          },

          // Product Screens
          ProductDetail: {
            path: 'product/:productId',
            parse: {
              productId: (productId: string) => productId,
            },
          },

          // Checkout Flow
          Checkout: 'checkout',
          
          // Order Screens
          OrderSuccess: {
            path: 'order/success/:orderId',
            parse: {
              orderId: (orderId: string) => orderId,
            },
          },
          OrderDetail: {
            path: 'order/:orderId',
            parse: {
              orderId: (orderId: string) => orderId,
            },
          },

          // Profile & Settings
          EditProfile: 'profile/edit',
          Settings: 'settings',
        },
      },
    },
  },
};

/**
 * How to test deep links:
 * 
 * Android:
 * adb shell am start -W -a android.intent.action.VIEW -d "shopify://product/123" com.awesomeproject
 * 
 * iOS:
 * xcrun simctl openurl booted "shopify://product/123"
 * 
 * Browser (if universal links configured):
 * https://shopify.app/product/123
 */
