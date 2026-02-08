import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

// Screen Breakpoints
export const BREAKPOINTS = {
  SMALL: 320,
  MEDIUM: 375,
  LARGE: 414,
  EXTRA_LARGE: 768,
};

export const isSmallDevice = width <= BREAKPOINTS.MEDIUM;
export const isMediumDevice = width > BREAKPOINTS.MEDIUM && width <= BREAKPOINTS.LARGE;
export const isLargeDevice = width > BREAKPOINTS.LARGE;

// Status Bar Heights
export const STATUS_BAR_HEIGHT = IS_IOS ? 44 : 0;

// Bottom Tab Bar Height
export const TAB_BAR_HEIGHT = IS_IOS ? 83 : 60;

// Header Heights
export const HEADER_HEIGHT = IS_IOS ? 44 : 56;
