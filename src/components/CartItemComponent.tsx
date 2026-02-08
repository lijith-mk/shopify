import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CartItem} from '../types';

interface CartItemComponentProps {
  item: CartItem;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export const CartItemComponent: React.FC<CartItemComponentProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  const {product, quantity} = item;
  const subtotal = product.price * quantity;

  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => onUpdateQuantity(product.id, quantity - 1)}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => onUpdateQuantity(product.id, quantity + 1)}
            disabled={quantity >= product.stock}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity onPress={() => onRemove(product.id)}>
          <Text style={styles.removeText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.subtotal}>${subtotal.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  details: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 28,
    height: 28,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 12,
    minWidth: 20,
    textAlign: 'center',
  },
  rightSection: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  removeText: {
    fontSize: 20,
    color: '#999',
    padding: 4,
  },
  subtotal: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2563eb',
  },
});
