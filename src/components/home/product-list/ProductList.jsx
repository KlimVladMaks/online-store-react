/* eslint-disable react/prop-types */

import ProductCard from "./product-card/ProductCard";
import styles from "./ProductList.module.css";

const ProductList = ({products, addToOrders}) => {
    return (
        <main className={styles.main}>
            {products.map(product => (
                <ProductCard key={product.id} 
                             product={product}
                             addToOrders={addToOrders} />
            ))}
        </main>
    );
}

export default ProductList;
