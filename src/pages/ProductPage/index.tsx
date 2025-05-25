import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import styles from "./style.module.css";
import productsData from "../../mocks/productsData";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = productsData.find((p) => p.id === id);
  if (!product) {
    return (
      <div className={styles.notFound}>
        <p>Produto não encontrado</p>
        <button className={styles.voltar} onClick={() => navigate("/")}>
          Voltar para Home
        </button>
      </div>
    );
  }
  return (
    <section className={styles.productPage}>
      <div className={styles.imgBox}>
        <img src={product.image} alt={product.name} className={styles.img} />
      </div>
      <div className={styles.infoBox}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>R$ {product.price.toFixed(2)}</div>{" "}
        <button
          className={styles.btn}
          onClick={() => {
            addToCart(product);
            navigate("/");
          }}
        >
          Adicionar ao Carrinho
        </button>
        <button className={styles.voltar} onClick={() => navigate("/")}>
          Voltar
        </button>
      </div>
    </section>
  );
};

export default ProductPage;
