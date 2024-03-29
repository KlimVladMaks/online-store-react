/* eslint-disable react/prop-types */

import styles from "./ProductCard.module.css";

const ProductCard = ({product, isProductInOrders, addToOrders, openFullCard}) => {
    return (
        <div className={styles.card}>
            <div className={styles["img-wrapper"]} onClick={() => openFullCard(product)}>
                <img className={styles.img} src={product.img} alt={product.title} />
            </div>
            <h2 className={styles.title} onClick={() => openFullCard(product)}>{product.title}</h2>
            <p className={styles.desc}>{product.desc}</p>
            <b className={styles.price}>{product.price} ₽</b>
            <div className={`${styles["add-button"]} ${isProductInOrders(product.id) && styles.blocked}`}
                 onClick={() => addToOrders(product)}>{isProductInOrders(product.id) ? "✓" : "+"}</div>
        </div>
    );
}

export default ProductCard;
