import logo from "../../public/assets/img/BigLogo.svg";
import Image from "next/image";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <section className={styles.Logo__root}>
      <Image src={logo} alt="" />
    </section>
  );
};

export default Logo;
