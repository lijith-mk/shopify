import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from './types';
import {HomeScreen} from '../screens/home/HomeScreen';
import {CartScreen} from '../screens/cart/CartScreen';
import {colors} from '../theme';
import {useAppSelector} from '../redux';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator = () => {
  const cartItemsCount = useAppSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray500,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: colors.border,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color}) => <CategoryIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarBadge: cartItemsCount > 0 ? cartItemsCount : undefined,
          tabBarIcon: ({color}) => <CartIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({color}) => <HeartIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => <UserIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

// Simple icon components (replace with react-native-vector-icons in production)
const HomeIcon = ({color}: {color: string}) => (
  <>{/* Add icon here */}</>
);
const CategoryIcon = ({color}: {color: string}) => (
  <>{/* Add icon here */}</>
);
const CartIcon = ({color}: {color: string}) => (
  <>{/* Add icon here */}</>
);
const HeartIcon = ({color}: {color: string}) => (
  <>{/* Add icon here */}</>
);
const UserIcon = ({color}: {color: string}) => (
  <>{/* Add icon here */}</>
);
