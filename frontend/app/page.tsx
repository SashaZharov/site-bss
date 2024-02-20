import { Header, Logo, Info, Table, Contacts, Footer } from "@/components/";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Logo />
        <Info />
        <Table />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
