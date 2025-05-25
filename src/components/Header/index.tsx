import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { useCart } from "../../contexts/CartContext";
import styles from "./style.module.css";
import Logo from "../../assets/Logo.png";



const Header: React.FC = () => {
  const { getDistinctItemsCount } = useCart();
  const navigate = useNavigate();
  const itemCount = getDistinctItemsCount();

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src={Logo} alt="Log da Musicco" className={styles.logoImage} />
        <span>Musicco</span>
      </div>
      <button className={styles.cartButton} onClick={() => navigate("/carrinho")}>
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
