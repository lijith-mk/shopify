/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

// Mock StatusBar before importing App
jest.mock('react-native/Libraries/Components/StatusBar/StatusBar', () => 'StatusBar');

import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it, describe} from '@jest/globals';

describe('App', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<App />);
    expect(tree).toBeTruthy();
  });
});
