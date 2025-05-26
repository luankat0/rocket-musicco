import React, { useState, useEffect} from "react";
import { useCart } from "../../contexts/CartContext";
import { formatCurrency } from "../../utils/format";
import styles from "./style.module.css";

interface Purchase {
    id: string;
    date: string;
    items: {
        id: string;
        name: string;
        price: number;
        quantity: number;
    }[];
    total: number;
}

const CartPage: React.FC = () => {
    const { cart, clearCart } = useCart();
    const [history, setHistory] = useState<Purchase[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("purchaseHistory");
        if (stored) {
            setHistory(JSON.parse(stored));
        }
    }, []);

    const handleCheckout = () => {
        if (cart.length === 0) return;
        const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
        const newPurchase: Purchase = {
            id: Date.now().toString(),
            date: new Date().toLocaleString("pt-BR"),
            items: cart.map((i) => ({
                id: i.id,
                name: i.name,
                price: i.price,
                quantity: i.quantity,
            })),
            total,
        };
        const updated = [newPurchase, ...history];
        localStorage.setItem("purchaseHistory", JSON.stringify(updated));
        setHistory(updated);
        clearCart();
    }

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className={styles.container}>
            <h1>Seu carrinho</h1>

            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>    
            ) : (
                <>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Preço</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((i) => (
                                <tr key={i.id}>
                                    <td>{i.name}</td>
                                    <td>{i.quantity}</td>
                                    <td>{formatCurrency(i.price * i.quantity)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3} className={styles.totalLabel}>
                                    Total:
                                </td>
                                <td className={styles.totalValue}>
                                    {formatCurrency(totalPrice)}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <button className={styles.checkoutButton} onClick={handleCheckout}>
                        Finalizar compra
                    </button>
                </>
            )}

            {history.length > 0 && (
                <section className={styles.history}>
                    <h2>Histórico de Compras</h2>
                    {history.map((p) => (
                        <div key={p.id} className={styles.purchaseCard}>
                            <strong>Compra em {p.date}</strong>
                            <ul>
                                {p.items.map((item) => (
                                    <li key={item.id}>
                                        {item.quantity}x {item.name} = {" "}
                                        {formatCurrency(item.price * item.quantity)}
                                    </li>
                                ))}
                            </ul>
                            <p>
                                <em>Total: {formatCurrency(p.total)}</em>
                            </p>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
};

export default CartPage;
