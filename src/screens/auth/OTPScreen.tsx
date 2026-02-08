import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/types';
import {Button} from '../../components/common';
import {colors, spacing} from '../../theme';
import {useAppDispatch} from '../../redux';
import {loginSuccess} from '../../redux/slices/authSlice';
import {storage} from '../../utils';
import {STORAGE_KEYS} from '../../constants';

type OTPRouteProp = RouteProp<AuthStackParamList, 'OTP'>;

export const OTPScreen = () => {
  const route = useRoute<OTPRouteProp>();
  const dispatch = useAppDispatch();

  const {phone} = route.params;

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);

  const inputRefs = useRef<Array<TextInput | null>>([]);

  // Timer for resend OTP
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpCode = otp.join('');

    if (otpCode.length !== 6) {
      Alert.alert('Error', 'Please enter complete OTP');
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with actual API call
      await new Promise<void>(resolve => setTimeout(resolve, 1000));

      // Mock successful verification
      const mockUser = {
        id: '1',
        name: 'John Doe',
        email: 'user@example.com',
        phone: phone,
      };

      const mockToken = 'mock_jwt_token_' + Date.now();

      // Save to AsyncStorage
      await storage.set(STORAGE_KEYS.USER_TOKEN, mockToken);
      await storage.set(STORAGE_KEYS.USER_DATA, mockUser);

      // Update Redux
      dispatch(loginSuccess({user: mockUser, token: mockToken}));

      // Reset navigation to Auth stack root (Login)
      // RootNavigator will automatically switch to App stack
    } catch (err) {
      console.error('OTP verification error:', err);
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      // TODO: Replace with actual API call
      await new Promise<void>(resolve => setTimeout(resolve, 500));
      setResendTimer(60);
      Alert.alert('Success', 'OTP resent successfully');
    } catch {
      Alert.alert('Error', 'Failed to resend OTP');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.icon}>📱</Text>
        <Text style={styles.title}>Verify Phone Number</Text>
        <Text style={styles.subtitle}>
          Enter the 6-digit code sent to{'\n'}
          <Text style={styles.phone}>{phone}</Text>
        </Text>
      </View>

      {/* OTP Input */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => {
              inputRefs.current[index] = ref;
            }}
            style={styles.otpInput}
            value={digit}
            onChangeText={text => handleOtpChange(text, index)}
            onKeyPress={({nativeEvent: {key}}) => handleKeyPress(key, index)}
            keyboardType="number-pad"
            maxLength={1}
            selectTextOnFocus
          />
        ))}
      </View>

      {/* Verify Button */}
      <Button
        title="Verify"
        onPress={handleVerifyOtp}
        loading={loading}
        style={styles.verifyButton}
      />

      {/* Resend OTP */}
      <View style={styles.resendContainer}>
        {resendTimer > 0 ? (
          <Text style={styles.resendText}>
            Resend code in <Text style={styles.timer}>{resendTimer}s</Text>
          </Text>
        ) : (
          <TouchableOpacity onPress={handleResendOtp}>
            <Text style={styles.resendLink}>Resend OTP</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginTop: spacing.xl * 2,
    marginBottom: spacing.xl,
  },
  icon: {
    fontSize: 48,
    marginBottom: spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  phone: {
    fontWeight: '600',
    color: colors.textPrimary,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  otpInput: {
    width: 50,
    height: 56,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  verifyButton: {
    marginTop: spacing.md,
  },
  resendContainer: {
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  resendText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  timer: {
    fontWeight: '600',
    color: colors.primary,
  },
  resendLink: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
});
