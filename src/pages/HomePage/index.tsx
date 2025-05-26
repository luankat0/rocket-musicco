import React from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../../components/ProductList";
import productsData from "../../mocks/productsData";
import styles from "./style.module.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* Banner Principal */}
      <section className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Descubra sua paixão pela música</h1>
          <p className={styles.heroDescription}>
            Encontre os melhores instrumentos musicais com qualidade excepcional
            e preços imperdíveis. Desde violões até pianos digitais, temos tudo
            para transformar sua melodia em realidade.
          </p>
          <button
            className={styles.heroButton}
            onClick={() => navigate("/produtos")}
          >
            Conheça nossos Produtos
          </button>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.musicNote}>🎵</div>
          <div className={styles.musicNote}>🎶</div>
          <div className={styles.musicNote}>🎼</div>
        </div>
      </section>
      {/* Seção de Destaques */}
      <section className={styles.featuresSection}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🎯</div>
          <h3>Qualidade Garantida</h3>
          <p>Produtos selecionados das melhores marcas do mercado</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🚚</div>
          <h3>Entrega Rápida</h3>
          <p>Receba seus instrumentos com segurança e agilidade</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>💰</div>
          <h3>Melhor Preço</h3>
          <p>Preços competitivos e condições especiais de pagamento</p>
        </div>
      </section>{" "}
      <section className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Nossos Instrumentos</h2>
        <ProductList
          products={productsData.slice(0, 4)}
          onProductClick={(id) => navigate(`/produto/${id}`)}
        />
        <button
          className={styles.viewAllButton}
          onClick={() => navigate("/produtos")}
        >
          Ver todos os produtos
        </button>
      </section>
    </div>
  );
};

export default HomePage;
