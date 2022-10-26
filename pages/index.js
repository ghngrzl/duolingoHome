import styles from "../styles/Home.module.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.cont}>
        <div className={styles.contIndex}>
          <img
            className={styles.img}
            src="https://d35aaqx5ub95lt.cloudfront.net/images/331a32943ff73be28537dfc7469d5639.svg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
