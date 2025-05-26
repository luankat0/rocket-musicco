import React from "react";
import { formatCurrency } from "../../utils/format";
import styles from "./style.module.css";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}
interface ProductCardProps {
  product: Product;
  onClick: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(product.id)}>
      <div className={styles.imgWrapper}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.overlay}>
          <span>Ver detalhes</span>
        </div>
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>{formatCurrency(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
