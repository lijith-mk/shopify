import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Product} from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const {width} = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: product.image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.stock}>
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </Text>
        <TouchableOpacity
          style={[
            styles.button,
            product.stock === 0 && styles.buttonDisabled,
          ]}
          onPress={() => onAddToCart(product)}
          disabled={product.stock === 0}>
          <Text style={styles.buttonText}>
            {product.stock > 0 ? 'Add to Cart' : 'Unavailable'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#f0f0f0',
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    height: 36,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2563eb',
    marginBottom: 4,
  },
  stock: {
    fontSize: 11,
    color: '#666',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});
