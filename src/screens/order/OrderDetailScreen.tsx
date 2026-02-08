import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {AppStackParamList} from '../../navigation/types';
import {colors, spacing} from '../../theme';

type OrderDetailRouteProp = RouteProp<AppStackParamList, 'OrderDetail'>;

export const OrderDetailScreen = () => {
  const route = useRoute<OrderDetailRouteProp>();
  const {orderId} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.label}>Order ID</Text>
          <Text style={styles.value}>{orderId}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Status</Text>
          <Text style={[styles.value, styles.statusText]}>Processing</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Order Date</Text>
          <Text style={styles.value}>{new Date().toLocaleDateString()}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Items</Text>
          <Text style={styles.placeholder}>Order items will be listed here</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    marginBottom: spacing.md,
  },
  label: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  statusText: {
    color: colors.primary,
  },
  placeholder: {
    fontSize: 14,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
});
