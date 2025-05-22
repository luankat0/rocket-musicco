import React from 'react'
import CartItem from '../CartItem'
import styles from './style.module.css'

interface CartItemType {
    id: string
    name: string
    image: string
    price: number
    quantity: number
}

interface CartProps {
    items: CartItemType[]
    onRemove: (id: string) => void
    onClear: () => void
    onCheckout: () => void
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onClear, onCheckout }) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

    return (
        <div className={styles.cart}>
            <h2>Carrinho de compras</h2>
            <div className={styles.items}>
                {items.length === 0 && <p>Seu carrinho está vazio.</p>}
                {items.map(item => (
                    <CartItem key={item.id} item={item} onRemove={onRemove} />
                ))}
            </div>
            <div className={styles.summary}>
                <span>Total: R$ {total.toFixed(2)}</span>
                <button className={styles.checkout} onClick={onCheckout}>Finalizar compra</button>
                <button className={styles.clear} onClick={onClear}>Limpar carrinho</button>
            </div>
        </div>
    )
}

export default Cart