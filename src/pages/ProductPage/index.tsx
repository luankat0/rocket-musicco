import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail'
import { useCart } from '../../contexts/CartContext'
import type { Product } from '../../types/Product'
import styles from './style.module.css'

const products: Product[] = [
    {
    id: "1",
    name: "Violão Yamaha",
    image: "/imgs/violaoyamaha.jpg",
    price: 1899.99,
    description: "Violão folk acústico Yamaha.",
  },
  {
    id: "2",
    name: "Guitarra Fender Stratocaster",
    image: "/imgs/guitarra.jpg",
    price: 6399.90,
    description: "Guitarra clássica Fender.",
  },
    {
        id: "4",
        name: "Teclado Casio CT-S200",
        image: "/imgs/teclado.jpg",
        price: 899.90,
        description: "Teclado Casio CT-S200.",
    },
    {
        id: "5",
        name: "Baixo Elétrico Fender Jazz Bass",
        image: "/imgs/baixo.jpg",
        price: 4999.90,
        description: "Baixo elétrico Fender Jazz Bass.",
    }
]

const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const { addToCart } = useCart()
    const navigate = useNavigate()

    const product = products.find((p) => p.id === id)
    if (!product) {
        return (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <p>Produto não encontrado</p>
                    <button className={styles.closeBtn} onClick={() => navigate("/")}>Fechar</button>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.overlay} onClick={() => navigate("/")}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation}>
                <button className={styles.closeBtn} onClick={() => navigate("/")}>x</button>
                <ProductDetail
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    description={product.description}
                    onAddToCart={() => {
                        addToCart(product)
                        navigate("/carrinho")
                    }}
                 />
            </div>
        </div>
    )
}

export default ProductPage