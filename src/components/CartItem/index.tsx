import React from "react"
import styles from "./style.module.css"

interface CartItemProps {
    item: {
        id: string
        name: string
        image: string
        price: number
        quantity: number
    }
    onRemove: (id: string) => void
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove}) => {
    return (
        <div className={styles.cartItem}>
            <img src={item.image} alt={item.name} className={styles.img}/>
            <div className={styles.info}>
                <h4>{item.name}</h4>
                <span>{item.quantity} x R$ {item.price.toFixed(2)}</span>
            </div>
            <button className={styles.remove} onClick={() => onRemove(item.id)}>Remover</button>
        </div>
    )
}

export default CartItem