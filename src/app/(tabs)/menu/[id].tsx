import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/products'
import Colors from '@/constants/Colors'
import Button from '@/components/Button'

const sizes = ['S', 'M', 'L', 'XL']

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams()

  const [selectedSize, setSelectedSize] = useState('M')

  const product = products.find((p) => p.id.toString() === id)

  const addToCart = () => {
    console.warn('Adding to Cart, size: ', selectedSize)
  }

  if (!product) {
    return <Text>Product Not Found</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Details: ' + id }}></Stack.Screen>
      <Image
        style={styles.image}
        source={{ uri: product.image }}
        resizeMode="contain"
      />
      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? 'gainsboro' : 'white',
              },
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: selectedSize === size ? 'black' : 'gray',
                },
              ]}
              key={size}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text="Add to Cart" />
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    flex: 1,
    padding: 10,
  },
  title: { fontSize: 18, fontWeight: '600', marginVertical: 10 },
  price: { fontSize: 18, fontWeight: 'bold', marginTop: 'auto' },
  image: { width: '100%', aspectRatio: 1 },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontSize: 20, fontWeight: '500' },
})
