/**
 * Shopify Shopping Cart App
 * Built with React Native CLI, TypeScript, React Navigation 7
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {store} from './src/redux';
import {RootNavigator} from './src/navigation/RootNavigator';
import {linkingConfig} from './src/navigation/linking';
import {colors} from './src/theme';

function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <Provider store={store}>
        <NavigationContainer linking={linkingConfig}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={colors.white}
            translucent={false}
          />
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = {
  root: {flex: 1},
};

export default App;
