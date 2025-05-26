import React from "react";
import { formatCurrency } from "../../utils/format";
import styles from "./style.module.css";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface Props {
  products: Product[];
  onProductClick: (id: string) => void;
}

const ProductList: React.FC<Props> = ({ products, onProductClick }) => (
  <div className={styles.grid}>
    {products.map((product) => (
      <div
        className={styles.card}
        key={product.id}
        onClick={() => onProductClick(product.id)}
      >
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
          <div className={styles.overlay}>
            <span>Ver detalhes</span>
          </div>
        </div>
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.price}>{formatCurrency(product.price)}</p>
      </div>
    ))}
  </div>
);

export default ProductList;
