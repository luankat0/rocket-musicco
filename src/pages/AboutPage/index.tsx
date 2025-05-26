import React from "react";
import styles from "./style.module.css";
import devKato from "../../assets/kato.jpeg";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Sobre a Musicco</h1>
          <p className={styles.subtitle}>
            Uma plataforma moderna para amantes da música
          </p>
        </header>

        <section className={styles.aboutSection}>
          <div className={styles.description}>
            <h2>Sobre a Aplicação</h2>
            <p>
              A <strong>Musicco</strong> é um e-commerce especializado em
              instrumentos musicais, desenvolvido com as mais modernas
              tecnologias frontend. Nossa plataforma oferece uma experiência
              completa de compras online, permitindo que músicos de todos os
              níveis encontrem os instrumentos perfeitos para expressar sua
              criatividade.
            </p>
            <p>
              Com uma interface intuitiva e responsiva, a Musicco proporciona
              uma navegação fluida entre nosso catálogo diversificado de
              instrumentos, desde guitarras e baixos até pianos digitais e
              instrumentos de sopro.
            </p>
          </div>

          <div className={styles.authorSection}>
            <h2>Desenvolvedor</h2>
            <div className={styles.authorCard}>
              <div className={styles.photoPlaceholder}>
                <img src={devKato} className={styles.photoPlaceholder} alt="Luan Kato"></img>
              </div>
              <div className={styles.authorInfo}>
                <h3>Luan Kato</h3>
                <p>Desenvolvedor da Aplicação</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.requirementsSection}>
          <h2>Requisitos do Projeto</h2>
          <p className={styles.projectDescription}>
            Este projeto foi desenvolvido como parte de um desafio frontend, com
            foco na criação de um sistema de compras online completo e
            funcional.
          </p>

          <div className={styles.objectiveCard}>
            <h3>Objetivo Principal</h3>
            <p>
              Desenvolver a interface frontend de um sistema de compras online
              que permite aos usuários selecionar produtos, adicioná-los a um
              carrinho virtual e visualizar o valor total em tempo real,
              garantindo atualizações dinâmicas conforme produtos são
              adicionados ou removidos.
            </p>
          </div>

          <div className={styles.techStack}>
            <h3>Stack Tecnológica</h3>
            <div className={styles.techGrid}>
              <div className={styles.techItem}>
                <span className={styles.techIcon}>⚛️</span>
                <span>React 18</span>
              </div>
              <div className={styles.techItem}>
                <span className={styles.techIcon}>🔷</span>
                <span>TypeScript</span>
              </div>
              <div className={styles.techItem}>
                <span className={styles.techIcon}>⚡</span>
                <span>Vite</span>
              </div>
              <div className={styles.techItem}>
                <span className={styles.techIcon}>🎨</span>
                <span>CSS Modules</span>
              </div>
              <div className={styles.techItem}>
                <span className={styles.techIcon}>🗂️</span>
                <span>Context API</span>
              </div>
              <div className={styles.techItem}>
                <span className={styles.techIcon}>💾</span>
                <span>LocalStorage</span>
              </div>
            </div>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏠</div>
              <h4>Visualização de Produtos</h4>
              <p>
                Lista completa de instrumentos musicais na página inicial, com
                informações essenciais e navegação intuitiva.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔍</div>
              <h4>Detalhes do Produto</h4>
              <p>
                Páginas individuais com informações detalhadas de cada
                instrumento, incluindo especificações técnicas e imagens de alta
                qualidade.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛒</div>
              <h4>Carrinho Dinâmico</h4>
              <p>
                Sistema de carrinho com adição/remoção de produtos em tempo
                real, cálculo automático de totais e persistência de dados.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✅</div>
              <h4>Finalização de Compra</h4>
              <p>
                Processo completo de checkout com validação de dados e
                confirmação de pedido para uma experiência de compra completa.
              </p>
            </div>
          </div>

          <div className={styles.additionalFeatures}>
            <h3>Funcionalidades Adicionais</h3>
            <ul className={styles.featuresList}>
              <li>
                <strong>Persistência de Dados:</strong> Utilização do
                LocalStorage para manter o carrinho de compras entre sessões
              </li>
              <li>
                <strong>Design Responsivo:</strong> Interface adaptável para
                diferentes tamanhos de tela e dispositivos
              </li>
              <li>
                <strong>Mock Data:</strong> Dados simulados realistas para
                demonstração completa das funcionalidades
              </li>
              <li>
                <strong>Navegação SPA:</strong> Single Page Application com
                React Router para navegação fluida
              </li>
              <li>
                <strong>Gestão de Estado:</strong> Context API para
                gerenciamento global do estado do carrinho
              </li>
              <li>
                <strong>Documentação:</strong> README completo com instruções de
                instalação e execução do projeto
              </li>
            </ul>
          </div>
        </section>

        <footer className={styles.pageFooter}>
          <p>Projeto desenvolvido com React + TypeScript + Vite</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
