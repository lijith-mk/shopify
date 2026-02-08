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
import {CartItemComponent} from '../components/CartItemComponent';
import {useCart} from '../context/CartContext';

interface CartScreenProps {
  onNavigateBack: () => void;
}

export const CartScreen: React.FC<CartScreenProps> = ({onNavigateBack}) => {
  const {cart, updateQuantity, removeFromCart, clearCart, getCartTotal} =
    useCart();

  const total = getCartTotal();

  const handleCheckout = () => {
    if (cart.length === 0) {
      Alert.alert('Cart Empty', 'Please add items to cart before checkout');
      return;
    }

    Alert.alert(
      'Order Placed',
      `Your order of $${total.toFixed(2)} has been placed successfully!`,
      [
        {
          text: 'OK',
          onPress: () => {
            clearCart();
            onNavigateBack();
          },
        },
      ],
    );
  };

  const handleClearCart = () => {
    Alert.alert('Clear Cart', 'Are you sure you want to clear the cart?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Clear', onPress: clearCart, style: 'destructive'},
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onNavigateBack} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Shopping Cart</Text>
        {cart.length > 0 && (
          <TouchableOpacity onPress={handleClearCart}>
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>

      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🛒</Text>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <TouchableOpacity style={styles.shopButton} onPress={onNavigateBack}>
            <Text style={styles.shopButtonText}>Start Shopping</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={({item}) => (
              <CartItemComponent
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
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
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handleCheckout}>
              <Text style={styles.checkoutButtonText}>
                Checkout ({cart.length} items)
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    fontSize: 24,
    color: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  clearText: {
    fontSize: 16,
    color: '#ef4444',
    fontWeight: '600',
  },
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 24,
  },
  shopButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  shopButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2563eb',
  },
  checkoutButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
