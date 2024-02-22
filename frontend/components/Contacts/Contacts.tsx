import styles from "./contacts.module.css";
import classNames from "classnames";
import Image from "next/image";
import mail from "../../public/assets/img/mail-icon.svg";
import phone from "../../public/assets/img/phone-icon.svg";
import location from "../../public/assets/img/location-icon.svg";
import { ContactType, ContactsProps } from "./contacts.types";

const Contacts: React.FC<ContactsProps> = ({ data }) => {
  const { title, info, button } = data;

  const icons: any = {
    mail,
    phone,
    location,
  };

  return (
    <section>
      <h2 className="Section__title" id="Контакты">
        {title}
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
            {info.map((contact: ContactType, index: number) => (
              <div key={index} className={styles.Contact__infoCell}>
                <Image src={icons[contact.icon]} alt="" />
                <div>{contact.text}</div>
              </div>
            ))}
          </div>
          <div className={styles.Contact__cardButtonDiv}>
            <button className={styles.Contact__cardButton}>
              {button.text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
