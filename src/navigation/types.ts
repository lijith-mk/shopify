// Navigation type definitions for type-safe navigation

// Root Navigator - Handles Auth vs App navigation
export type RootNavigatorParamList = {
  Auth: undefined;
  App: undefined;
  Splash: undefined;
};

// Auth Stack - Authentication flow
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  OTP: {phone: string; verificationId: string; verificationType?: string};
  ForgotPassword: undefined;
  ResetPassword: {token: string};
};

// App Stack - Main app navigation after authentication
export type AppStackParamList = {
  MainTabs: {screen?: keyof MainTabParamList} | undefined;
  ProductDetail: {productId: string; productName?: string};
  ProductList: {category?: string; search?: string};
  Checkout: undefined;
  Payment: {orderId: string; amount: number};
  OrderSuccess: {orderId: string; total: number};
  OrderDetail: {orderId: string};
  EditProfile: undefined;
  Settings: undefined;
  Notifications: undefined;
  Search: undefined;
};

// Bottom Tab Navigator - Main tabs in the app
export type MainTabParamList = {
  Home: undefined;
  Categories: undefined;
  Cart: undefined;
  Orders: undefined;
  Profile: undefined;
};

// Declare global navigation types for useNavigation hook
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigatorParamList {}
  }
}
