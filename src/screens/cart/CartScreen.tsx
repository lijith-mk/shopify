import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {CartItemComponent} from '../../components/CartItemComponent';
import {
  useAppDispatch,
  useAppSelector,
  updateQuantity,
  removeFromCart,
  clearCart,
} from '../../redux';
import {EmptyState} from '../../components/common';
import {colors, spacing, typography} from '../../theme';

export const CartScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const {items, total} = useAppSelector(state => state.cart);

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    dispatch(updateQuantity({productId, quantity}));
  };

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    Alert.alert('Clear Cart', 'Are you sure you want to clear the cart?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Clear', onPress: () => dispatch(clearCart()), style: 'destructive'},
    ]);
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      Alert.alert('Cart Empty', 'Please add items to cart before checkout');
      return;
    }

    Alert.alert(
      'Order Placed',
      `Your order of $${total.toFixed(2)} has been placed successfully!`,
      [
        {
          text: 'OK',
          onPress: () => dispatch(clearCart()),
        },
      ],
    );
  };

  if (items.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Shopping Cart</Text>
        </View>
        <EmptyState
          icon="🛒"
          title="Your cart is empty"
          message="Add some products to get started"
          actionLabel="Start Shopping"
          onAction={() => {}}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shopping Cart</Text>
        <TouchableOpacity onPress={handleClearCart}>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        renderItem={({item}) => (
          <CartItemComponent
            item={item}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={handleRemove}
          />
        )}
        keyExtractor={item => item.product.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>
            Checkout ({items.length} items)
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.white,
  },
  title: {
    ...typography.h3,
    color: colors.textPrimary,
  },
  clearText: {
    fontSize: 16,
    color: colors.error,
    fontWeight: '600',
  },
  listContent: {
    padding: spacing.md,
  },
  footer: {
    backgroundColor: colors.white,
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  totalAmount: {
    ...typography.h2,
    color: colors.primary,
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
});
