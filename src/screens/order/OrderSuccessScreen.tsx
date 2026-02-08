import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../navigation/types';
import {colors, spacing} from '../../theme';
import {Button} from '../../components/common';

type OrderSuccessRouteProp = RouteProp<AppStackParamList, 'OrderSuccess'>;
type NavigationProp = StackNavigationProp<
  AppStackParamList,
  'OrderSuccess'
>;

export const OrderSuccessScreen = () => {
  const route = useRoute<OrderSuccessRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const {orderId, total} = route.params;

  const handleContinueShopping = () => {
    navigation.navigate('MainTabs', {screen: 'Home'});
  };

  const handleViewOrders = () => {
    navigation.navigate('MainTabs', {screen: 'Orders'});
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>✅</Text>
        <Text style={styles.title}>Order Placed Successfully!</Text>
        <Text style={styles.subtitle}>
          Your order has been confirmed and will be delivered soon
        </Text>

        <View style={styles.orderCard}>
          <Text style={styles.orderLabel}>Order ID</Text>
          <Text style={styles.orderId}>{orderId}</Text>
          <Text style={styles.orderLabel}>Total Amount</Text>
          <Text style={styles.amount}>${total.toFixed(2)}</Text>
        </View>

        <Button
          title="View Orders"
          onPress={handleViewOrders}
          style={styles.button}
        />
        <Button
          title="Continue Shopping"
          onPress={handleContinueShopping}
          variant="outline"
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  icon: {
    fontSize: 80,
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  orderCard: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: spacing.lg,
    width: '100%',
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  orderLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  button: {
    marginBottom: spacing.md,
    width: '100%',
  },
});
