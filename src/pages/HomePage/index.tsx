import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from '../../components/ProductList'
import type { Product } from '../../types/Product'
import styles from './style.module.css'

const products: Product[] = [
    {
        id: "1",
        name: 'Violão Yamaha',
        image: '/imgs/violaoyamaha.jpg',
        price: 1899.99,
        description: 'Violão folk acústico Yamaha',
    },
    {
        id: "2",
        name: "Guitarra Fender Stratocaster",
        image: "/imgs/guitarra.jpg",
        price: 6399.90,
        description: "Guitarra clássica Fender.",
    },
    {
        id: "3",
        name: "Bateria Eletrônica Roland TD-17",
        image: "/imgs/bateria.jpg",
        price: 5999.90,
        description: "Bateria eletrônica Roland TD-17.",
    },
    
]

const HomePage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Instrumentos em destaque</h1>
            <ProductList 
                products={products}
                onProductClick={(id) => navigate(`/products/${id}`)}
            />
        </div>
    )
}

export default HomePage