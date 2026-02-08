export type RootStackParamList = {
  MainTabs: undefined;
  ProductDetail: {productId: string};
  Checkout: undefined;
  OrderSuccess: {orderId: string};
  Profile: undefined;
  EditProfile: undefined;
  OrderHistory: undefined;
  OrderDetail: {orderId: string};
  Settings: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Categories: undefined;
  Cart: undefined;
  Wishlist: undefined;
  Account: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};
