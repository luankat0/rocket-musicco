import React from 'react'
import styles from './style.module.css'

interface ProductCardProps {
    name: string
    image: string
    price: number
    onClick: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, price, onClick}) => {
    return (
        <div className={styles.card} onClick={onClick} tabIndex={0}>
            <div className={styles.imgWrapper}>
                <img src={image} alt={name} className={styles.img} />
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <span className={styles.price}>R$ {price.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default ProductCard