import {VALIDATION} from '../constants';

export const validateEmail = (email: string): boolean => {
  return VALIDATION.EMAIL_REGEX.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return VALIDATION.PHONE_REGEX.test(phone);
};

export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < VALIDATION.PASSWORD_MIN_LENGTH) {
    errors.push(`Password must be at least ${VALIDATION.PASSWORD_MIN_LENGTH} characters`);
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateName = (name: string): boolean => {
  return (
    name.length >= VALIDATION.NAME_MIN_LENGTH &&
    name.length <= VALIDATION.NAME_MAX_LENGTH
  );
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};
