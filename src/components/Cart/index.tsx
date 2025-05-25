import React from "react";
import CartItemComponent from "../CartItem";
import styles from "./style.module.css";
import type { CartItem as CartItemType } from "../../types/CartItem";

interface CartProps {
  items: CartItemType[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({
  items,
  onRemove,
  onClear,
  onCheckout,
}) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cart}>
      <h2>Carrinho de compras</h2>
      <div className={styles.items}>
        {items.length === 0 && <p>Seu carrinho está vazio.</p>}{" "}
        {items.map((item) => (
          <CartItemComponent key={item.id} item={item} onRemove={onRemove} />
        ))}
      </div>
      <div className={styles.summary}>
        <span>Total: R$ {total.toFixed(2)}</span>
        <button className={styles.checkout} onClick={onCheckout}>
          Finalizar compra
        </button>
        <button className={styles.clear} onClick={onClear}>
          Limpar carrinho
        </button>
      </div>
    </div>
  );
};

export default Cart;
