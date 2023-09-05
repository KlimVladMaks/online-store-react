import styles from "./AddProductMenu.module.css";

const AddProductMenu = () => {
    return (
        <div className={styles['modal-window']}>
            <div className={styles['modal-menu']}>
                <form className={styles.form}>
                    <input type="text" placeholder="Название товара" />
                    <input type="text" placeholder="Описание товара" />
                    <input type="text" placeholder="Категория товара" />
                    <input type="text" placeholder="Цена товара" />
                    <input type="text" placeholder="Ссылка на изображение товара" />
                </form>
            </div>
        </div>
    );
}

export default AddProductMenu;
