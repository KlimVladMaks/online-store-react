/* eslint-disable react/prop-types */

import styles from "./FullCard.module.css";

const FullCard = ({ product, isProductInOrders, addToOrders, closeFullCard }) => {
    return (
        <div className={styles["modal-window"]}>
            <div className={styles["modal-card"]}>
                <div className={styles.close} onClick={closeFullCard}>×</div>
                <div className={styles["img-wrapper"]}>
                    <img className={styles.img} src={product.img} alt={product.title} />
                </div>
                <h2 className={styles.title}>{product.title}</h2>
                <p className={styles.desc}>{product.desc}</p>
                <div className={styles["price-button-container"]}>
                    <b className={styles.price}>{product.price} ₽</b>
                    <div className={`${styles["add-button"]} ${isProductInOrders(product.id) && styles.blocked}`}
                        onClick={() => addToOrders(product)}>{isProductInOrders(product.id) ? "✓" : "+"}</div>
                </div>
            </div>
        </div>
    );
}

export default FullCard;
