/* eslint-disable react/prop-types */

import { useState } from "react";
import styles from "./AddProductMenu.module.css";
import ProductServices from "../../../services/ProductServices";

const clearProductData = {
    title: "",
    img: "",
    desc: "",
    category: "",
    price: "",
}

const AddProductMenu = ({ closeAddProductMenu, products, setProducts }) => {

    let [productData, setProductData] = useState(clearProductData);

    const getMaxId = () => {
        return products.reduce((maxId, product) => Math.max(product.id, maxId), -1);
    }

    const AddNewProduct = () => {
        const newProduct = { id: getMaxId() + 1, ...productData };
        ProductServices.addNew(newProduct);
        setProducts([...products, newProduct]);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductData({
            ...productData,
            [name]: value,
        });
    }

    return (
        <div className={styles['modal-window']}>
            <div className={styles['modal-menu']}>
                <div className={styles.close}
                     onClick={() => closeAddProductMenu()}>×</div>
                <form className={styles.form}>
                    <input type="text"
                           placeholder="Название товара"
                           className={styles.input}
                           name="title"
                           onChange={handleInputChange}
                           value={productData.title} />

                    <input type="text"
                           placeholder="Описание товара"
                           className={styles.input}
                           name="desc"
                           onChange={handleInputChange}
                           value={productData.desc} />

                    <input type="text"
                           placeholder="Категория товара"
                           className={styles.input}
                           name="category"
                           onChange={handleInputChange}
                           value={productData.category} />

                    <input type="text"
                           placeholder="Цена товара"
                           className={styles.input}
                           name="price"
                           onChange={handleInputChange}
                           value={productData.price} />

                    <input type="text"
                           placeholder="Ссылка на изображение товара"
                           className={styles.input}
                           name="img"
                           onChange={handleInputChange}
                           value={productData.img} />

                    <div className={styles["add-button"]}
                         onClick={() => {
                             AddNewProduct();
                             closeAddProductMenu();
                         }}>Добавить товар</div>
                </form>
            </div>
        </div>
    );
}

export default AddProductMenu;
