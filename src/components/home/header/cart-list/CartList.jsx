/* eslint-disable react/prop-types */

import styles from './CartList.module.css';
import CartItem from './cart-item/CartItem';
import CartSum from './cart-sum/CartSum';

const CartList = ({ orders, deleteOrder }) => {
    return (
        <div className={styles['shop-cart-surface']}>
            {orders.length === 0 && <h2 className={styles['empty-message']}>Корзина пуста</h2>}
            {orders.length > 0 && <CartSum orders={orders} />}
            {orders.map(order => (
                <CartItem key={order.id}
                          order={order}
                          deleteOrder={deleteOrder} />
            ))}
        </div>
    );
}

export default CartList;
