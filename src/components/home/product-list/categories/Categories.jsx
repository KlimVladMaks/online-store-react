/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import styles from "./Categories.module.css";

const Categories = ({products, chooseCategory, currentCategory}) => {

    let [categories, setCategories] = useState([]);

    useEffect(() => {

        const getAllCategories = () => {
            const categoriesSet = new Set();
            products.forEach(product => {
                categoriesSet.add(product.category);
            })
            return Array.from(categoriesSet);
        }

        setCategories(getAllCategories());

    }, [products])

    return (
        <div className={styles['category-list']}>
            <div key={'all'} 
                 className={`${styles['category-item']} ${currentCategory === 'all' && styles.active} ${styles.all}`}
                 onClick={() => chooseCategory('all')}>Всё</div>
            {categories.map(category => (
                <div key={category} 
                     className={`${styles['category-item']} ${currentCategory === category && styles.active}`}
                     onClick={() => chooseCategory(category)}>{category}</div>
            ))}
        </div>
    );
}

export default Categories;
