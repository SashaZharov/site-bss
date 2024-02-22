import styles from "./info.module.css";
import classNames from "classnames";
import { InfoProps } from "./info.types";

const Info: React.FC<InfoProps> = ({ data }) => {
  const { title, cards } = data;

  return (
    <section>
      <h2 className="Section__title" id={title}>
        {title}
      </h2>
      <div className={styles.Info__cardRoot}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={classNames(
              styles.Info__card,
              styles[`Info__cardItem${index + 1}`]
            )}
          >
            <h3 className={styles.Info__title}>{card.title}</h3>
            <div>
              <ul className={styles.Info__ul}>
                {card.list.map((item, itemIndex) => (
                  <li key={itemIndex} className={styles.Info__li}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
