import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ProductList from "./product-list/ProductList";
import FullCard from "./full-card/FullCard";
import ProductServices from "../../services/ProductServices";

const Home = () => {

    let [products, setProducts] = useState([]);
    let [isProductsLoading, setIsProductsLoading] = useState(true);
    let [orders, setOrders] = useState([]);

    let [isShowFullCard, setIsShowFullCard] = useState(false);
    let [fullCartProduct, setFullCartProduct] = useState({});

    useEffect(() => {

        const fetchProducts = async () => {
            const loadedProducts = await ProductServices.getAll();
            setProducts(loadedProducts);
            setIsProductsLoading(false);
        }

        fetchProducts();
    }, [])

    const addToOrders = (product) => {
        if (!orders.includes(product)) {
            setOrders([...orders, product]);
        }
    }

    const deleteOrder = (id) => {
        setOrders(orders.filter(order => order.id !== id));
    }

    const isProductInOrders = (id) => {
        return orders.some(order => order.id === id);
    }

    const openFullCard = (product) => {
        setFullCartProduct(product);
        setIsShowFullCard(true);
    }

    const closeFullCard = () => {
        setFullCartProduct({});
        setIsShowFullCard(false);
    }

    return (
        <div className={styles.wrapper}>
            <Header orders={orders}
                    deleteOrder={deleteOrder} />
            {isProductsLoading && <h2 className={styles["loading-message"]}>Загрузка товаров...</h2>}
            {!isProductsLoading && <ProductList products={products}
                                                isProductInOrders={isProductInOrders}
                                                addToOrders={addToOrders}
                                                openFullCard={openFullCard} />}
            {isShowFullCard && <FullCard product={fullCartProduct}
                                         isProductInOrders={isProductInOrders}
                                         addToOrders={addToOrders}
                                         closeFullCard={closeFullCard} />}
            <Footer />
        </div>
    );
}

export default Home;
