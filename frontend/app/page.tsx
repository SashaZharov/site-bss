import { Header, Logo, Info, Table, Contacts, Footer } from "@/components/";
import styles from "./page.module.css";
import { getTableData } from "@/api";
import contactsDataJson from "../components/Contacts/contactsData.json";
import infoDataJson from "../components/Info/InfoData.json";

export default function Home() {
  const infoData = infoDataJson.data;
  const contactsData = contactsDataJson.data;
  const tableData = getTableData();
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
