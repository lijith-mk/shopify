import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../navigation/types';
import {colors, spacing} from '../../theme';
import {Button} from '../../components/common';
import {useAppSelector} from '../../redux';

type NavigationProp = StackNavigationProp<AppStackParamList, 'Checkout'>;

export const CheckoutScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const cartItems = useAppSelector(state => state.cart.items);
  const total = useAppSelector(state => state.cart.total);

  const handlePlaceOrder = () => {
    // Navigate to order success
    navigation.navigate('OrderSuccess', {
      orderId: 'ORD' + Date.now(),
      total: total,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <View style={styles.card}>
            <Text style={styles.text}>123 Main Street</Text>
            <Text style={styles.text}>New York, NY 10001</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.text}>Items ({cartItems.length})</Text>
              <Text style={styles.text}>${total.toFixed(2)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Delivery Fee</Text>
              <Text style={styles.text}>$5.00</Text>
            </View>
            <View style={[styles.row, styles.totalRow]}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalText}>${(total + 5).toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button title="Place Order" onPress={handlePlaceOrder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.sm,
    marginTop: spacing.sm,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  footer: {
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
