import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootNavigatorParamList} from './types';
import {AuthStackNavigator} from './AuthStackNavigator';
import {AppStackNavigator} from './AppStackNavigator';
import {SplashScreen} from '../screens/splash/SplashScreen';
import {useAppSelector, RootState} from '../redux';
import {storage} from '../utils';
import {STORAGE_KEYS} from '../constants';

const Stack = createStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Get auth state from Redux
  const authState = useAppSelector((state: RootState) => state.auth);

  // Check authentication on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Update authentication when Redux state changes
  useEffect(() => {
    setIsAuthenticated(authState.isAuthenticated);
    if (!isLoading && authState.isAuthenticated) {
      setIsLoading(false);
    }
  }, [authState.isAuthenticated, isLoading]);

  const checkAuthStatus = async () => {
    try {
      // Check if user has valid JWT token
      const token = await storage.get<string>(STORAGE_KEYS.USER_TOKEN);
      const userData = await storage.get(STORAGE_KEYS.USER_DATA);

      if (token && userData) {
        // TODO: Optionally verify token with backend
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      setIsAuthenticated(false);
    } finally {
      // Minimum splash screen duration
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoading ? (
        // Splash Screen - Show while checking auth
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : isAuthenticated ? (
        // App Stack - User is authenticated
        <Stack.Screen name="App" component={AppStackNavigator} />
      ) : (
        // Auth Stack - User needs to login
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  );
};
