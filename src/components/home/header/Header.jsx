/* eslint-disable react/prop-types */

import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Header.module.css';
import CartList from './cart-list/CartList';

const Header = ({ orders, deleteOrder }) => {

    let [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles['header-top']}>
                <span className={styles.logo}>Online Store</span>
                <FaShoppingCart className={`${styles['shop-cart-button']} ${isCartOpen && styles.active}`}
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    size={20} />
            </div>
            {isCartOpen && (
                <CartList orders={orders}
                          deleteOrder={deleteOrder} />
            )}
            <div className={styles.banner}>
                <span className={styles['banner-title']}>Интернет-магазин полезных вещей</span>
                <span className={styles['banner-subtitle']}>Для вас и ваших близких</span>
            </div>
        </header>
    );
}

export default Header;
