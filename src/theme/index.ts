import {colors} from './colors';
import {typography, fontSize, fontWeight} from './typography';
import {spacing, borderRadius, shadows} from './spacing';

export const theme = {
  colors,
  typography,
  fontSize,
  fontWeight,
  spacing,
  borderRadius,
  shadows,
};

export type Theme = typeof theme;

export {colors, typography, fontSize, fontWeight, spacing, borderRadius, shadows};
