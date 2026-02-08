import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from './types';
import {MainTabNavigator} from './MainTabNavigator';
import {colors} from '../theme';
import {ProductDetailScreen} from '../screens/product/ProductDetailScreen';
import {CheckoutScreen} from '../screens/checkout/CheckoutScreen';
import {OrderSuccessScreen} from '../screens/order/OrderSuccessScreen';
import {OrderDetailScreen} from '../screens/order/OrderDetailScreen';
import {EditProfileScreen} from '../screens/profile';
import {SettingsScreen} from '../screens/settings/SettingsScreen';

const Stack = createStackNavigator<AppStackParamList>();

type ProductDetailScreenProps = StackScreenProps<
  AppStackParamList,
  'ProductDetail'
>;

export const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
          elevation: 2,
          shadowOpacity: 0.1,
          shadowRadius: 4,
          shadowOffset: {width: 0, height: 2},
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        },
        headerTintColor: colors.textPrimary,
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 18,
        },
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}>
      {/* Main Tabs - Entry point */}
      <Stack.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{headerShown: false}}
      />

      {/* Product Screens */}
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({route}: ProductDetailScreenProps) => ({
          title: route.params.productName || 'Product Details',
        })}
      />

      {/* Checkout Flow */}
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          title: 'Checkout',
        }}
      />

      {/* Order Screens */}
      <Stack.Screen
        name="OrderSuccess"
        component={OrderSuccessScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={{
          title: 'Order Details',
        }}
      />

      {/* Profile & Settings */}
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          title: 'Edit Profile',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
};
