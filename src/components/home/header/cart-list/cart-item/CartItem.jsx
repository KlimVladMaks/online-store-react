/* eslint-disable react/prop-types */

import styles from './CartItem.module.css';

const CartItem = ({order}) => {
    return (
        <div className={styles.item}>
            <img className={styles.img} src={order.img} alt={order.title} />
            <div>
                <h2 className={styles.title}>{order.title}</h2>
                <b className={styles.price}>{order.price} ₽</b>
            </div>
        </div>
    );
}

export default CartItem;
