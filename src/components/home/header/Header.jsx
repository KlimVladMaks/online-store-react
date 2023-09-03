/* eslint-disable react/prop-types */

import { useState } from 'react';
import { FaShoppingCart, FaPlus } from 'react-icons/fa';
import styles from './Header.module.css';
import CartList from './cart-list/CartList';

const Header = ({ orders, deleteOrder }) => {

    let [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles['header-top']}>
                <span className={styles.logo}>Online Store</span>
                <div className={styles['header-buttons']}>
                    <FaShoppingCart className={`${styles['header-button']} ${isCartOpen && styles.active}`}
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        size={20} />
                    <FaPlus className={styles['header-button']}
                            size={20} />
                </div>
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
