"use client";
import styles from "./table.module.css";
import classNames from "classnames";
import tableData from "./tableData.json";
import { getTableCards } from "@/api";
import { API_URL } from "@/urls";
import { useEffect, useState } from "react";
import { TableProps } from "./table.types";
import { splitIntoSentences } from "@/utils";

const Table: React.FC = () => {
  const [tableDataWithCards, setTableDataWithCards] =
    useState<TableProps>(tableData);

  useEffect(() => {
    getTableCards().then((res) => {
      const newCards = [
        {
          text: splitIntoSentences(res.description1),
        },
        {
          text: splitIntoSentences(res.description2),
        },
      ];
      setTableDataWithCards((prev) => {
        return {
          data: {
            ...prev.data,
            cards: newCards,
          },
        };
      });
    });
  }, [tableDataWithCards]);

  const { title, table, cards, button } = tableDataWithCards.data;

  return (
    <section>
      <h2 className="Section__title" id="Прайс лист">
        {title}
      </h2>
      <div className={styles.Table__cardRoot}>
        <div
          className={classNames(styles.Table__card, styles.Table__cardItem1)}
        >
          <div className={styles.Table__table}>
            <div className={styles.styled__table}>
              <div className={classNames(styles.tableRow, styles.tableHeader)}>
                <div className={styles.tableCell}>СОРТ</div>
                <div className={styles.tableCell}>Прф.</div>
                <div className={styles.tableCell}>д (мм)</div>
                <div className={styles.tableCell}>L (м)</div>
                <div className={styles.tableCell}>-</div>
                <div className={styles.tableCell}>База</div>
                <div className={styles.tableCell}>Наличие кг</div>
                <div className={styles.tableCell}>Цена с НДС 20%</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>Ячейка 1</div>
                <div className={styles.tableCell}>Ячейка 2</div>
                <div className={styles.tableCell}>Ячейка 3</div>
                <div className={styles.tableCell}>Ячейка 4</div>
                <div className={styles.tableCell}>Ячейка 5</div>
                <div className={styles.tableCell}>Ячейка 6</div>
                <div className={styles.tableCell}>Ячейка 7</div>
                <div className={styles.tableCell}>Ячейка 8</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>Ячейка 1</div>
                <div className={styles.tableCell}>Ячейка 2</div>
                <div className={styles.tableCell}>Ячейка 3</div>
                <div className={styles.tableCell}>Ячейка 4</div>
                <div className={styles.tableCell}>Ячейка 5</div>
                <div className={styles.tableCell}>Ячейка 6</div>
                <div className={styles.tableCell}>Ячейка 7</div>
                <div className={styles.tableCell}>Ячейка 8</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>Ячейка 1</div>
                <div className={styles.tableCell}>Ячейка 2</div>
                <div className={styles.tableCell}>Ячейка 3</div>
                <div className={styles.tableCell}>Ячейка 4</div>
                <div className={styles.tableCell}>Ячейка 5</div>
                <div className={styles.tableCell}>Ячейка 6</div>
                <div className={styles.tableCell}>Ячейка 7</div>
                <div className={styles.tableCell}>Ячейка 8</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>Ячейка 1</div>
                <div className={styles.tableCell}>Ячейка 2</div>
                <div className={styles.tableCell}>Ячейка 3</div>
                <div className={styles.tableCell}>Ячейка 4</div>
                <div className={styles.tableCell}>Ячейка 5</div>
                <div className={styles.tableCell}>Ячейка 6</div>
                <div className={styles.tableCell}>Ячейка 7</div>
                <div className={styles.tableCell}>Ячейка 8</div>
              </div>
            </div>
          </div>
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
                <a
                  className={styles.Table__cardButton}
                  href={`${API_URL}/download-pricelist`}
                  download="price_list.xlsx"
                >
                  {button.text}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Table;
