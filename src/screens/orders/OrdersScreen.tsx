import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors, spacing} from '../../theme';
import {EmptyState} from '../../components/common';

export const OrdersScreen = () => {
  const orders: any[] = []; // Mock empty orders

  if (orders.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Orders</Text>
        </View>
        <EmptyState
          icon="📦"
          title="No Orders Yet"
          message="Your order history will appear here"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Orders will be displayed here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  content: {
    padding: spacing.lg,
  },
});
