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
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
            <li className={styles.navItem} onClick={() => navigate("/")}>
                Home
            </li>
            <li className={styles.navItem} onClick={() => navigate("/produtos")}>
                Produtos
            </li>
            <li className={styles.navItem} onClick={() => navigate("/carrinho")}>
                <FaCartArrowDown className={styles.cartIcon} />
                Carrinho
                {itemCount > 0 && (
                    <span className={styles.cartBadge}>{itemCount}</span>
                )}
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
