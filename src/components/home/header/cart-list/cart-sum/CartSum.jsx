/* eslint-disable react/prop-types */

import styles from "./CartSum.module.css";

const CartSum = ({orders}) => {

    let sum = 0;
    orders.forEach(order => {
        sum += order.price;
    })

    return (
        <div className={styles.sum}>Итого: {<b>{sum} ₽</b>}</div>
    );
}

export default CartSum;
