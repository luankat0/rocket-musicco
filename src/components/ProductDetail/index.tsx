import React from "react"
import styles from "./style.module.css"

interface ProductDetailProps {
    name: string
    image: string
    price: number
    description: string
    onAddToCart: () => void
}

const ProductDetail: React.FC<ProductDetailProps> = ({
    name,
    image,
    price,
    description,
    onAddToCart,
}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt={name} className={styles.img} />
            <div className={styles.info}>
                <h2>{name}</h2>
                <p>{description}</p>
                <span className={styles.price}>R$ {price.toFixed(2)}</span>
                <button onClick={onAddToCart} className={styles.btn}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default ProductDetail