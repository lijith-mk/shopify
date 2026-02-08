import {useEffect, useState} from 'react';
import {Keyboard, KeyboardEvent} from 'react-native';

export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardWillShow = (e: KeyboardEvent) => {
      setKeyboardHeight(e.endCoordinates.height);
      setIsKeyboardVisible(true);
    };

    const keyboardWillHide = () => {
      setKeyboardHeight(0);
      setIsKeyboardVisible(false);
    };

    const showSubscription = Keyboard.addListener(
      'keyboardWillShow',
      keyboardWillShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardWillHide',
      keyboardWillHide,
    );

    // Fallback for Android
    const didShowSubscription = Keyboard.addListener(
      'keyboardDidShow',
      keyboardWillShow,
    );
    const didHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      keyboardWillHide,
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
      didShowSubscription.remove();
      didHideSubscription.remove();
    };
  }, []);

  return {
    keyboardHeight,
    isKeyboardVisible,
  };
};
