import React from "react";
import type { CartItem as CartItemType} from "../../types/CartItem";
import styles from "./style.module.css";

interface CartItemComponentProps {
  item: CartItemType;
  onRemove: (id: string) => void;
}

const CartItemComponent: React.FC<CartItemComponentProps> = ({ item, onRemove }) => {
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.img} />
      <div className={styles.info}>
        <h4>{item.name}</h4>
        <span>
          {item.quantity} x R$ {item.price.toFixed(2)}
        </span>
      </div>
      <button className={styles.remove} onClick={() => onRemove(item.id)}>
        Remover
      </button>
    </div>
  );
};

export default CartItemComponent;
