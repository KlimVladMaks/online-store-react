/* eslint-disable react/prop-types */

import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Header.module.css';
import Cart from './cart-list/CartList';

const Header = ({orders}) => {

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
                <Cart orders={orders} />
            )}
            <div className={styles.banner}></div>
        </header>
    );
}

export default Header;
