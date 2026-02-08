import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {AppStackParamList} from '../../navigation/types';
import {colors, spacing} from '../../theme';
import {Button} from '../../components/common';

type ProductDetailRouteProp = RouteProp<AppStackParamList, 'ProductDetail'>;

export const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const {productId, productName} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.placeholder}>📷</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.price}>$99.99</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            This is a sample product description. In a real app, this would
            fetch product details from an API using the productId: {productId}
          </Text>
        </View>

        <Button title="Add to Cart" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    height: 300,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    fontSize: 64,
  },
  content: {
    padding: spacing.lg,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.lg,
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
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});
