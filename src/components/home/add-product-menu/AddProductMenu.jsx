/* eslint-disable react/prop-types */

import styles from "./AddProductMenu.module.css";

const AddProductMenu = ({ closeAddProductMenu }) => {
    return (
        <div className={styles['modal-window']}>
            <div className={styles['modal-menu']}>
                <div className={styles.close}
                     onClick={() => closeAddProductMenu()}>×</div>
                <form className={styles.form}>
                    <input type="text"
                           placeholder="Название товара"
                           className={styles.input} />
                    <input type="text"
                           placeholder="Описание товара"
                           className={styles.input} />
                    <input type="text"
                           placeholder="Категория товара"
                           className={styles.input} />
                    <input type="text"
                           placeholder="Цена товара"
                           className={styles.input} />
                    <input type="text"
                           placeholder="Ссылка на изображение товара"
                           className={styles.input} />
                    <div className={styles["add-button"]}>Добавить товар</div>
                </form>
            </div>
        </div>
    );
}

export default AddProductMenu;
