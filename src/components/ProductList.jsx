import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ addToCart, selectedCategory }) => {
  return (
  <div>
    <h2>Available Products</h2>

    {sampleProducts
      .filter(product =>
        selectedCategory === "all" || product.category === selectedCategory
      )
      .map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}

    {sampleProducts
  .filter(product =>
    selectedCategory === "all" || product.category === selectedCategory
  ).length === 0 && (
    <p>No products available</p>
)}
  </div>
)
 
}

export default ProductList
