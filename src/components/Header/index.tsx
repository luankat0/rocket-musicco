import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { useCart } from "../../contexts/CartContext";
import styles from "./style.module.css";
import Logo from "../../assets/logo.png";

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { getDistinctItemsCount } = useCart();
  const itemCount = getDistinctItemsCount();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" className={styles.logoImage} />
        <span>Musicco</span>
      </div>
      <button className={styles.cartButton} onClick={onCartClick}>
        <div className={styles.cartIconWrapper}>
          <FaCartArrowDown className={styles.cartIcon} />
          {itemCount > 0 && (
            <span className={styles.cartBadge}>{itemCount}</span>
          )}
        </div>
        Carrinho
      </button>
    </header>
  );
};

export default Header;
