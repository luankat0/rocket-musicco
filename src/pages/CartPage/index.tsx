import React from "react"
import Cart from "../../components/Cart"
import { useCart } from "../../contexts/CartContext"
import { useNavigate } from "react-router-dom"
import styles from "./style.module.css"

const CartPage: React.FC = () => {
    const { cart, removeFromCart, clearCart, checkout } = useCart()
    const navigate = useNavigate()

    return (
        <div className={styles.overlay} onClick={() => navigate("/")}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={() => navigate("/")}>x</button>
                <Cart 
                    items={cart}
                    onRemove={removeFromCart}
                    onClear={clearCart}
                    onCheckout={checkout}
                />
            </div>
        </div>
    )
}

export default CartPage