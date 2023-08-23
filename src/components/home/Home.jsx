import Header from "./header/Header";
import Footer from "./footer/Footer";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Footer />
        </div>
    );
}

export default Home;
