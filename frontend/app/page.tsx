import { Header, Logo, Info, Table, Contacts, Footer } from "@/components/";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.App__root}>
        <div className={styles.App__main}>
          <Logo />
          <Info />
          <Table />
          <Contacts />
        </div>
      </main>
      <Footer />
    </>
  );
}
