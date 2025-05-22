import React from 'react'
import styles from './style.module.css'

interface HeaderProps {
    onCartClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => (
    <header className={styles.header}>
        <div className={styles.logo}>🎸
            <span>Musicco</span>
        </div>
        <button className={styles.cartButton} onClick={onCartClick}>
            🛒 Carrinho
        </button>
    </header>
)

export default Header