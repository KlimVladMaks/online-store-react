/* eslint-disable react/prop-types */

import styles from "./ProductCard.module.css";

const ProductCard = ({product, addToOrders}) => {
    return (
        <div className={styles.card}>
            <div className={styles["img-wrapper"]}>
                <img className={styles.img} src={product.img} alt={product.title} />
            </div>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.desc}>{product.desc}</p>
            <b className={styles.price}>{product.price} ₽</b>
            <div className={styles["add-button"]}
                 onClick={() => addToOrders(product)}>+</div>
        </div>
    );
}

export default ProductCard;
