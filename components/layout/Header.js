import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.cont}>
      <div>
        <img
          className={styles.navbarLogo}
          src="https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg"
        />
      </div>
      <div className={styles.navbarBtn}>
        {/* <Link href="/Home">
          <a className={styles.home}>Home</a>
        </Link> */}
        <Link href="/register">
          <a className={styles.register}>Бүртгүүлэх</a>
        </Link>
        <Link href="/login">
          <a className={styles.login}>Нэвтрэх</a>
        </Link>
      </div>
    </div>
  );
};
export default Header;
