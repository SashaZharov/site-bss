import styles from "./footer.module.css";
import logo from "../../public/assets/img/Logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.App__footerRoot}>
      <div className={styles.App__footer}>
        <div className={styles.App_footerLeftSection}>
          <p>(812) 924-69-30</p>
          <p>bss.spb@mail.rus</p>
        </div>
        <div className={styles.App_footerRightSection}>
          <Image className={styles.App__svgImage} src={logo} alt="" />
          <p>БалтСпецСталь</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
