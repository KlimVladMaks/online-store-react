import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div>
                <span className={styles.logo}>Online Store</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
}

export default Header;
