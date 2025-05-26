import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../../mocks/productsData";
import { useCart } from "../../contexts/CartContext";
import { formatCurrency } from "../../utils/format";
import styles from "./style.module.css";
import { FaArrowLeft } from "react-icons/fa";

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
    <div className={styles.container}>
        <button
            className={styles.backBtn}
            onClick={() => navigate("/produtos")}
        >
           <FaArrowLeft /> Voltar para Produtos
        </button>

        <div className={styles.detail}>
            <img 
                src={product.image}
                alt={product.name} 
                className={styles.image}
            />
            <div className={styles.info}>
                <h1 className={styles.name}>{product.name}</h1>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>{formatCurrency(product.price)}</p>
                <button
                    className={styles.addButton}
                    onClick={() => addToCart(product)}
                >
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    </div>
  );
};

export default ProductPage;
