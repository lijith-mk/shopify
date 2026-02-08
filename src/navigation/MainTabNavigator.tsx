import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from './types';
import {HomeScreen} from '../screens/home/HomeScreen';
import {CartScreen} from '../screens/cart/CartScreen';
import {OrdersScreen} from '../screens/orders/OrdersScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {CategoriesScreen} from '../screens/categories/CategoriesScreen';
import {colors} from '../theme';
import {useAppSelector, RootState} from '../redux';

const Tab = createBottomTabNavigator<MainTabParamList>();

// Tab Icon Component
interface TabIconProps {
  label: string;
  color: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({label, color, focused}) => (
  <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
    <Text style={[styles.icon, {color}]}>{label}</Text>
  </View>
);

// Icon renderers
const HomeIcon = ({color, focused}: {color: string; focused: boolean}) => (
  <TabIcon label="🏠" color={color} focused={focused} />
);

const CategoriesIcon = ({color, focused}: {color: string; focused: boolean}) => (
  <TabIcon label="📂" color={color} focused={focused} />
);

const CartIcon = ({color, focused}: {color: string; focused: boolean}) => (
  <TabIcon label="🛒" color={color} focused={focused} />
);

const OrdersIcon = ({color, focused}: {color: string; focused: boolean}) => (
  <TabIcon label="📦" color={color} focused={focused} />
);

const ProfileIcon = ({color, focused}: {color: string; focused: boolean}) => (
  <TabIcon label="👤" color={color} focused={focused} />
);

export const MainTabNavigator = () => {
  const cartItemsCount = useAppSelector((state: RootState) =>
    state.cart.items.reduce(
      (sum: number, item: any) => sum + item.quantity,
      0,
    ),
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray500,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: -2},
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: CategoriesIcon,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarBadge: cartItemsCount > 0 ? cartItemsCount : undefined,
          tabBarIcon: CartIcon,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: OrdersIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 28,
  },
  iconContainerFocused: {
    transform: [{scale: 1.1}],
  },
  icon: {
    fontSize: 24,
  },
});
