import styles from "./contacts.module.css";
import classNames from "classnames";
import Image from "next/image";
import mail from "../../public/assets/img/mail-icon.svg";
import phone from "../../public/assets/img/phone-icon.svg";
import location from "../../public/assets/img/location-icon.svg";

const Contacts = () => {
  return (
    <section>
      <h2 className="Section__title" id="Контакты">
        Контакты
      </h2>
      <div className={styles.Contacts__cardRoot}>
        <div
          className={classNames(
            styles.Contacts__card,
            styles.Contacts__cardItem1
          )}
        >
          <div className={styles.Contacts__map}></div>
        </div>
        <div
          className={classNames(
            styles.Contacts__card,
            styles.Contacts__cardItem2
          )}
        >
          <div className={styles.Contact__infoSection}>
            <div className={styles.Contact__infoCell}>
              <Image src={mail} alt="" /> <div>bss.spb@mail.ru</div>
            </div>
            <div className={styles.Contact__infoCell}>
              <Image src={phone} alt="" /> <div>(812) 924-6930</div>
            </div>
            <div className={styles.Contact__infoCell}>
              <Image src={location} alt="" />
              <div>
                г. Санкт-Петербург, Пушкинский район, посёлок Шушары, д 249  и
                далее 100м к синему крану
              </div>
            </div>
          </div>
          <div className={styles.Contact__cardButtonDiv}>
            <button className={styles.Contact__cardButton}>
              Скачать реквезиты
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
