/* eslint-disable react/prop-types */

import styles from './CartList.module.css';
import CartItem from './cart-item/CartItem';

const Cart = ({orders}) => {
    return (
        <div className={styles['shop-cart-surface']}>
            {orders.length === 0 && <h2 className={styles['empty-message']}>Корзина пуста</h2>}
            {orders.map(order => (
                <CartItem key={order.id} order={order} />
            ))}
        </div>
    );
}

export default Cart;
