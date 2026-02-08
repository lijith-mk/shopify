import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';
import {MainTabNavigator} from './MainTabNavigator';
import {colors} from '../theme';

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        },
        headerTintColor: colors.textPrimary,
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}>
      <Stack.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{headerShown: false}}
      />
      {/* Add other screens here as needed */}
    </Stack.Navigator>
  );
};
