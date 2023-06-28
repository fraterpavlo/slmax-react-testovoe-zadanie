import Head from "next/head";
import Link from "next/link";
import styles from "../styles/components/MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Главная страница</title>
      </Head>
      <header className={styles["header"]}>
        <nav className={styles["header__nav"]}>
          <Link className={styles["header__link"]} href={"/"}>
            Главная
          </Link>
          <Link className={styles["header__link"]} href={"/products"}>
            Товары
          </Link>
        </nav>
      </header>

      <div>{children}</div>
    </>
  );
};

export default MainLayout;
