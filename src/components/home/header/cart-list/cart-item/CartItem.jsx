/* eslint-disable react/prop-types */

import styles from './CartItem.module.css';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({order, deleteOrder}) => {
    return (
        <div className={styles.item}>
            <div className={styles['product-info']}>
                <img className={styles.img} src={order.img} alt={order.title} />
                <div>
                    <h2 className={styles.title}>{order.title}</h2>
                    <b className={styles.price}>{order.price} ₽</b>
                </div>
            </div>
            <FaTrash className={styles['del-button']} 
                     size={18}
                     onClick={() => deleteOrder(order.id)} />
        </div>
    );
}

export default CartItem;
