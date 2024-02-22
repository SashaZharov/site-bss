import styles from "./table.module.css";
import classNames from "classnames";
import { TableProps } from "./table.types";

const Table: React.FC<TableProps> = ({ data }) => {
  const { title, table, cards, button } = data;

  return (
    <section>
      <h2 className="Section__title" id="Прайс лист">
        {title}
      </h2>
      <div className={styles.Table__cardRoot}>
        <div
          className={classNames(styles.Table__card, styles.Table__cardItem1)}
        >
          <div className={styles.Table__table}>Таблица</div>
        </div>

        {cards.map((card, index) => (
          <div
            key={index}
            className={classNames(
              styles.Table__card,
              styles[`Table__cardItem${index + 2}`]
            )}
          >
            {card.text && (
              <div className={styles.Table__cardItemText}>
                {card.text.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            )}
            {table && index === cards.length - 1 && (
              <div className={styles.Table__cardButtonDiv}>
                <button className={styles.Table__cardButton}>
                  {button.text}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Table;
