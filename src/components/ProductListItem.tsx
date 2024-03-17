import { StyleSheet, Text, View, Image } from 'react-native'
import Colors from '../constants/Colors'
import { Product } from '../types'

// const product = products[1]

export const defaultPizzaImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

type ProductListItemProps = {
  product: Product
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name} H</Text>
      <Text style={styles?.price}>${product.price}</Text>
    </View>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  title: { fontSize: 18, fontWeight: '600', marginVertical: 10 },
  price: { fontWeight: 'bold', color: Colors.light.tint },
  image: { width: '100%', aspectRatio: 1 },
})
