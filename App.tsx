/**
 * Shopify Shopping Cart App
 * Built with React Native CLI, TypeScript
 *
 * @format
 */

import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {CartProvider} from './src/context/CartContext';
import {HomeScreen} from './src/screens/HomeScreen';
import {CartScreen} from './src/screens/CartScreen';

type Screen = 'home' | 'cart';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  return (
    <CartProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        {currentScreen === 'home' ? (
          <HomeScreen onNavigateToCart={() => setCurrentScreen('cart')} />
        ) : (
          <CartScreen onNavigateBack={() => setCurrentScreen('home')} />
        )}
      </View>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
