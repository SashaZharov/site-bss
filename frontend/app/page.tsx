import { Header, Logo, Info, Table, Contacts, Footer } from "@/components/";
import styles from "./page.module.css";
import { getInfoData, getTableData, getContactsData } from "@/api";

export default function Home() {
  const infoData = getInfoData();
  const tableData = getTableData();
  const contactsData = getContactsData();
  return (
    <>
      <Header />
      <main className={styles.App__root}>
        <div className={styles.App__main}>
          <Logo />
          <Info data={infoData} />
          <Table data={tableData} />
          <Contacts data={contactsData} />
        </div>
      </main>
      <Footer />
    </>
  );
}
