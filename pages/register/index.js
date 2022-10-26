import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import styles from "./index.module.css";
import Link from "next/link";
import { setCookie, getCookie } from "cookies-next";

export default function Login() {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    let data = {
      username: "Hades",
      lastName: "Battulga"
    }
    setCookie("option", JSON.stringify(data))
    
    //JSON.parse() --> String convert to JSON
    //JSON.stringify() --> JSON convert to String
    console.log(JSON.parse(getCookie("option")));
  }
  return (
    <div>
      <Header />
      <div className={styles.cont + " row"}>
        <div className={styles.loginCont + " col-4"}>
          <h1 className={styles.loginH1}>Нэвтрэх</h1>
          <p className={styles.loginP}>Манай хуудсанд тавтай морилно уу.</p>
          <form>
            <div>
              <div className={styles.name}>
                <input
                  name="fname"
                  placeholder="Овог"
                  type="text"
                  className={styles.contactInput}
                ></input>
                <input
                  name="lname"
                  placeholder="Нэр"
                  type="email"
                  className={styles.contactInput}
                ></input>
              </div>
              <div></div>
              <div>
                <label for="datemin">Төрсөн огноо:</label>
                <input
                  name="date"
                  placeholder="Төрсөн огноо"
                  type="date"
                  min="2000-01-01"
                ></input>
              </div>
              <div>
                <input
                  name="email"
                  placeholder="И-мэйл хаяг"
                  type="email"
                  className={styles.contactInput}
                ></input>
              </div>
              <div>
                <input
                  name="password"
                  placeholder="Нууц үг"
                  type="password"
                  className={styles.contactInput}
                ></input>
              </div>
              <div>
                <button type="submit" name="login" onClick={(e) => handleSubmit(e)} className={styles.loginBtn}>
                  {" "}
                  Бүртгүүлэх
                </button>
              </div>
              {/* \ */}
            </div>
          </form>
        </div>
        <div className={styles.contIndex + " col-8"}>
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
