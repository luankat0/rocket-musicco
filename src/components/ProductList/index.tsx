import React from 'react'
import ProductCard from '../ProductCard'

interface Product {
    id: string
    name: string
    image: string
    price: number
}

interface ProductListProps {
    products: Product[]
    onProductClick: (id: string) => void
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductClick }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem'}}>
        {products.map(product => (
            <ProductCard
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                onClick={() => onProductClick(product.id)}
            />
        ))}
    </div>
)

export default ProductList