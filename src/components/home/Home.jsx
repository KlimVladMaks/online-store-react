import Header from "./header/Header";
import Footer from "./footer/Footer";
import ProductList from "./product-list/ProductList";
import styles from "./Home.module.css";

const products = [
    {
        id: 1,
        title: "iPhone 14 Pro Max",
        img: "https://ir.ozone.ru/s3/multimedia-k/wc700/6404606900.jpg",
        desc: "Смартфон Apple iPhone 14 Pro Max Dual SIM 6/1 ТБ, темно-серый",
        category: "Смартфоны",
        price: 155222,
    },
    {
        id: 2,
        title: "Samsung Galaxy Tab A8",
        img: "https://ir.ozone.ru/s3/multimedia-h/wc700/6228835601.jpg",
        desc: "Планшет Samsung Galaxy Tab A8 Wi-Fi (SM-X200), 10.5'', 64GB, серебристый",
        category: "Планшеты",
        price: 16886,
    },
    {
        id: 3,
        title: "Honor MagicBook 14",
        img: "https://ir.ozone.ru/s3/multimedia-8/wc700/6114724664.jpg",
        desc: "14'' Ноутбук Honor MagicBook 14, AMD Ryzen 5 5500U (2.1 ГГц), RAM 8 ГБ, SSD 512 ГБ, AMD Radeon Graphics, Windows Home, (5301AFLS), серый, Российская клавиатура",
        category: "Ноутбуки",
        price: 44951,
    },
    {
        id: 4,
        title: "Xiaomi TV A2",
        img: "https://ir.ozone.ru/s3/multimedia-7/wc700/6599607991.jpg",
        desc: "Телевизор Xiaomi TV A2 43'' 4K UHD, черный",
        category: "Телевизоры",
        price: 24824,
    },
    {
        id: 5,
        title: "HUAWEI Watch 4 Pro",
        img: "https://ir.ozone.ru/s3/multimedia-z/wc700/6686335391.jpg",
        desc: "Умные часы HUAWEI Watch 4 Pro, Dark Brown",
        category: "Смарт-часы и фитнес-браслеты",
        price: 38399,
    },
]

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <ProductList products={products} />
            <Footer />
        </div>
    );
}

export default Home;
