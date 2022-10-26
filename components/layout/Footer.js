import styles from "./Footer.module.css";
import Link from "next/link";
import { IoSchool } from "react-icons/io";

const Footer = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <p className={styles.text}>
          © Web Programming 2022. <br />
        </p>
      </div>
    </div>
  );
};

export default Footer;
