/* eslint-disable react/prop-types */

import { useState } from "react";
import styles from "./ProductList.module.css";
import ProductCard from "./product-card/ProductCard";
import Categories from "./categories/Categories";

const ProductList = ({products, isProductInOrders, addToOrders, openFullCard}) => {

    let [currentProducts, setCurrentProducts] = useState(products);
    let [currentCategory, setCurrentCategory] = useState('all');

    const chooseCategory = (category) => {
        let filteredProducts;
        if (category === 'all') {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(product => product.category === category);
        }
        setCurrentProducts(filteredProducts);
        setCurrentCategory(category);
    }

    return (
        <div>
            <Categories products={products}
                        chooseCategory={chooseCategory}
                        currentCategory={currentCategory} />
            <main className={styles.main}>
                {currentProducts.map(product => (
                    <ProductCard key={product.id} 
                                 product={product}
                                 isProductInOrders={isProductInOrders}
                                 addToOrders={addToOrders}
                                 openFullCard={openFullCard} />
                ))}
            </main>
        </div>
    );
}

export default ProductList;
