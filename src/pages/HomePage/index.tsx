import React from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../../components/ProductList";
import styles from "./style.module.css";
import productsData from "../../mocks/productsData";

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
            onClick={() => {
              const productsSection =
                document.getElementById("products-section");
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Explorar Produtos
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
      </section>

      {/* Seção de Produtos */}
      <section id="products-section" className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Instrumentos em Destaque</h2>
        <p className={styles.sectionDescription}>
          Confira nossa seleção especial de instrumentos musicais
        </p>
        <ProductList
          products={productsData}
          onProductClick={(id) => navigate(`/produto/${id}`)}
        />
      </section>
    </div>
  );
};

export default HomePage;
