import { useState } from 'react';
import styles from './Header.module.css'
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {

    let [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles['header-top']}>
                <span className={styles.logo}>Online Store</span>
                <FaShoppingCart className={`${styles['shop-cart-button']} ${isCartOpen && styles.active}`}
                                onClick={() => setIsCartOpen(!isCartOpen)} />
            </div>
            {isCartOpen && (
                <div className={styles['shop-cart']}></div>
                )}
            <div className={styles.banner}></div>
        </header>
    );
}

export default Header;
