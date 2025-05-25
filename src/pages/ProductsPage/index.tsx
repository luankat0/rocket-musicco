import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../../components/ProductList';
import productsData from '../../mocks/productsData';
import styles from './style.module.css';

const ProductsPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Produtos</h1>
            <ProductList
                products={productsData}
                onProductClick={(id) => navigate(`/produto/${id}`)}
            />
        </div>
    )
}

export default ProductsPage;